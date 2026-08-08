import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';

const METRICS = [
  { value: '100+', label: 'SEC 10-K filings ingested' },
  { value: '25K+', label: 'Embedded chunks' },
  { value: '87%', label: 'Retrieval accuracy' },
  { value: '<2s', label: 'End-to-end latency' },
];

const ARCHITECTURE_STEPS = [
  { step: '01', title: 'Ingest & chunk', desc: 'PDF/HTML 10-K filings → semantic chunking with overlap via LangChain', tech: 'LangChain · PyPDF' },
  { step: '02', title: 'Embed & index', desc: 'Hugging Face sentence-transformers → FAISS dense index + BM25 sparse index', tech: 'HF · FAISS · BM25' },
  { step: '03', title: 'Hybrid retrieve', desc: 'Reciprocal rank fusion of sparse + dense hits; top-k chunks with scores', tech: 'Hybrid RAG' },
  { step: '04', title: 'Generate', desc: 'LLM prompt with grounded context, citations, and refusal on low retrieval score', tech: 'Streamlit · AWS' },
];

const CaseStudyRAG = ({ onTryDemo }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <article className="glass-card overflow-hidden border-violet-500/20">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div>
          <span className="section-badge mb-3">case study</span>
          <h3 className="text-2xl md:text-3xl font-bold gradient-text">
            Financial Q&A Chatbot — RAG Architecture
          </h3>
          <p className="text-slate-400 mt-2 text-sm md:text-base">
            Personal project · Production-style pipeline over SEC filings
          </p>
        </div>
        {expanded ? <FaChevronUp className="text-cyan-400 shrink-0" /> : <FaChevronDown className="text-cyan-400 shrink-0" />}
      </button>

      {expanded && (
        <div className="px-6 md:px-8 pb-8 border-t border-white/10">
          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {METRICS.map((m) => (
              <div key={m.label} className="stat-card !p-4">
                <div className="text-2xl font-bold gradient-text">{m.value}</div>
                <div className="text-xs text-slate-500 mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-100 mb-3">Problem</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Financial analysts spend hours searching lengthy SEC 10-K filings for revenue figures, risk disclosures,
                and leadership details. Keyword search misses semantic intent; raw LLMs hallucinate without document grounding.
              </p>
              <h4 className="text-lg font-semibold text-slate-100 mb-3">Solution</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Built a conversational RAG assistant that ingests 100+ filings, embeds 25K+ chunks with Hugging Face
                transformers, stores vectors in FAISS, and combines BM25 sparse retrieval with dense search for 87% retrieval
                accuracy. Streamlit UI on AWS exposes natural-language Q&A with visible citations.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-100 mb-3">Tech stack</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'LangChain', 'PyTorch', 'Hugging Face', 'FAISS', 'BM25', 'Streamlit', 'AWS'].map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
              <h4 className="text-lg font-semibold text-slate-100 mb-3">Outcomes</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex gap-2"><span className="text-cyan-500">→</span> Hybrid retrieval improved Precision@5 vs. dense-only baseline</li>
                <li className="flex gap-2"><span className="text-cyan-500">→</span> Semantic chunking with overlap reduced context fragmentation</li>
                <li className="flex gap-2"><span className="text-cyan-500">→</span> Citation-backed answers for audit-friendly financial Q&A</li>
              </ul>
            </div>
          </div>

          {/* Architecture flow */}
          <h4 className="text-lg font-semibold text-slate-100 mb-4 font-mono"><span className="text-cyan-500/80">{'// '}</span>pipeline.architecture</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {ARCHITECTURE_STEPS.map((s, i) => (
              <div key={s.step} className="relative glass-card p-4 group">
                {i < ARCHITECTURE_STEPS.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-cyan-500/50 to-transparent z-10" />
                )}
                <span className="text-xs font-mono text-violet-400">{s.step}</span>
                <h5 className="font-semibold text-slate-200 mt-1 mb-2">{s.title}</h5>
                <p className="text-xs text-slate-500 leading-relaxed mb-2">{s.desc}</p>
                <span className="text-[10px] font-mono text-cyan-500/80">{s.tech}</span>
              </div>
            ))}
          </div>

          {/* ASCII-style diagram for accessibility */}
          <div className="rounded-xl bg-[#030712]/80 border border-white/10 p-4 md:p-6 mb-6 font-mono text-xs text-slate-500 overflow-x-auto">
            <pre className="text-cyan-400/90 leading-relaxed">{`
  [10-K Filings] ──► [Chunk + Embed] ──► [FAISS + BM25 Indexes]
                                              │
  [User Query] ──► [Query Embed] ────────────┼──► [Hybrid Top-K]
                                              │
                                              ▼
                                    [LLM + Citations] ──► [Streamlit UI]
            `}</pre>
          </div>

          <div className="flex flex-wrap gap-4">
            <button type="button" onClick={onTryDemo} className="btn-primary text-sm">
              Try live demo below
            </button>
            <a
              href="#rag-demo"
              className="btn-ghost text-sm inline-flex items-center gap-2"
            >
              Jump to demo <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      )}
    </article>
  );
};

export default CaseStudyRAG;
