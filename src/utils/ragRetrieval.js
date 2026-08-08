import { RAG_CHUNKS } from '../data/ragCorpus';

const STOP_WORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'what', 'who', 'how', 'when', 'where',
  'of', 'in', 'on', 'at', 'to', 'for', 'and', 'or', 'our', 'we', 'they', 'it', 'that', 'this',
]);

export function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

/**
 * Hybrid-style score: keyword overlap (BM25-lite) + bigram boost + section hint.
 */
export function retrieveChunks(query, topK = 4) {
  const queryTokens = tokenize(query);
  const queryBigrams = [];
  for (let i = 0; i < queryTokens.length - 1; i++) {
    queryBigrams.push(`${queryTokens[i]} ${queryTokens[i + 1]}`);
  }

  const scored = RAG_CHUNKS.map((chunk) => {
    const textLower = chunk.text.toLowerCase();
    const chunkTokens = tokenize(chunk.text);
    const tokenSet = new Set(chunkTokens);

    let score = 0;
    queryTokens.forEach((qt) => {
      if (tokenSet.has(qt)) score += 3;
      if (textLower.includes(qt)) score += 1.5;
    });

    queryBigrams.forEach((bg) => {
      if (textLower.includes(bg)) score += 4;
    });

    if (/revenue|income|cash|margin|arr/i.test(query) && /revenue|income|cash|margin|arr/i.test(chunk.text)) {
      score += 2;
    }
    if (/risk|factor|regulat|cyber/i.test(query) && chunk.section.includes('Risk')) {
      score += 3;
    }
    if (/ceo|officer|morrison|executive/i.test(query) && /CEO|Morrison|Officer/i.test(chunk.text)) {
      score += 4;
    }
    if (/rag|retriev|embed|bm25|faiss|hybrid/i.test(query) && /retriev|BM25|embedding|RAG|FAISS/i.test(chunk.text)) {
      score += 3;
    }

    const maxPossible = Math.max(queryTokens.length * 3 + 10, 1);
    const normalized = Math.min(99, Math.round((score / maxPossible) * 100));

    return { ...chunk, score, relevance: normalized };
  });

  return scored
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

function pickSentences(text, queryTokens, max = 3) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  return sentences
    .map((s) => {
      const lower = s.toLowerCase();
      const hit = queryTokens.reduce((n, t) => (lower.includes(t) ? n + 1 : n), 0);
      return { s: s.trim(), hit };
    })
    .sort((a, b) => b.hit - a.hit)
    .slice(0, max)
    .map((x) => x.s);
}

/**
 * Grounded extractive answer from retrieved chunks (no external LLM).
 */
export function generateGroundedAnswer(query, chunks) {
  if (!chunks.length) {
    return {
      answer:
        'No sufficiently relevant passages were retrieved. In production, this triggers query expansion or fallback to dense-only retrieval.',
      grounded: false,
    };
  }

  const queryTokens = tokenize(query);
  const q = query.toLowerCase();

  if (/revenue|sales/i.test(q)) {
    const hit = chunks.find((c) => /revenue.*\$|million.*revenue/i.test(c.text));
    if (hit) {
      return {
        answer: `According to the retrieved 10-K excerpt (${hit.source}): ${pickSentences(hit.text, queryTokens, 2).join(' ')}`,
        grounded: true,
      };
    }
  }

  if (/ceo|chief executive/i.test(q)) {
    const hit = chunks.find((c) => /Chief Executive Officer|CEO/i.test(c.text));
    if (hit) {
      return {
        answer: `Based on ${hit.section}: ${pickSentences(hit.text, queryTokens, 2).join(' ')}`,
        grounded: true,
      };
    }
  }

  if (/risk/i.test(q)) {
    const riskChunks = chunks.filter((c) => c.section.includes('Risk'));
    const combined = riskChunks.length ? riskChunks : chunks;
    const bullets = combined.flatMap((c) => pickSentences(c.text, queryTokens, 2));
    return {
      answer: `Key risk factors from retrieved filings:\n\n• ${bullets.slice(0, 4).join('\n\n• ')}`,
      grounded: true,
    };
  }

  if (/make money|business model|how.*money/i.test(q)) {
    const hit = chunks.find((c) => /SaaS|revenue primarily/i.test(c.text));
    if (hit) {
      return {
        answer: `Business model (retrieved from ${hit.source}): ${pickSentences(hit.text, queryTokens, 3).join(' ')}`,
        grounded: true,
      };
    }
  }

  if (/hybrid|retriev|rag|bm25|faiss/i.test(q)) {
    const hit = chunks.find((c) => /BM25|hybrid|FAISS|retrieval/i.test(c.text));
    if (hit) {
      return {
        answer: `Retrieval architecture from filing: ${pickSentences(hit.text, queryTokens, 2).join(' ')}`,
        grounded: true,
      };
    }
  }

  if (/net income|cash flow|profit/i.test(q)) {
    const hit = chunks.find((c) => /Net income|Free cash flow/i.test(c.text));
    if (hit) {
      return {
        answer: `Financial performance (${hit.source}): ${pickSentences(hit.text, queryTokens, 2).join(' ')}`,
        grounded: true,
      };
    }
  }

  const top = chunks[0];
  const sentences = chunks.flatMap((c) => pickSentences(c.text, queryTokens, 2));
  return {
    answer: `Synthesized from top-${chunks.length} retrieved chunks (highest: ${top.relevance}% match, ${top.source}):\n\n${sentences.slice(0, 3).join(' ')}`,
    grounded: true,
  };
}

export async function runRAGPipeline(query, onStep) {
  onStep?.('embed');
  await delay(400);
  onStep?.('retrieve');
  await delay(500);
  const chunks = retrieveChunks(query, 4);
  onStep?.('generate');
  await delay(600);
  const { answer, grounded } = generateGroundedAnswer(query, chunks);
  onStep?.('done');
  return { chunks, answer, grounded };
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
