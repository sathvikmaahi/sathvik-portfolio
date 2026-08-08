import React, { useState } from 'react';
import { FaSearch, FaDatabase, FaBrain, FaFileAlt, FaPlay, FaSpinner } from 'react-icons/fa';
import { RAG_CORPUS_META, SUGGESTED_QUESTIONS } from '../../data/ragCorpus';
import { runRAGPipeline } from '../../utils/ragRetrieval';

const STEPS = [
  { id: 'embed', label: 'Embed query', icon: FaBrain },
  { id: 'retrieve', label: 'Hybrid retrieve', icon: FaDatabase },
  { id: 'generate', label: 'Grounded answer', icon: FaFileAlt },
];

const RAGDemo = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const [result, setResult] = useState(null);

  const handleAsk = async (q) => {
    const question = (q || query).trim();
    if (!question || loading) return;
    setQuery(question);
    setLoading(true);
    setResult(null);
    setActiveStep('embed');

    try {
      const pipelineResult = await runRAGPipeline(question, setActiveStep);
      setResult(pipelineResult);
    } finally {
      setLoading(false);
      setActiveStep('done');
    }
  };

  return (
    <div className="glass-card p-6 md:p-8 border-cyan-500/20">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <p className="font-mono text-xs text-cyan-400 mb-1">live_pipeline.demo</p>
          <h3 className="text-xl font-bold text-slate-100">Try the RAG pipeline</h3>
          <p className="text-sm text-slate-500 mt-1">
            {RAG_CORPUS_META.company} — {RAG_CORPUS_META.chunksIndexed} sample chunks indexed
          </p>
        </div>
        <p className="text-xs text-slate-600 max-w-sm font-mono">{RAG_CORPUS_META.note}</p>
      </div>

      {/* Pipeline steps indicator */}
      <div className="flex flex-wrap gap-2 mb-6">
        {STEPS.map(({ id, label, icon: Icon }) => {
          const idx = STEPS.findIndex((s) => s.id === id);
          const currentIdx = STEPS.findIndex((s) => s.id === activeStep);
          const done = activeStep === 'done' || (currentIdx > idx && currentIdx !== -1);
          const active = activeStep === id;
          return (
            <div
              key={id}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono border transition-all ${
                active
                  ? 'border-cyan-500/50 bg-cyan-500/15 text-cyan-300 shadow-glow animate-pulse-ring'
                  : done
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                  : 'border-white/10 text-slate-500'
              }`}
            >
              {loading && active ? <FaSpinner className="animate-spin" /> : <Icon />}
              {label}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            placeholder="Ask about revenue, risks, leadership, RAG architecture..."
            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#030712]/80 border border-cyan-500/20 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 text-sm"
          />
        </div>
        <button
          type="button"
          onClick={() => handleAsk()}
          disabled={loading || !query.trim()}
          className="btn-primary shrink-0 disabled:opacity-50"
        >
          {loading ? <FaSpinner className="animate-spin" /> : <FaPlay />}
          Run RAG
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {SUGGESTED_QUESTIONS.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => handleAsk(q)}
            disabled={loading}
            className="tag-pill text-left hover:border-violet-500/40 disabled:opacity-50"
          >
            {q}
          </button>
        ))}
      </div>

      {result && (
        <div className="grid gap-6 lg:grid-cols-2 animate-fade-in-up">
          <div>
            <h4 className="text-sm font-mono text-violet-400 mb-3 flex items-center gap-2">
              <FaDatabase /> Retrieved chunks ({result.chunks.length})
            </h4>
            <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
              {result.chunks.map((chunk) => (
                <div
                  key={chunk.id}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400">{chunk.section}</span>
                    <span className="text-xs font-mono text-emerald-400 shrink-0">{chunk.relevance}%</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">{chunk.source}</p>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-4">{chunk.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono text-cyan-400 mb-3 flex items-center gap-2">
              <FaBrain /> Grounded response
            </h4>
            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-950/40 to-violet-950/40 border border-cyan-500/20">
              <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{result.answer}</p>
              <p className="mt-4 text-xs font-mono text-slate-500">
                {result.grounded ? '✓ Answer cites retrieved passages only' : '○ Low confidence retrieval'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RAGDemo;
