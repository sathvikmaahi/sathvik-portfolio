export const RESUME_URL = " ";

export const experiences = [
  {
    role: "MLOps Engineer – Generative AI",
    company: "Innovcentric LLC",
    client: "The Hartford Insurance",
    domain: "Personal Insurance – Product",
    period: "June 2025 – Present",
    location: "Cincinnati, OH",
    projects: [
      {
        name: "Personal Lines Analytics ML Platform (Underwriting & Risk Models – MLOps)",
        bullets: [
          "Deployed a claims analytics ML model processing 11M+ records per run using AWS SageMaker, orchestrated via Airflow and Docker, promoting from Discovery to Production through CI/CD with automated DQM validation.",
          "Engineered end-to-end ML pipelines for auto insurance pricing on AWS and Airflow, reducing batch inference time by 35% and improving SLA compliance from 87% to 98%.",
          "Developed AWS Lambda functions for automated Airflow DAG generation and S3 event-driven workflows, reducing manual configuration effort by 70%.",
          "Monitored and supported 6 production ML pipelines daily in Personal Lines using Airflow (Astronomer), ensuring timely execution and rapid failure resolution.",
          "Built scalable ML pipelines with AWS Step Functions, Lambda, Glue, Athena, and S3; provisioned ECS clusters via CloudFormation (4 hours → 20 minutes).",
          "Optimized champion-challenger architecture by consolidating branch-specific scoremart tables, reducing data redundancy by 75%.",
          "Implemented DQM and MQM jobs in SageMaker; containerized workflows with Docker; tracked experiments and approvals with MLflow.",
          "Performed root cause analysis across Airflow DAGs, CloudWatch logs, and Snowflake to maintain SLA adherence."
        ]
      },
      {
        name: "Rate Stream (Filing Factory) – AI Document Intelligence Platform on GCP",
        bullets: [
          "Designed an AI-powered document understanding pipeline for insurance filings with layout-aware parsing, achieving 95%+ extraction accuracy and reducing analyst manual review time by 60%.",
          "Deployed scalable ML pipelines on GCP using Vertex AI, Document AI, and Cloud Storage for end-to-end document ingestion and retrieval.",
          "Improved semantic retrieval relevance by 22% through optimized chunking and embedding strategies; processed 500+ complex PDF/DOCX/HTML filings weekly.",
          "Built semantic retrieval with FAISS and Chroma DB; leveraged LangChain, Hugging Face Transformers, and Google Gemini on Vertex AI."
        ]
      }
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "Innovcentric LLC",
    client: "Procter & Gamble",
    domain: "R&D Femcare (AI Team)",
    period: "August 2024 – May 2025",
    location: "Cincinnati, Ohio",
    projects: [
      {
        name: "Predictive Maintenance & Medical Device Health Monitoring",
        bullets: [
          "Developed predictive models for device health monitoring using TensorFlow and LSTM networks on time-series sensor data.",
          "Built real-time data ingestion with Apache Kafka; operationalized models from R&D to production with Docker and GitHub Actions CI/CD.",
          "Delivered Streamlit dashboards for real-time interpretation; optimized feature selection and multi-source data integration."
        ]
      },
      {
        name: "Fiber Classification & Material Analysis System",
        bullets: [
          "Built YOLOv11-based fiber classification, improving material analysis accuracy by 45%.",
          "Engineered reproducible OpenCV preprocessing pipelines for edge detection and contour-based segmentation, improving texture analysis precision by 30%+.",
          "Curated labeled datasets with Any Labeling and mask/XML annotation workflows."
        ]
      },
      {
        name: "StatVisor – Multi-Agent AI Analytics Platform",
        bullets: [
          "Architected production-grade multi-agent system with LangGraph, LangChain, LlamaIndex, and Azure OpenAI GPT.",
          "Implemented FAISS-backed RAG with hybrid retrieval (BM25 + dense vectors), tool calling, and context grounding.",
          "Built Streamlit visualizations and LLM-powered research summarization; APIs with Django and Flask."
        ]
      }
    ]
  },
  {
    role: "ML Engineer",
    company: "Symrise Solutions Pvt Ltd",
    client: "United Bank of Switzerland (UBS)",
    domain: "Banking & Finance – AI Credit Risk",
    period: "May 2022 – December 2023",
    location: "Hyderabad, India (Remote)",
    projects: [
      {
        name: "Advanced Credit Risk Fraud Detection & ML Platform",
        bullets: [
          "Applied Graph Neural Networks to model relational financial data, enhancing detection of coordinated fraud.",
          "Developed transactional anomaly detection with PyTorch; deployed containerized inference on Kubernetes with GitLab CI/CD.",
          "Led evaluation of Labelbox and Scale AI for enterprise annotation; built models with Spark MLlib on large-scale data.",
          "Created Tableau dashboards and standardized Python libraries for preprocessing; optimized with Precision, Recall, ROC, AUC, and cross-validation."
        ]
      }
    ]
  },
  {
    role: "Applied ML Engineer",
    company: "Symrise Solutions Pvt Ltd",
    client: "The Smart Bridge",
    domain: "AI/ML SaaS",
    period: "December 2020 – May 2022",
    location: "Hyderabad, India",
    projects: [
      {
        name: "Credit Risk & Churn Analytics Platform",
        bullets: [
          "Engineered churn prediction with XGBoost and SHAP interpretability; deployed ensemble models (XGBoost, LightGBM, neural nets) for fraud and credit risk.",
          "Built anomaly detection with Isolation Forest and One-Class SVM; explainable dashboards with SHAP and Plotly Dash.",
          "Designed pipelines with Snowflake, Airflow, and AWS Bedrock integration; applied PCA, A/B testing, and regulatory-aligned risk metrics."
        ]
      }
    ]
  }
];

export const projects = [
  {
    name: "Financial Q&A Chatbot with RAG Architecture",
    desc: "Conversational AI assistant for financial document Q&A using a production RAG pipeline over SEC 10-K filings with hybrid retrieval and semantic chunking.",
    tech: ["PyTorch", "LangChain", "FAISS", "Hugging Face", "Streamlit", "AWS", "RAG", "BM25"],
    link: "#rag",
    caseStudy: true,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
    bullets: [
      "Ingested 100+ SEC 10-K filings with semantic chunking via LangChain, embedding 25K+ document chunks with Hugging Face sentence-transformers.",
      "Stored vectors in FAISS with hybrid retrieval (BM25 + dense embeddings), achieving 87% retrieval accuracy for financial Q&A."
    ]
  },
  {
    name: "Lung Disease Detection Using Chest X-Ray Images",
    desc: "Deep learning system for chest X-ray analysis to detect lung disease and COVID-19, with published research and 95% diagnostic accuracy.",
    tech: ["Python", "TensorFlow", "Deep Learning", "CNN", "Hugging Face", "Medical Imaging"],
    link: "https://github.com/sathvikmaahi/LUNG-DISEASE-AND-COVID-DETECTION-USING-CHESTX-RAY-IMAGES-BY-DEEP-LEARNING",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    bullets: [
      "Built and trained DCNNs with TensorFlow, applying data augmentation and optimization techniques.",
      "Integrated Hugging Face NLP methods for model interpretability; achieved 95% diagnostic accuracy (published work)."
    ]
  },
  {
    name: "StatVisor – Multi-Agent AI Analytics Platform",
    desc: "Production multi-agent analytics platform with LangGraph orchestration, Azure OpenAI, and FAISS-backed RAG for R&D insights (also delivered at Procter & Gamble).",
    tech: ["LangGraph", "LangChain", "LlamaIndex", "Azure OpenAI", "FAISS", "Streamlit", "Django", "Flask"],
    link: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    bullets: [
      "Hybrid retrieval (BM25 + dense vectors) with tool calling and LLM-powered research summarization.",
      "Streamlit dashboards and Django/Flask APIs for real-time analytics and reporting."
    ]
  },
  {
    name: "Multi-Agent Healthcare Chatbot with AutoGen",
    desc: "Multi-agent healthcare consultation system with specialized agents collaborating via Microsoft AutoGen.",
    tech: ["AutoGen", "GPT-4o", "Multi-Agent Systems", "Python", "Streamlit", "Healthcare AI"],
    link: "https://github.com/sathvikmaahi/multi-agent-healthcare-chatbot",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop"
  }
];

export const publications = [
  {
    title: "Pest Detection Using Deep Learning",
    authors: "Sanka, S., Reddy, N. B., & Kumar, B. S.",
    venue: "International Journal of System Design and Information Processing (IJSDIP)",
    detail: "11(2), 57–64"
  },
  {
    title: "Lung Disease and COVID Detection Using Chest X-Ray Images by Deep Learning",
    authors: "Sanka, S., Reddy, N. B., Shankar, S. U., Shekar, S. C., & Kumar, B. S.",
    venue: "Excel International Journal of Technology, Engineering and Management",
    detail: "5(3), 17–27"
  }
];

export const skills = {
  "AI/ML Specializations": [
    "Deep Learning", "Computer Vision", "Graph Neural Networks (GNNs)", "Recommender Systems (Collaborative Filtering)",
    "Reinforcement Learning", "NLP (LLM Fine-tuning, NER, Transformers)", "Time Series Analysis",
    "Predictive Maintenance", "Fraud Detection", "Statistical Modeling", "Explainable AI (XAI/SHAP)"
  ],
  "Generative AI & LLMs": [
    "Retrieval-Augmented Generation (RAG)", "Fine-tuning (LoRA, QLoRA, PEFT)", "Transformers (BERT, GPT)",
    "LLM Evaluation (BLEU, ROUGE, BERTScore)", "Hugging Face", "OpenAI API", "Claude", "Google Gemini"
  ],
  "Agentic AI & Orchestration": [
    "LangChain", "LangGraph", "LlamaIndex", "Model Context Protocol (MCP)", "Multi-agent Systems", "AutoGen"
  ],
  "Programming & Databases": [
    "Python", "R", "SQL", "Scala", "Java", "SAS", "PostgreSQL", "SQL Server", "Snowflake", "BigQuery", "FAISS", "Pinecone"
  ],
  "Frameworks & Libraries": [
    "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "XGBoost", "H2O.ai", "spaCy", "NLTK", "OpenCV",
    "Hugging Face Transformers", "NumPy", "Pandas", "Spark MLlib"
  ],
  "Big Data & Engineering": [
    "Apache Spark (PySpark)", "Hadoop", "Apache Kafka", "Apache Beam", "Apache Airflow", "SSIS",
    "ETL/ELT", "Data Modeling", "Data Warehousing"
  ],
  "Cloud & MLOps": [
    "AWS (SageMaker, CodePipeline, S3, Lambda)", "GCP (Vertex AI, BigQuery)", "Azure (ML, Cosmos DB, Blob Storage)",
    "MLflow", "Docker", "Kubernetes", "CI/CD (Jenkins, GitHub Actions, GitLab CI/CD)", "Terraform", "AWS CloudFormation"
  ],
  "Development & APIs": [
    "FastAPI", "Flask", "Django", "Streamlit", "RESTful APIs", "WebSocket", "React", "JavaScript"
  ],
  "Visualization & BI": [
    "Tableau", "Power BI", "Grafana", "Matplotlib", "Seaborn"
  ]
};

export const certifications = [
  { name: "Oracle Generative AI – Professional", issuer: "Oracle", year: "" },
  { name: "Vector Search – Professional", issuer: "", year: "" },
  { name: "Generative AI Fundamentals", issuer: "Databricks", year: "" },
  { name: "IBM Machine Learning Specialist – Associate", issuer: "IBM", year: "" },
  { name: "AWS Certified Data Engineer", issuer: "Amazon Web Services", year: "" },
  { name: "Prompt Engineering", issuer: "DeepLearning.AI", year: "" },
  { name: "Microsoft Certified MLOps Engineer – Generative AI", issuer: "Microsoft", year: "In progress" }
];

export const education = [
  {
    degree: "Master of Science in Information Technology",
    school: "University of Cincinnati",
    date: "Cincinnati, Ohio",
    gpa: "CGPA: 4.0",
    highlights: ["Machine Learning", "Data Mining", "Cloud Platforms", "Cybersecurity", "Information Systems"]
  }
];

export const CONTACT_LINKS_META = [
  { id: "email", url: "mailto:veerabadhrasathvik@gmail.com", label: "Email" },
  { id: "phone", url: "tel:+15139190874", label: "Phone" },
  { id: "linkedin", url: "https://www.linkedin.com/in/sathviksanka/", label: "LinkedIn" },
  { id: "github", url: "https://github.com/sathvikmaahi", label: "GitHub" },
];

export const professionalHighlights = [
  "Proficient in developing enterprise-scale AI platforms and ML systems from conceptual design to production deployment on AWS, GCP, and Azure.",
  "Hands-on expertise implementing Generative AI solutions: RAG architectures, Agentic AI workflows with LangGraph, and fine-tuning LLMs (GPT, Gemini, Llama) with Hugging Face Transformers.",
  "Applied unsupervised learning (K-means, DBSCAN, T-SNE, UMAP) for clustering and dimensionality reduction.",
  "Engineered high-performance vector search with FAISS and Pinecone for semantic retrieval in RAG applications.",
  "Full MLOps implementation managing the complete model lifecycle with MLflow—from experimentation to deployment and monitoring.",
  "Containerized applications and ML models with Docker; orchestrated at scale with Kubernetes for high availability and efficient resource utilization.",
  "Automated CI/CD pipelines for ML and data applications using GitHub Actions and GitLab CI/CD.",
  "Defined cloud infrastructure as code with AWS CloudFormation to automate provisioning across cloud platforms.",
  "Built predictive models for fraud detection, time-series forecasting, predictive maintenance, and risk scoring with Python, PyTorch, TensorFlow, and XGBoost.",
  "Applied A/B testing, time-series analysis, econometric modeling, and EDA to validate hypotheses and measure business impact."
];

export const coreExpertise = [
  {
    title: "Generative AI & LLMs",
    description: "End-to-end development of generative AI solutions including RAG pipelines, LLM fine-tuning (LoRA, QLoRA, PEFT), and evaluation with BLEU, ROUGE, and BERTScore across GPT, Gemini, Llama, Claude, and Hugging Face ecosystems.",
    keyAreas: [
      "Retrieval-Augmented Generation (RAG)",
      "LLM Fine-tuning & PEFT",
      "Hugging Face Transformers",
      "OpenAI, Claude & Gemini APIs",
      "LLM Evaluation & Benchmarking",
      "Prompt Engineering"
    ],
    icon: "🤖",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Agentic AI & Orchestration",
    description: "Design and deployment of multi-agent AI systems and orchestrated workflows using LangChain, LangGraph, LlamaIndex, and Model Context Protocol (MCP) for production-grade intelligent applications.",
    keyAreas: [
      "LangGraph Workflows",
      "Multi-agent Systems",
      "LangChain & LlamaIndex",
      "Model Context Protocol (MCP)",
      "AutoGen & Conversational AI",
      "Agent Tool Integration"
    ],
    icon: "🔗",
    color: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "MLOps, Cloud & Data Engineering",
    description: "Full MLOps implementation across AWS, GCP, and Azure with MLflow, Docker, Kubernetes, and CI/CD pipelines. Scalable data engineering with Spark, Kafka, Airflow, and modern warehousing on Snowflake and BigQuery.",
    keyAreas: [
      "MLflow & Model Lifecycle",
      "AWS / GCP / Azure MLOps",
      "Docker & Kubernetes",
      "CI/CD (GitHub Actions, GitLab)",
      "PySpark & Apache Airflow",
      "ETL/ELT & Data Warehousing"
    ],
    icon: "☁️",
    color: "from-emerald-500 to-cyan-500"
  },
  {
    title: "Predictive Analytics & ML",
    description: "Production predictive modeling for fraud detection, time-series forecasting, risk scoring, and explainable AI. Deep expertise in computer vision, NLP, recommender systems, and statistical modeling with XAI/SHAP.",
    keyAreas: [
      "Fraud Detection & Risk Scoring",
      "Time Series Forecasting",
      "Computer Vision & NLP",
      "Recommender Systems & GNNs",
      "A/B Testing & Econometrics",
      "Explainable AI (SHAP)"
    ],
    icon: "📊",
    color: "from-amber-500 to-orange-500"
  }
];

export const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "7+", label: "Certifications" },
  { number: "2", label: "Publications" },
  { number: "3", label: "Cloud Platforms" }
];

export const industries = [
  "AI/ML SaaS",
  "Technology & Cloud",
  "Insurance & Telematics",
  "E-commerce",
  "Financial Services"
];
