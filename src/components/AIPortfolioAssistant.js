import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane, FaTimes, FaBolt } from 'react-icons/fa';

const AIPortfolioAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const portfolioKnowledge = {
    personal: {
      name: "Sathvik Sanka",
      title: "AI/ML Engineer & MLOps Specialist",
      experience: "5+ years",
      location: "Novi, Michigan",
      email: "veerabadhrasathvik@gmail.com",
      education: "Master of Science in Information Technology from University of Cincinnati (4.0 GPA, May 2025)",
      background: "AI/ML Engineer building production-grade agentic AI, RAG systems, and MLOps platforms across insurance, banking, and financial services on AWS, GCP, and Azure."
    },
    projects: {
      "MITRA AI": {
        description: "Agentic MuleSoft integration analysis platform using Google ADK multi-agent architecture and production RAG with BM25, Azure OpenAI, and pgvector — reduced discovery from weeks to under 48 hours.",
        technologies: ["Google ADK", "RAG", "pgvector", "LiteLLM", "Terraform", "AWS ECS"],
        impact: "Automated IRD generation and complexity scoring across hundreds of integrations"
      },
      "StatVisor": {
        description: "Production multi-agent AI analytics platform using LangGraph, LangChain, and Azure OpenAI with FAISS hybrid RAG and Microsoft Copilot Studio integration.",
        technologies: ["LangGraph", "LangChain", "Azure OpenAI", "FAISS", "Copilot Studio"],
        impact: "Real-time data interpretation and low-code business-user access for R&D teams"
      },
      "Hartford ML Platform": {
        description: "Personal Lines Analytics ML platform processing 11M+ records per run with SageMaker, Airflow, Docker, DQM/MQM, and GCP Document AI for insurance filings.",
        technologies: ["AWS SageMaker", "Airflow", "MLflow", "GCP Vertex AI", "CloudFormation"],
        impact: "99.5% pipeline uptime with 35% batch inference improvement"
      },
      "Fiber Classification": {
        description: "YOLOv11 computer vision pipeline with Medallion-structured OpenCV preprocessing, improving material analysis accuracy by 45%.",
        technologies: ["YOLOv11", "OpenCV", "PyTorch", "Docker"],
        impact: "Optimized P&G FemCare product development strategies"
      },
      "UBS Fraud Detection": {
        description: "Credit risk and fraud detection platform using PyTorch, Spark MLlib, and GNN prototypes for organized fraud ring identification.",
        technologies: ["PyTorch", "GNN", "Spark MLlib", "SHAP", "Tableau"],
        impact: "Scalable fraud detection across large-scale banking transaction datasets"
      }
    },
    skills: {
      "Agentic AI": "Expert in Google ADK, LangGraph, multi-agent orchestration, MCP, dynamic skill loading, and human-in-the-loop workflows.",
      "MLOps": "MLflow, Docker, Kubernetes, CI/CD (GitHub Actions, CodePipeline), DQM/MQM monitoring, champion-challenger workflows, Terraform, CloudFormation.",
      "Generative AI": "RAG, Medallion architectures, fine-tuning (LoRA, QLoRA), LangChain, HuggingFace, vector search (Pinecone, FAISS, pgvector), RAGAS evaluation.",
      "Machine Learning": "Supervised/unsupervised learning, XGBoost, deep learning, time-series (LSTM), computer vision (YOLOv11), GNN, SHAP explainability.",
      "Cloud Services": "AWS (SageMaker, Bedrock, ECS, Lambda), GCP (Vertex AI, Document AI, BigQuery), Azure (AI Foundry, Copilot Studio, AI Search)."
    },
    experience: {
      "Miracle Software Systems": {
        role: "ML Engineer",
        period: "May 2026 – Present",
        location: "Novi, Michigan",
        focus: "Building MITRA AI — agentic MuleSoft integration accelerator with Google ADK, production RAG, and Medallion data lakehouse pipelines."
      },
      "Innovcentric / Hartford": {
        role: "MLOps Engineer",
        period: "June 2025 – April 2026",
        location: "Cincinnati, OH",
        focus: "Production ML pipelines for insurance underwriting processing 11M+ records, DQM/MQM monitoring, and GCP Document AI for filings."
      },
      "Innovcentric / P&G": {
        role: "Machine Learning Engineer",
        period: "August 2024 – May 2025",
        location: "Cincinnati, Ohio",
        achievements: ["YOLOv11 fiber classification (+45% accuracy)", "StatVisor multi-agent platform", "LSTM predictive maintenance with Kafka"]
      },
      "Symise / UBS": {
        role: "ML Engineer",
        period: "May 2022 – December 2023",
        location: "Hyderabad, India",
        achievements: ["Fraud detection with GNN prototypes", "Spark MLlib on distributed datasets", "Tableau fraud monitoring dashboards"]
      },
      "Symise / Smart Bridge": {
        role: "Applied ML Engineer",
        period: "January 2021 – May 2022",
        location: "Hyderabad, India",
        achievements: ["XGBoost churn prediction with SHAP", "Anomaly detection with Isolation Forests", "Snowflake/Airflow ML pipelines"]
      }
    },
    publications: {
      "Lung Disease COVID Detection": "Published in EIJTEM — deep learning for chest X-ray disease detection.",
      "Pest Detection": "Published in IJSDIP — deep learning for agricultural pest detection."
    },
    research: {
      "Agentic AI": "Hierarchical multi-agent systems with Google ADK, scoped tool access, and enterprise orchestration.",
      "RAG & Medallion": "Production RAG with 3-tier Medallion architectures and hybrid BM25 + dense retrieval.",
      "Production MLOps": "End-to-end model lifecycle management with CI/CD, DQM/MQM, and cloud-native deployment."
    }
  };

  const SUGGESTED_PROMPTS = [
    'Tell me about MITRA AI',
    'What is your MLOps experience?',
    'Agentic AI projects',
    'Skills & certifications',
  ];

  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();
    const words = message.split(' ').filter(word => word.length > 0);

    if (words.length === 1) {
      const singleWord = words[0];

      switch (singleWord) {
        case 'python':
          return `Python is one of Sathvik's core languages. He uses it for MLOps pipelines, deep learning, data engineering, and GenAI applications across insurance, research, and analytics projects.`;
        case 'ml':
        case 'machine':
        case 'learning':
          return `Machine Learning is a core strength! Sathvik builds production ML systems including computer vision (YOLOv11), NLP (BERT sentiment analysis), recommendation engines, and insurance pricing models with PyTorch, TensorFlow, and scikit-learn.`;
        case 'mlops':
          return `MLOps is a core specialty! Sathvik maintains 6+ production ML pipelines with 99.5% uptime, implements DQM/MQM monitoring, CI/CD with AWS CodePipeline and MLflow, and Infrastructure-as-Code with Terraform and CloudFormation.`;
        case 'agentic':
        case 'agents':
          return `Sathvik builds production agentic AI systems including MITRA AI (Google ADK multi-agent MuleSoft analyzer) and StatVisor (LangGraph + Azure OpenAI with Copilot Studio integration).`;
        case 'rag':
          return `Sathvik engineers production RAG pipelines with hybrid BM25 + dense retrieval, Medallion architectures (Bronze/Silver/Gold), and vector databases (pgvector, FAISS, Pinecone).`;
        case 'ai':
        case 'artificial':
        case 'intelligence':
          return `Sathvik is an AI/ML Engineer with 5+ years building agentic AI, RAG systems, computer vision (YOLOv11), fraud detection (GNN), and production MLOps across AWS, GCP, and Azure.`;
        case 'cloud':
          return `Cloud expertise spans AWS (SageMaker, Bedrock, ECS, Lambda), GCP (Vertex AI, Document AI, BigQuery), and Azure (AI Foundry, Copilot Studio, AI Search).`;
        case 'projects':
        case 'work':
          return `Key projects: MITRA AI (agentic MuleSoft), Hartford ML Platform (11M+ records), StatVisor (multi-agent analytics), Fiber Classification (YOLOv11), UBS Fraud Detection (GNN). Which interests you?`;
        case 'experience':
          return `Currently ML Engineer at Miracle Software Systems (May 2026–Present). Previously MLOps Engineer at Innovcentric/Hartford (2025–2026), ML Engineer at Innovcentric/P&G (2024–2025), and ML Engineer at Symise/UBS (2022–2023).`;
        case 'education':
          return `MS in Information Technology from University of Cincinnati with a 4.0 GPA (May 2025) and BTech in Electronics & Communication Engineering from JB Institute (2023).`;
        case 'contact':
          return `Reach Sathvik at veerabadhrasathvik@gmail.com, LinkedIn (linkedin.com/in/sathviksanka), or GitHub (github.com/sathvikmaahi). Based in Novi, Michigan.`;
        case 'github':
          return `GitHub: github.com/sathvikmaahi — includes healthcare chatbot, lung disease detection, and other ML projects.`;
        case 'linkedin':
          return `LinkedIn: linkedin.com/in/sathviksanka — connect for AI/ML engineering and MLOps opportunities.`;
        case 'publications':
        case 'papers':
          return `Published: Lung Disease/COVID Detection (EIJTEM) and Pest Detection Using Deep Learning (IJSDIP).`;
        case 'certifications':
        case 'certs':
          return `Certifications: Oracle Generative AI Professional, Oracle Vector Search Professional, AWS Data Engineer, IBM ML Specialist, Databricks GenAI Fundamentals, and more.`;
        case 'resume':
          return `Sathvik's resume is available for download on his portfolio — covering 5+ years of AI/ML engineering, agentic systems, and MLOps.`;
        case 'skills':
        case 'skill':
          return `Key skills: Agentic AI (Google ADK, LangGraph), MLOps, Generative AI/RAG, Machine Learning, and Cloud (AWS/GCP/Azure). Which area interests you?`;
        case 'who':
          return `I'm an AI assistant for Sathvik Sanka, an AI/ML Engineer & MLOps Specialist with 5+ years of experience. Ask about projects, agentic AI, experience, or publications!`;
        case 'hey':
        case 'hello':
        case 'hi':
        case 'hellooo':
        case 'hiee':
        case 'heyy':
        case 'yo':
        case 'sup':
        case 'greetings':
          return `Hey there! 👋 I'm Sathvik's AI Portfolio Assistant. Ask about agentic AI, MLOps, projects, or experience!`;
        case 'thanks':
        case 'thank':
        case 'thx':
        case 'ty':
          return `You're welcome! 😊 Feel free to ask anything else about Sathvik's portfolio.`;
        case 'bye':
        case 'goodbye':
        case 'see':
        case 'later':
          return `Goodbye! 👋 Come back anytime to learn more about Sathvik's work.`;
        case 'help':
        case 'what':
        case 'how':
          return `Ask about agentic AI, MLOps, projects, experience, publications, or certifications. Try "mitra", "mlops", "projects", or "skills".`;
        case 'research':
        case 'interests':
          return `Focus areas: Agentic AI & Multi-Agent Systems, RAG & Medallion Architectures, and Production MLOps & Model Lifecycle.`;
        case 'miracle':
        case 'mitra':
          return `At Miracle Software Systems, Sathvik builds MITRA AI — an agentic MuleSoft integration accelerator using Google ADK, production RAG with pgvector, and Medallion lakehouse pipelines.`;
        case 'hartford':
        case 'insurance':
          return `At Innovcentric/The Hartford, Sathvik was MLOps Engineer building production ML pipelines processing 11M+ records with DQM/MQM monitoring and GCP Document AI.`;
        case 'pg':
        case 'procter':
          return `At Innovcentric/P&G, Sathvik built YOLOv11 fiber classification (+45% accuracy), StatVisor multi-agent platform, and LSTM predictive maintenance with Kafka.`;
        case 'ubs':
        case 'fraud':
          return `At Symise/UBS, Sathvik developed fraud detection models with PyTorch, GNN prototypes for fraud rings, and Spark MLlib on distributed banking datasets.`;
        default: {
          const projectMatch = Object.keys(portfolioKnowledge.projects).find(project =>
            project.toLowerCase().includes(singleWord) || singleWord.includes(project.toLowerCase().split(' ')[0])
          );
          if (projectMatch) {
            const project = portfolioKnowledge.projects[projectMatch];
            return `${projectMatch}: ${project.description} Technologies: ${project.technologies.join(', ')}.`;
          }
          const skillMatch = Object.keys(portfolioKnowledge.skills).find(skill =>
            skill.toLowerCase().includes(singleWord)
          );
          if (skillMatch) {
            return portfolioKnowledge.skills[skillMatch];
          }
          const companyMatch = Object.keys(portfolioKnowledge.experience).find(company =>
            company.toLowerCase().includes(singleWord)
          );
          if (companyMatch) {
            const exp = portfolioKnowledge.experience[companyMatch];
            return `At ${companyMatch}, Sathvik worked as ${exp.role} (${exp.period}) in ${exp.location}. ${exp.focus || exp.achievements?.join('. ')}`;
          }
          return `Try asking about "mlops", "projects", "experience", "skills", or "contact".`;
        }
      }
    }

    if (message.includes('who are you') || message.includes('tell me about yourself')) {
      return `I'm an AI assistant for ${portfolioKnowledge.personal.name}, a ${portfolioKnowledge.personal.title} with ${portfolioKnowledge.personal.experience} of experience based in ${portfolioKnowledge.personal.location}. What would you like to know?`;
    }

    if (message.includes('experience') || message.includes('work history')) {
      return `Sathvik is currently an ML Engineer at Miracle Software Systems (May 2026–Present). Previously MLOps Engineer at Innovcentric/Hartford (June 2025–April 2026), ML Engineer at Innovcentric/P&G (Aug 2024–May 2025), ML Engineer at Symise/UBS (May 2022–Dec 2023), and Applied ML Engineer at Symise/Smart Bridge (Jan 2021–May 2022).`;
    }

    if (message.includes('project') || message.includes('work')) {
      return `Key projects: MITRA AI (agentic MuleSoft), Hartford ML Platform (11M+ records), Rate Stream Document AI (GCP), StatVisor (multi-agent), Fiber Classification (YOLOv11), UBS Fraud Detection (GNN). Which would you like details on?`;
    }

    if (message.includes('skill') || message.includes('technology') || message.includes('expertise')) {
      if (message.includes('agentic') || message.includes('agent')) return portfolioKnowledge.skills["Agentic AI"];
      if (message.includes('mlops')) return portfolioKnowledge.skills["MLOps"];
      if (message.includes('generative') || message.includes('llm') || message.includes('rag')) return portfolioKnowledge.skills["Generative AI"];
      if (message.includes('cloud') || message.includes('aws') || message.includes('azure') || message.includes('gcp')) return portfolioKnowledge.skills["Cloud Services"];
      if (message.includes('machine learning') || message.includes('ml')) return portfolioKnowledge.skills["Machine Learning"];
      return `Sathvik's expertise spans Agentic AI, MLOps, Generative AI/RAG, Machine Learning, and Cloud Platforms. Which area should I elaborate on?`;
    }

    if (message.includes('publication') || message.includes('paper') || message.includes('published')) {
      return `Sathvik has published: (1) Lung Disease and COVID Detection Using Chest X-Ray Images (EIJTEM), and (2) Pest Detection Using Deep Learning (IJSDIP).`;
    }

    if (message.includes('certification') || message.includes('cert')) {
      return `Certifications: Oracle Generative AI Professional, Oracle Vector Search Professional, Oracle Agentic AI Associate, AWS Data Engineer, IBM ML Specialist, Databricks GenAI Fundamentals, Prompt Engineering (DeepLearning.AI), and Microsoft MLOps Engineer (In Progress).`;
    }

    if (message.includes('education') || message.includes('degree')) {
      return portfolioKnowledge.personal.education;
    }

    if (message.includes('contact') || message.includes('email')) {
      return portfolioKnowledge.personal.name + " can be reached at veerabadhrasathvik@gmail.com, LinkedIn (linkedin.com/in/sathviksanka), or GitHub (github.com/sathvikmaahi).";
    }

    return `Ask me about Sathvik's agentic AI work, MLOps experience, projects, publications, certifications, or contact information!`;
  };

  const handleSendMessage = async (prompt) => {
    const userMessage = (prompt || inputMessage).trim();
    if (!userMessage) return;

    setInputMessage('');

    const newUserMessage = { type: 'user', content: userMessage, timestamp: new Date() };
    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = generateAIResponse(userMessage);
      const newAIMessage = { type: 'ai', content: aiResponse, timestamp: new Date() };
      setMessages(prev => [...prev, newAIMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start gap-2">
          <div className="ai-glass px-4 py-2 rounded-2xl text-sm text-slate-300 font-mono hidden md:block animate-fade-in-up border-ai-cyan/20">
            <span className="text-ai-cyan">✦</span> Ask my AI about my work
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="relative group bg-gradient-to-r from-ai-indigo via-ai-purple to-ai-cyan text-white p-4 rounded-full shadow-glow hover:shadow-glow-lg transform hover:scale-110 transition-all duration-300 animate-neural-pulse"
            title="Ask me anything about Sathvik's portfolio!"
          >
            <span className="absolute inset-0 rounded-full bg-ai-cyan/20 animate-ping opacity-30" />
            <FaRobot size={26} className="relative z-10" />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center sm:justify-end p-4">
          <div className="ai-glass rounded-2xl shadow-glow-lg w-full max-w-md h-[min(600px,85vh)] flex flex-col border-ai-cyan/20 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-ai-indigo/10 to-ai-purple/10">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 bg-gradient-to-r from-ai-indigo to-ai-cyan rounded-xl flex items-center justify-center shadow-glow-cyan">
                  <FaRobot className="text-white" size={22} />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-ai-dark animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-white flex items-center gap-2">
                    AI Assistant
                    <FaBolt className="text-ai-cyan" size={12} />
                  </h3>
                  <p className="text-xs text-ai-cyan font-mono">● Online · Neural knowledge base</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Close assistant"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-ai-indigo/20 to-ai-cyan/20 flex items-center justify-center border border-ai-cyan/20">
                    <FaRobot className="text-ai-cyan text-3xl" />
                  </div>
                  <p className="text-white font-medium mb-1">Hi, I'm Sathvik's AI assistant</p>
                  <p className="text-sm text-slate-400 mb-6">Powered by portfolio knowledge — ask about agentic AI, MLOps, or projects</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => handleSendMessage(prompt)}
                        className="text-xs font-mono px-3 py-1.5 rounded-full bg-ai-indigo/15 text-ai-cyan border border-ai-indigo/30 hover:border-ai-cyan/50 hover:bg-ai-indigo/25 transition-colors"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-ai-indigo to-ai-purple text-white'
                      : 'ai-glass text-slate-200 border-ai-cyan/10'
                  }`}>
                    {message.type === 'ai' && (
                      <div className="flex items-center gap-1.5 mb-1.5 text-ai-cyan text-xs font-mono">
                        <FaRobot size={10} /> AI
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className="text-xs opacity-50 mt-2 font-mono">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="ai-glass rounded-2xl px-4 py-3 border-ai-cyan/10">
                    <div className="flex items-center gap-2">
                      <FaRobot className="text-ai-cyan" size={12} />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-ai-cyan rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-ai-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-ai-indigo rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-white/10 bg-ai-dark/50">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about agentic AI, MLOps, projects..."
                  className="flex-1 bg-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 border border-white/10 focus:border-ai-cyan/50 focus:outline-none focus:ring-1 focus:ring-ai-cyan/30 transition-all font-mono text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim()}
                  className="bg-gradient-to-r from-ai-indigo to-ai-cyan text-white p-3 rounded-xl hover:shadow-glow-cyan disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Send message"
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIPortfolioAssistant;
