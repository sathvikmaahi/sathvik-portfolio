/**
 * Sample 10-K-style excerpts for portfolio RAG demo (synthetic / educational).
 * Represents the type of content ingested in the real Financial Q&A project.
 */
export const RAG_CORPUS_META = {
  company: "NexaFlow Technologies, Inc.",
  filing: "Form 10-K — Fiscal Year 2024",
  chunksIndexed: 24,
  note: "Browser demo uses keyword + semantic-style scoring over embedded excerpts.",
};

export const RAG_CHUNKS = [
  {
    id: "c1",
    section: "Item 1 — Business",
    source: "10-K p.4",
    text: "NexaFlow Technologies, Inc. is a cloud-native AI platform company. We generate revenue primarily from enterprise SaaS subscriptions (72% of FY2024 revenue), professional services (18%), and usage-based inference API fees (10%). Total revenue for fiscal year 2024 was $842.6 million, an increase of 34% year-over-year.",
  },
  {
    id: "c2",
    section: "Item 1 — Business",
    source: "10-K p.5",
    text: "Our platform enables customers to deploy retrieval-augmented generation (RAG) pipelines, fine-tune domain-specific language models, and orchestrate multi-agent workflows. As of December 31, 2024, we served 1,240 enterprise customers across financial services, insurance, healthcare, and technology verticals.",
  },
  {
    id: "c3",
    section: "Item 1 — Business",
    source: "10-K p.6",
    text: "Jane Morrison has served as our Chief Executive Officer and member of the board of directors since March 2021. Prior to NexaFlow, Ms. Morrison was SVP of Cloud AI at a Fortune 100 technology company. David Chen serves as Chief Financial Officer; Dr. Priya Nair serves as Chief Technology Officer leading our ML platform division.",
  },
  {
    id: "c4",
    section: "Item 1A — Risk Factors",
    source: "10-K p.12",
    text: "Risk factors include: rapid evolution of generative AI regulation; dependency on third-party cloud providers (AWS and GCP); cybersecurity incidents involving customer data; talent retention in a competitive AI labor market; and potential intellectual property disputes related to model training data.",
  },
  {
    id: "c5",
    section: "Item 1A — Risk Factors",
    source: "10-K p.13",
    text: "We may face increased compliance costs under emerging AI transparency laws in the EU and United States. A material breach of our SOC 2 Type II controls could harm customer trust and result in contract terminations. Approximately 41% of revenue is concentrated in our top ten customers.",
  },
  {
    id: "c6",
    section: "Item 7 — MD&A",
    source: "10-K p.28",
    text: "Gross margin improved to 78.2% in FY2024 from 74.9% in FY2023, driven by infrastructure optimization and automated model-serving autoscaling. Research and development expense was $198.4 million (24% of revenue), reflecting investments in vector search, evaluation tooling, and safety guardrails.",
  },
  {
    id: "c7",
    section: "Item 7 — MD&A",
    source: "10-K p.29",
    text: "Net income was $94.1 million compared to $52.3 million in the prior year. Free cash flow was $121.7 million. We ended the year with $412 million in cash and marketable securities and no long-term debt.",
  },
  {
    id: "c8",
    section: "Item 7 — MD&A",
    source: "10-K p.30",
    text: "International revenue grew 48% and represented 29% of total revenue. APAC expansion included new data residency options in Singapore and Tokyo to support regulated financial services clients implementing on-premise vector indexes with hybrid retrieval.",
  },
  {
    id: "c9",
    section: "Item 1 — Business",
    source: "10-K p.7",
    text: "Our competitive strengths include proprietary hybrid retrieval (combining BM25 sparse search with dense embeddings), sub-200ms p95 query latency at scale, and integrated LLM evaluation dashboards measuring precision@k, recall@k, and groundedness scores for RAG applications.",
  },
  {
    id: "c10",
    section: "Item 1A — Risk Factors",
    source: "10-K p.14",
    text: "If we fail to maintain retrieval accuracy above customer SLAs, churn may increase. Model hallucination in regulated industries poses reputational and legal risk. We mitigate this via citation-required generation and chunk-level confidence thresholds.",
  },
  {
    id: "c11",
    section: "Item 7 — MD&A",
    source: "10-K p.31",
    text: "Sales and marketing expense increased to $156.2 million as we expanded enterprise field teams focused on insurance and banking RAG use cases. Customer acquisition cost payback period improved from 18 months to 14 months.",
  },
  {
    id: "c12",
    section: "Item 8 — Financial Statements",
    source: "10-K p.45",
    text: "Deferred revenue was $187.3 million at year end, up 29% from prior year, indicating strong contracted backlog. Annual recurring revenue (ARR) reached $712 million with a net revenue retention rate of 128%.",
  },
  {
    id: "c13",
    section: "Item 1 — Business",
    source: "10-K p.8",
    text: "We process over 2.1 billion embedding API calls monthly. Documents ingested through our pipeline undergo semantic chunking with overlap, metadata tagging by filing section, and dual indexing in FAISS (dense) and Elasticsearch (sparse) for hybrid retrieval.",
  },
  {
    id: "c14",
    section: "Item 7 — MD&A",
    source: "10-K p.32",
    text: "Capital expenditures were $38.6 million, primarily GPU clusters for fine-tuning customer domain adapters (LoRA/QLoRA). We expect R&D intensity to remain above 20% of revenue through 2026.",
  },
  {
    id: "c15",
    section: "Item 1A — Risk Factors",
    source: "10-K p.15",
    text: "Supply constraints on high-memory GPUs could delay customer proof-of-concepts. We maintain multi-region inference failover. Foreign exchange fluctuations affected reported revenue by approximately 1.2% in FY2024.",
  },
];

export const SUGGESTED_QUESTIONS = [
  "What was total revenue in fiscal year 2024?",
  "Who is the CEO of NexaFlow?",
  "What are the main risk factors?",
  "How does the company make money?",
  "What is the hybrid retrieval approach?",
  "What was net income and free cash flow?",
];
