import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaArrowUp, FaExternalLinkAlt, FaDatabase, FaCloud, FaChartLine, FaBars, FaTimes, FaBook, FaBrain } from "react-icons/fa";
import ContactForm from "./components/ContactForm";
import AIPortfolioAssistant from "./components/AIPortfolioAssistant";
import NeuralBackground from "./components/NeuralBackground";
import TypewriterText from "./components/TypewriterText";
import ExperienceTimeline from "./components/ExperienceTimeline";

const TYPEWRITER_PHRASES = [
  "Agentic AI Engineer",
  "MLOps Specialist",
  "RAG Architect",
  "Multi-Agent Systems Builder",
];

const RESUME_URL = "/SankaSathvik-Resume.docx";

const experiences = [
  {
    role: "ML Engineer",
    company: "Miracle Software Systems",
    period: "May 2026 – Present",
    location: "Novi, Michigan",
    initials: "MS",
    logo: "/logos/miracle.svg",
    icon: "🤖",
    gradient: "from-cyan-500 to-indigo-600",
    tags: ["Google ADK", "RAG", "pgvector", "Terraform", "AWS ECS"],
    metric: { value: "97%", label: "RAG context reduction" },
    bullets: [
      "Engineered MITRA AI, an agentic MuleSoft integration analysis platform that reduced manual discovery effort from weeks to under 48 hours using deterministic XML/DWL parsing combined with agentic reasoning.",
      "Designed and deployed a production-grade RAG pipeline combining BM25 lexical search, Azure OpenAI embeddings, and pgvector, reducing prompt context by 97% from up to 500K characters per query.",
      "Engineered a multi-agent architecture using Google ADK orchestrating specialized agents for inventory extraction, complexity scoring, IRD generation, and diagram creation across hundreds of integrations.",
      "Built an end-to-end data lakehouse pipeline using 3-tier Medallion Architecture (Bronze/Silver/Gold) to process MuleSoft ZIPs into LLM-ready analytics and vector DB formats.",
      "Generated IRD-style documentation automatically using AI agents, replacing 100% of manual IRD drafting for POC customers.",
      "Developed AWS-ready deployment architecture using ECS Fargate, Lambda, S3 + CloudFront, RDS PostgreSQL with pgvector, and Terraform for IaC."
    ]
  },
  {
    role: "MLOps Engineer",
    company: " The Hartford Insurance",
    period: "June 2025 – April 2026",
    location: "Cincinnati, OH",
    initials: "TH",
    logo: "/logos/hartford.png",
    icon: "☁️",
    gradient: "from-blue-500 to-violet-600",
    tags: ["AWS SageMaker", "Airflow", "MLflow", "GCP Vertex AI"],
    metric: { value: "11M+", label: "Records per ML run" },
    bullets: [
      "Deployed a claims analytics ML model processing 11M+ records per run using AWS SageMaker, orchestrated via Airflow and Docker, promoting from Discovery to Production through CI/CD with automated DQM validation.",
      "Engineered end-to-end ML pipelines for auto insurance pricing models, reducing batch inference time by 35% and improving SLA compliance from 87% to 98%.",
      "Built Infrastructure-as-Code using AWS CloudFormation for reproducible ECS cluster deployments with champion-challenger strategy, reducing provisioning time from 4 hours to 20 minutes.",
      "Monitored and supported 6+ production ML pipelines daily using Airflow (Astronomer), ensuring 99.5% uptime and rapid resolution of job failures.",
      "Designed an AI-powered document understanding pipeline for insurance filings on GCP (Vertex AI, Document AI), achieving 95%+ extraction accuracy and reducing analyst review time by 60%.",
      "Implemented DQM and MQM jobs in AWS SageMaker and leveraged MLflow for model artifacts, experiment metadata, and production approval workflows."
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "Procter & Gamble",
    period: "August 2024 – May 2025",
    location: "Cincinnati, Ohio",
    initials: "PG",
    logo: "/logos/pg.png",
    icon: "🔬",
    gradient: "from-emerald-500 to-teal-600",
    tags: ["YOLOv11", "LangGraph", "Azure OpenAI", "Kafka"],
    metric: { value: "+45%", label: "CV accuracy improvement" },
    bullets: [
      "Built a YOLOv11-based image classification model for fiber type categorization, improving material analysis accuracy by 45% and supporting optimized product development strategies.",
      "Architected and deployed StatVisor, a production-grade multi-agent AI system using LangGraph, LangChain, and Azure OpenAI GPT with FAISS-backed hybrid RAG retrieval.",
      "Developed predictive maintenance models using TensorFlow and LSTM networks on time-series sensor data, with real-time ingestion via Apache Kafka and CI/CD via GitHub Actions.",
      "Engineered a Medallion-structured ML preprocessing pipeline using OpenCV with edge detection and contour-based segmentation, improving texture analysis precision by 30%.",
      "Extended the multi-agent platform with Microsoft Copilot Studio, orchestrating topics and actions for a low-code business-user entry point.",
      "Packaged ML models into portable Docker containers and built Streamlit visualization interfaces for real-time R&D decision-making."
    ]
  },
  {
    role: "ML Engineer",
    company: "United Bank of Switzerland",
    period: "May 2022 – December 2023",
    location: "Hyderabad, India",
    initials: "UBS",
    logo: "/logos/ubs.png",
    icon: "🏦",
    gradient: "from-amber-500 to-orange-600",
    tags: ["PyTorch", "GNN", "Spark MLlib", "Tableau"],
    metric: { value: "GNN", label: "Fraud ring detection" },
    bullets: [
      "Developed ML models for fraud detection and transaction anomaly detection using Python, PyTorch, and Scikit-learn across large-scale banking transaction datasets.",
      "Implemented Graph Neural Network (GNN)-based prototypes to analyze relationships between accounts, merchants, and transactions, improving identification of organized fraud rings.",
      "Built and evaluated supervised and unsupervised models using Spark MLlib, optimizing fraud detection on high-volume distributed datasets.",
      "Engineered end-to-end feature engineering pipelines for customer behavior and transaction data, enabling scalable model training for financial risk use cases.",
      "Evaluated model performance using Precision, Recall, F1-Score, ROC-AUC, and cross-validation to optimize fraud detection thresholds while minimizing false positives.",
      "Created interactive Tableau dashboards to monitor fraud trends, model performance, and transaction risk metrics for business stakeholders and compliance teams."
    ]
  },
  {
    role: "Applied ML Engineer",
    company: "The Smart Bridge",
    period: "January 2021 – May 2022",
    location: "Hyderabad, India",
    initials: "TSB",
    logo: "/logos/smartbridge.png",
    icon: "📊",
    gradient: "from-pink-500 to-rose-600",
    tags: ["XGBoost", "SHAP", "Snowflake", "AWS Bedrock"],
    metric: { value: "Real-time", label: "Anomaly detection" },
    bullets: [
      "Engineered a churn prediction system using XGBoost with SHAP-based interpretability and customer segmentation models for targeted retention strategies.",
      "Built and deployed anomaly detection models using Isolation Forests and One-Class SVMs to identify unusual transaction patterns in real time.",
      "Developed ensemble models combining XGBoost, LightGBM, and neural networks to capture linear and non-linear risk patterns in financial transactions.",
      "Built explainable AI dashboards using SHAP and Plotly Dash, enabling risk officers to interpret credit and fraud outputs for compliance and audits.",
      "Built scalable data pipelines using Snowflake and Airflow for near-real-time ML workflows, including integration with AWS Bedrock for downstream AI applications.",
      "Designed and executed A/B testing frameworks with statistical significance tests to validate performance improvements in financial risk and customer behavior models."
    ]
  }
];

const projects = [
  {
    name: "MITRA AI — Agentic MuleSoft Integration Accelerator",
    desc: "Agentic MuleSoft integration analysis platform that reduced manual discovery from weeks to under 48 hours, with multi-agent Google ADK orchestration and production-grade RAG using BM25, Azure OpenAI, and pgvector.",
    tech: ["Google ADK", "RAG", "pgvector", "LiteLLM", "Terraform", "AWS ECS", "FastAPI"],
    link: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  },
  {
    name: "Personal Lines Analytics ML Platform",
    desc: "Production MLOps platform for The Hartford insurance underwriting and risk models, processing 11M+ records per run with SageMaker, Airflow, Docker, and automated DQM/MQM monitoring.",
    tech: ["AWS SageMaker", "Airflow", "MLflow", "Docker", "CloudFormation", "DQM/MQM"],
    link: "",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
  },
  {
    name: "Rate Stream — AI Document Intelligence (GCP)",
    desc: "AI-powered document understanding pipeline for insurance filings on GCP Vertex AI and Document AI, achieving 95%+ extraction accuracy and reducing analyst review time by 60%.",
    tech: ["GCP Vertex AI", "Document AI", "LangChain", "FAISS", "ChromaDB", "Gemini"],
    link: "",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
  },
  {
    name: "StatVisor — Multi-Agent AI Analytics Platform",
    desc: "Production-grade multi-agent system using LangGraph, LangChain, and Azure OpenAI with FAISS-backed hybrid RAG, extended with Microsoft Copilot Studio for low-code business access.",
    tech: ["LangGraph", "LangChain", "Azure OpenAI", "FAISS", "Copilot Studio", "Streamlit"],
    link: "",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop"
  },
  {
    name: "Fiber Classification & Material Analysis",
    desc: "YOLOv11-based computer vision pipeline with Medallion-structured preprocessing using OpenCV, improving material analysis accuracy by 45% for P&G FemCare R&D.",
    tech: ["YOLOv11", "OpenCV", "PyTorch", "Docker", "Medallion Architecture"],
    link: "",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop"
  },
  {
    name: "UBS Credit Risk & Fraud Detection Platform",
    desc: "ML platform for fraud detection and transaction anomaly analysis using PyTorch, Spark MLlib, and Graph Neural Network prototypes to identify organized fraud rings.",
    tech: ["PyTorch", "GNN", "Spark MLlib", "SHAP", "Tableau", "Snowflake"],
    link: "",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400&h=250&fit=crop"
  },
  {
    name: "Smart Bridge Credit Risk & Churn Prediction",
    desc: "XGBoost churn prediction with SHAP interpretability, anomaly detection via Isolation Forests, and Snowflake/Airflow pipelines integrated with AWS Bedrock.",
    tech: ["XGBoost", "LightGBM", "SHAP", "Plotly Dash", "Snowflake", "Airflow"],
    link: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  },
  {
    name: "Multi-Agent Healthcare Chatbot",
    desc: "Multi-agent AI system using Microsoft AutoGen simulating medical team consultations with 4 specialized agents collaborating in real time.",
    tech: ["AutoGen", "GPT-4o", "Multi-Agent Systems", "Python", "Streamlit"],
    link: "https://github.com/sathvikmaahi/multi-agent-healthcare-chatbot",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
  }
];

const skills = {
  "Languages & Databases": [
    "Python (Pandas, NumPy, Scikit-Learn, TensorFlow, PyTorch)", "SQL", "PostgreSQL",
    "Vector DB (Pinecone, FAISS, pgvector)", "Snowflake"
  ],
  "Machine Learning": [
    "Supervised & Unsupervised Learning", "Predictive Modeling", "XGBoost & LightGBM",
    "Time-Series Forecasting", "Feature Engineering", "Model Explainability (SHAP, LIME)",
    "Statistical Analysis (ANOVA, Hypothesis Testing)"
  ],
  "MLOps & Deployment": [
    "MLflow", "Docker", "Kubernetes", "CI/CD (GitHub Actions, AWS CodePipeline)",
    "DQM & MQM Monitoring", "Champion-Challenger Workflows", "A/B Testing"
  ],
  "Cloud Platforms": [
    "AWS (SageMaker, Bedrock, ECS, Lambda, CloudFormation, CodePipeline)",
    "GCP (Vertex AI, BigQuery, Document AI, Pub/Sub, Cloud Run)",
    "Azure (AI Foundry, Machine Learning, Copilot Studio, AI Search)"
  ],
  "Generative AI & LLMs": [
    "Retrieval-Augmented Generation (RAG)", "Fine-tuning (LoRA, QLoRA, PEFT)",
    "Transformers (BERT, GPT, Gemini)", "LangChain", "LangGraph", "HuggingFace", "OpenAI API"
  ],
  "Agentic AI & Orchestration": [
    "Google Agent Development Kit (ADK)", "Multi-Agent Systems", "Model Context Protocol (MCP)",
    "Agent Orchestration", "Dynamic Skill Loading", "Human-in-the-Loop", "LLM Guardrails"
  ],
  "Big Data & Engineering": [
    "Medallion Architecture (Bronze/Silver/Gold)", "Apache Spark (PySpark)", "Apache Airflow",
    "ETL/ELT Pipelines", "Data Modeling", "Terraform"
  ],
  "Tools & Evaluation": [
    "RAGAS", "Deep Eval", "Tableau", "Astronomer", "Rally", "Git/GitHub", "Google Colab"
  ]
};

const certifications = [
  { name: "Oracle Generative AI – Professional", issuer: "Oracle Cloud Infrastructure", year: "2025" },
  { name: "Oracle AI Vector Search – Professional", issuer: "Oracle", year: "2025" },
  { name: "Oracle Agentic AI – Associate", issuer: "Oracle", year: "2025" },
  { name: "Generative AI Fundamentals", issuer: "Databricks", year: "2025" },
  { name: "AWS Certified Data Engineer – Associate", issuer: "Amazon Web Services", year: "2024" },
  { name: "IBM Machine Learning Specialist – Associate", issuer: "IBM", year: "2023" },
  { name: "Prompt Engineering", issuer: "DeepLearning.AI", year: "2024" },
  { name: "Microsoft MLOps Engineer – Generative AI", issuer: "Microsoft", year: "In Progress" }
];

const education = [
  {
    degree: "Master of Science in Information Technology",
    school: "University of Cincinnati",
    gpa: "4.0/4.0",
    highlights: ["Artificial Intelligence & Machine Learning", "Machine Learning & Data Mining", "Microsoft Azure Services", "Google Cloud Platform", "Data Driven Cybersecurity"]
  },
  {
    degree: "Bachelor of Technology in Electronics & Communication Engineering",
    school: "JB Institute of Engineering and Technology",
    gpa: "3.7/4.0",
    highlights: ["Digital Signal Processing", "VLSI Design", "Computer Networks", "Microprocessors", "Statistics & Linear Algebra"]
  }
];

const contactLinks = [
  { icon: <FaEnvelope size={20} />, url: "mailto:veerabadhrasathvik@gmail.com", label: "Email" },
  { icon: <FaLinkedin size={20} />, url: "https://linkedin.com/in/sathviksanka", label: "LinkedIn" },
  { icon: <FaGithub size={20} />, url: "https://github.com/sathvikmaahi", label: "GitHub" }
];

const publications = [
  {
    title: "Lung Disease and COVID Detection Using Chest X-Ray Images by Deep Learning",
    authors: "Sanka, S., Reddy, N. B., Shankar, S. U., Shekar, S. C., & Kumar, B. S.",
    journal: "Excel International Journal of Technology, Engineering and Management (EIJTEM)",
    details: "5(3), 17–27",
    link: "https://github.com/sathvikmaahi/LUNG-DISEASE-AND-COVID-DETECTION-USING-CHESTX-RAY-IMAGES-BY-DEEP-LEARNING"
  },
  {
    title: "Pest Detection Using Deep Learning",
    authors: "Sanka, S., Reddy, N. B., & Kumar, B. S.",
    journal: "International Journal of System Design and Information Processing (IJSDIP)",
    details: "11(2), 57–64",
    link: ""
  }
];

const researchInterests = [
  {
    title: "Agentic AI & Multi-Agent Systems",
    description: "Designing hierarchical multi-agent architectures with scoped tool access, enterprise orchestrators, and specialized sub-agents to reduce LLM decision complexity and enable production-grade autonomous workflows.",
    keyAreas: [
      "Google ADK & LangGraph Orchestration",
      "Hierarchical Agent Delegation",
      "Dynamic Skill Loading",
      "Human-in-the-Loop Workflows",
      "Secure Enterprise Integrations",
      "Agent Cost & Latency Optimization"
    ],
    icon: "🤖",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "RAG & Medallion Data Architectures",
    description: "Engineering production-grade RAG frameworks powered by 3-tier Medallion architectures (Bronze/Silver/Gold) to ensure clean, structured context injection and high-performance vector search at scale.",
    keyAreas: [
      "Hybrid Retrieval (BM25 + Dense)",
      "Vector Database Engineering",
      "Medallion Lakehouse Pipelines",
      "Hallucination-Resistant Q&A",
      "Semantic Chunking Strategies",
      "LLM Evaluation (RAGAS, Deep Eval)"
    ],
    icon: "🔍",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Production MLOps & Model Lifecycle",
    description: "Building end-to-end MLOps infrastructure managing the complete model lifecycle from experimentation to deployment, monitoring, and champion-challenger evaluation in cloud-native environments.",
    keyAreas: [
      "CI/CD for ML (GitHub Actions, CodePipeline)",
      "DQM & MQM Frameworks",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Container Orchestration (Docker, Kubernetes)",
      "Model Explainability & Governance",
      "Cloud-Native ML on AWS, GCP, Azure"
    ],
    icon: "⚙️",
    color: "from-green-500 to-emerald-500"
  }
];

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "8+", label: "Production Projects" },
  { number: "8", label: "Certifications" },
  { number: "99.5%", label: "Pipeline Uptime" }
];

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const researchRef = useRef(null);
  const publicationsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    about: aboutRef,
    experience: experienceRef,
    projects: projectsRef,
    skills: skillsRef,
    research: researchRef,
    publications: publicationsRef,
    contact: contactRef,
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      const sections = [
        { id: 'about', ref: aboutRef },
        { id: 'experience', ref: experienceRef },
        { id: 'projects', ref: projectsRef },
        { id: 'skills', ref: skillsRef },
        { id: 'research', ref: researchRef },
        { id: 'publications', ref: publicationsRef },
        { id: 'contact', ref: contactRef },
      ];
      const scrollPos = window.scrollY + 120;
      let current = 'about';
      for (const section of sections) {
        if (section.ref.current) {
          const top = section.ref.current.offsetTop;
          if (scrollPos >= top) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans min-h-screen bg-ai-dark text-slate-200 relative overflow-x-hidden">
      <NeuralBackground />
      <div className="fixed inset-0 ai-grid-overlay pointer-events-none z-0" aria-hidden="true" />
      <div className="fixed inset-0 bg-ai-radial pointer-events-none z-0" aria-hidden="true" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-ai-dark/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src="/ss-logo.svg" alt="SS Logo" className="w-10 h-10 rounded-lg shadow-glow-cyan" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-ai-cyan rounded-full animate-pulse-glow" />
              </div>
              <span className="text-xl font-bold ai-gradient-text">Sathvik Sanka</span>
            </div>
            <div className="hidden lg:flex space-x-6">
              {NAV_ITEMS.map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => handleNavClick(nav.id)}
                  className={`relative px-2 py-1 font-medium transition text-sm focus:outline-none
                    ${activeSection === nav.id ? 'text-ai-cyan' : 'text-slate-300 hover:text-white'}
                    group
                  `}
                  style={{ background: 'none', border: 'none' }}
                >
                  {nav.label}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-ai-cyan to-ai-purple transition-all duration-300
                      ${activeSection === nav.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
                      group-hover:opacity-100 group-hover:scale-x-100
                    `}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#e3e6ed] p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-white/10 mt-2 pt-4">
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((nav) => (
                  <button
                    key={nav.id}
                    onClick={() => handleNavClick(nav.id)}
                    className={`text-left px-4 py-3 rounded-xl font-medium transition-colors
                      ${activeSection === nav.id ? 'bg-primary/20 text-primary' : 'text-[#e3e6ed] hover:bg-white/10'}
                    `}
                    style={{ background: activeSection === nav.id ? undefined : 'none', border: 'none' }}
                  >
                    {nav.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" ref={aboutRef} className="relative z-10 pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 ai-gradient-text animate-fade-in-up tracking-tight">
              Sathvik Sanka
            </h1>

            <div className="text-xl md:text-2xl mb-6 min-h-[2.5rem] animate-fade-in-up font-mono" style={{ animationDelay: '0.2s' }}>
              <TypewriterText phrases={TYPEWRITER_PHRASES} />
            </div>

            <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-400 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Building production-grade agentic AI, RAG pipelines, and MLOps platforms across insurance, banking, and financial services on AWS, GCP, and Azure.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              {['Agentic AI', 'RAG', 'MLOps', 'Multi-Agent', 'LLMs'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-mono bg-ai-indigo/10 text-ai-cyan border border-ai-indigo/30 hover:border-ai-cyan/50 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-10">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="ai-glass rounded-2xl p-5 md:p-6 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                >
                  <div className="text-3xl font-bold ai-gradient-text mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-400 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <a
                href={RESUME_URL}
                className="ai-btn-primary flex items-center gap-2 relative z-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload /> Download Resume
              </a>
              <div className="flex space-x-3">
                {contactLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ai-glass p-3 rounded-full hover:text-ai-cyan transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-cyan"
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section as Timeline */}
      <section id="experience" ref={experienceRef} className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="ai-chip mb-4">Experience</span>
            <h3 className="ai-section-title mb-4">Professional Experience</h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Production AI systems across enterprise environments</p>
          </div>
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="ai-chip mb-4">Projects</span>
            <h3 className="ai-section-title mb-4">Featured AI Projects</h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Agentic systems, RAG pipelines, and production ML at scale</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, idx) => (
              <div key={idx} className="ai-glass rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-ai-indigo to-ai-purple relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-ai-indigo/80 to-ai-purple/80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaBrain className="text-ai-cyan opacity-80" size={48} />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-ai-cyan transition-colors">{project.name}</h4>
                  <p className="text-slate-400 mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-ai-indigo/15 text-ai-cyan px-3 py-1 rounded-full text-xs font-mono border border-ai-indigo/25">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ai-cyan hover:text-white font-medium transition-colors"
                    >
                      View Project <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="ai-chip mb-4">Skills</span>
            <h3 className="ai-section-title mb-4">Technical Arsenal</h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Full-stack AI engineering across the data and ML ecosystem</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="ai-glass p-6 rounded-3xl">
                <div className="flex items-center gap-3 mb-4">
                  {(category.includes("ML") || category.includes("Machine") || category.includes("Agentic") || category.includes("Generative")) && <FaBrain className="text-ai-cyan" size={24} />}
                  {(category.includes("Data") || category.includes("Big")) && <FaDatabase className="text-ai-cyan" size={24} />}
                  {(category.includes("Cloud") || category.includes("MLOps")) && <FaCloud className="text-ai-cyan" size={24} />}
                  {(category.includes("Tools") || category.includes("Languages")) && <FaChartLine className="text-ai-cyan" size={24} />}
                  <h4 className="text-xl font-bold text-white">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span key={i} className="bg-ai-indigo/10 text-slate-300 px-3 py-2 rounded-full text-sm font-mono border border-ai-indigo/20 hover:border-ai-cyan/40 hover:text-ai-cyan transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="research" ref={researchRef} className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="ai-chip mb-4">Research</span>
            <h3 className="ai-section-title mb-4">Research & Focus Areas</h3>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Advancing production-grade AI through agentic systems, RAG, and cloud-native MLOps
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-1">
            {researchInterests.map((research, idx) => (
              <div key={idx} className="ai-glass rounded-3xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${research.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                        {research.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-4">{research.title}</h4>
                      <p className="text-slate-400 mb-6 leading-relaxed text-lg">{research.description}</p>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {research.keyAreas.map((area, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${research.color} rounded-full`}></div>
                            <span className="text-slate-400 text-sm font-mono">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Research Impact Statement */}
          <div className="mt-12 text-center">
            <div className="ai-glass rounded-3xl p-8 border-ai-cyan/20">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                <FaBrain className="text-ai-cyan" /> Research Vision
              </h4>
              <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
                My focus is on building intelligent systems that are not just accurate, but production-ready — 
                combining agentic AI orchestration, structured RAG pipelines, and rigorous MLOps practices to 
                deliver interpretable, scalable, and enterprise-grade AI solutions across high-stakes industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" ref={publicationsRef} className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="ai-chip mb-4">Publications</span>
            <h3 className="ai-section-title mb-4">Publications</h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Peer-reviewed research in deep learning and computer vision</p>
          </div>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {publications.map((pub, idx) => (
              <div key={idx} className="ai-glass p-6 rounded-2xl transition-all duration-300 hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <FaBook className="text-ai-cyan mt-1 flex-shrink-0" size={20} />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{pub.title}</h4>
                    <p className="text-slate-400 text-sm mb-1">{pub.authors}</p>
                    <p className="text-ai-cyan text-sm mb-1 italic">{pub.journal}</p>
                    <p className="text-slate-500 text-sm">{pub.details}</p>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mt-3 text-sm"
                      >
                        View on GitHub <FaExternalLinkAlt size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-ai-cyan to-ai-purple rounded-full" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="ai-glass p-6 rounded-2xl">
                    <h4 className="font-semibold text-white mb-2">{cert.name}</h4>
                    <p className="text-ai-cyan mb-1 font-mono text-sm">{cert.issuer}</p>
                    <p className="text-sm text-slate-500">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-ai-cyan to-ai-purple rounded-full" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="ai-glass p-6 rounded-2xl">
                    <h4 className="font-semibold text-white mb-2">{edu.degree}</h4>
                    <p className="text-ai-cyan mb-1">{edu.school}</p>
                    <p className="text-sm text-slate-500 mb-2">GPA: {edu.gpa}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span key={i} className="bg-ai-indigo/10 text-ai-cyan px-2 py-1 rounded-full text-xs font-mono border border-ai-indigo/20">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="ai-glass rounded-3xl p-8 md:p-12 border-ai-cyan/20 shadow-glow">
            <div className="text-center mb-8">
              <span className="ai-chip mb-4">Contact</span>
              <h3 className="ai-section-title mb-4">Let's Connect</h3>
              <p className="text-lg text-slate-400">
                Interested in AI engineering, MLOps, or agentic systems? Reach out — or ask my AI assistant anything about my work.
              </p>
            </div>
            <ContactForm />

            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="text-xl font-semibold text-white mb-6">Connect on social</h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {contactLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ai-glass px-6 py-3 rounded-full hover:text-ai-cyan hover:shadow-glow-cyan transition-all duration-300 flex items-center gap-2"
                    title={link.label}
                  >
                    {link.icon}
                    <span className="text-sm font-mono">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 font-mono text-sm">
            © {new Date().getFullYear()} Sathvik Sanka · Built with Passion & Latte ·. <span className="text-ai-cyan">Neural networks included</span>
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-ai-indigo to-ai-purple text-white p-3 rounded-full shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1 transition-all duration-300 z-50"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      {/* AI Portfolio Assistant */}
      <AIPortfolioAssistant />
    </div>
  );
}
