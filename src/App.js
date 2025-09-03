import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaArrowUp, FaExternalLinkAlt, FaStar, FaCode, FaDatabase, FaCloud, FaChartLine } from "react-icons/fa";
import ContactForm from "./components/ContactForm";
import AIPortfolioAssistant from "./components/AIPortfolioAssistant";

const RESUME_URL = "https://drive.google.com/file/d/1WLKkhI1LRaBuBioUwuZF7ojEJxJOVlbf/view?usp=sharing";

const experiences = [
  {
    role: "AIML Engineer",
    company: "Vertx AI",
    period: "June 2025 – Present",
    location: "San Francisco, California",
    website: "https://vertx.framer.ai/",
    bullets: [
      "Developing and deploying machine learning models for AI-powered applications.",
      "Collaborating with cross-functional teams to implement scalable ML solutions.",
      "Optimizing model performance and ensuring production readiness.",
      "Contributing to the advancement of AI technologies in a fast-paced startup environment."
    ]
  },
  {
    role: "Data Engineer (Data Science)",
    company: "Gear Supply",
    period: "Jan 2025 – Apr 2025",
    location: "Cincinnati, Ohio",
    bullets: [
      "Designed and implemented a personalized product recommendation system, increasing click-through rates by 12%.",
      "Developed forecasting models (Prophet, ARIMA) reducing sales forecast error by 10%.",
      "Automated & visualized marketing KPIs via BigQuery dashboards, resulting in a 7% revenue uplift.",
      "Engineered scalable data pipelines (Python, Airbyte, BigQuery), boosting throughput by 40%."
    ]
  },
  {
    role: "Deep Learning Engineer & Research Assistant",
    company: "Procter & Gamble Digital Accelerator / University of Cincinnati",
    period: "July 2024 – April 2025",
    location: "Cincinnati, Ohio",
    bullets: [
      "Deployed computer vision models (YOLOv11) for fiber classification, improving material characterization.",
      "Developed deep learning pipelines (OpenCV, edge detection) for texture analysis, boosting accuracy by 20%.",
      "Accelerated R&D via GPU-optimized training & LLM prompt engineering for automated reporting."
    ]
  },
  {
    role: "Software Developer",
    company: "Information Technology Analytics Center, University of Cincinnati",
    period: "Apr 2024 – Jun 2024",
    location: "Cincinnati, Ohio",
    bullets: [
      "Developed web-based analytics dashboards for university stakeholders using React and Python.",
      "Integrated data from multiple sources to provide actionable insights for IT operations.",
      "Collaborated with faculty and student teams to deliver high-impact software solutions."
    ]
  },
  {
    role: "Software Engineer (Ml & Data Engineering)",
    company: "Iresh Technologies",
    period: "Nov 2021 – Dec 2023",
    location: "Hyderabad, India",
    bullets: [
      "Built NLP chatbot (90%+ accuracy), Power BI dashboards, and Azure-based ETL workflows.",
      "Guided student teams across India on ML, IBM Watson, and cloud services.",
      "Developed & deployed multi-class text classifiers (TensorFlow, scikit-learn, 97% accuracy)."
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "The SmartBridge",
    period: "Mar 2022 – Nov 2022",
    location: "Hyderabad, India",
    bullets: [
      "Guided multiple colleges across different states in India like Tamil Nadu, Kerala, Andhra Pradesh, and Telangana on IBM services, including Watson Studio, Python, and cutting-edge technologies such as Machine Learning, deep learning, HTML, CSS, and Flask, enabling them to implement data-driven projects and achieve significant technological advancements.",
      "Worked with multimodal data, integrating text, image, and video data to enhance machine learning models, resulting in a 20% increase in model robustness.",
      "Led the development and testing of a machine learning model, achieved a remarkable 97% accuracy by leveraging Python, TensorFlow, and sci-kit-learn and optimized performance and resolved over 100 defects, showcasing strong programming skills.",
      "Introduced an Application Programming Interface (API) called Flask, a Python web framework, to demonstrate how to create web applications that can serve as interfaces for machine learning models, facilitating the deployment of data-driven solutions.",
      "Simultaneously, sharpened data preprocessing techniques by reducing inconsistencies by 25%, and advanced feature engineering for a 25% accuracy boost in lung disease detection models.",
      "Designed, trained, and deployed machine learning models for real-world applications.",
      "Automated model training and evaluation workflows, reducing manual effort by 30%."
      
    ]
  },
  {
    role: "Data Scientist",
    company: "The SmartBridge",
    period: "Nov 2021 – Feb 2022",
    location: "Hyderabad, India",
    bullets: [
      "Utilized Python programming language, with libraries such as NumPy for numerical computations, pandas for data manipulation, and sci-kit-learn for machine learning model implementation.",
      "Applied the Random Forest Classifier algorithm, known for its high accuracy and ability to handle large data sets with multiple variables, to develop a predictive model.",
      "Conducted comprehensive exploratory data analysis (EDA) using visualization tools like Matplotlib and Seaborn, which facilitated the identification of significant patterns and trends that informed the project's strategic direction.",
      "Developed and deployed data-driven solutions for client projects, improving business decision-making.",
      "Built and maintained data pipelines and performed data analysis for actionable insights.",
      "Collaborated with cross-functional teams to deliver end-to-end analytics solutions."
    ]
  },

];

const projects = [
  {
    name: "Ovarian cancer detection",
    desc: "A machine learning-based system for early detection and classification of ovarian cancer using medical imaging and clinical data. Implements advanced ML algorithms for improved diagnostic accuracy and patient outcomes.",
    tech: ["Python", "Machine Learning", "Medical Imaging", "scikit-learn", "Data Analysis", "Healthcare AI"],
    link: "https://github.com/sathvikmaahi/ovarian-cancer-information",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
  },
  {
    name: "AI powered universal data analyst",
    desc: "A full-stack AI-powered analytics platform that lets users upload any business data format and receive intelligent insights via natural language queries. Integrates multiple Hugging Face models (DialoGPT, RoBERTa) for automated text generation, sentiment analysis, and business intelligence recommendations.",
    tech: ["Python", "SQL", "Hugging Face Transformers", "PyTorch", "Natural Language Processing", "Sentiment Analysis"],
    link: "https://github.com/sathvikmaahi/ai-powered-universal-data-analyst",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    bullets: [
      "Developed a full-stack AI-powered business analytics platform using Python, Streamlit, and Hugging Face models, enabling users to upload any business data format and receive intelligent insights through natural language queries.",
      "Integrated multiple Hugging Face AI models (DialoGPT, RoBERTa) with PyTorch backend to provide automated text generation, sentiment analysis, and business intelligence recommendations."
    ]
  },
  {
    name: "Intelligent Crop Recommendation & Generative AI Advisor",
    desc: "A machine learning-powered system that recommends optimal crops based on soil, weather, and market data, enhanced with a generative AI assistant for personalized farming advice.",
    tech: ["Python", "scikit-learn", "Generative AI", "Streamlit", "Pandas"],
    link: "https://github.com/sathvikmaahi/Crop-recommendation-system-suing-machinelearning",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop"
  },
  {
    name: "Federated Threat Detection for Privacy-Preserving Cybersecurity",
    desc: "A distributed threat detection platform leveraging federated learning to identify cyber threats across multiple organizations while ensuring data privacy and compliance.",
    tech: ["Federated Learning", "PySyft", "PyTorch", "Cybersecurity", "Docker"],
    link: "https://github.com/sathvikmaahi/Distributed-Threat-Detection-Ensuring-Privacy-in-Cyber-Security-Using-Federated-Learning",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400&h=250&fit=crop"
  },
  {
    name: "Smart Waste Classification with Deep Learning",
    desc: "A deep learning solution for automated garbage classification, enabling efficient recycling and waste management through real-time image recognition.",
    tech: ["TensorFlow", "Keras", "OpenCV", "Python", "CNN"],
    link: "https://github.com/sathvikmaahi/GARBAGE-CLASSIFICATION-USING-DEEP-LEARNING",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=250&fit=crop"
  },
  {
    name: "Flight Fare & Delay Prediction Platform",
    desc: "A machine learning platform that predicts flight fares and delays using historical and real-time data, empowering travelers and airlines with actionable insights.",
    tech: ["scikit-learn", "Pandas", "Flask", "ML Ops", "AWS"],
    link: "https://github.com/sathvikmaahi/FLIGHT-PREDICTION-USING-ML",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=400&h=250&fit=crop"
  },
  {
    name: "Sales Data Engineering for Business Analytics",
    desc: "Robust data pipelines and analytics dashboards for sales data, enabling real-time business intelligence and data-driven decision making for enterprises.",
    tech: ["Airflow", "BigQuery", "Tableau", "Python", "ETL"],
    link: "",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
  },
  {
    name: "Product Recommendation System",
    desc: "End-to-end ML pipeline for personalized recommendations, boosting marketing ROI by 15% and improving user engagement.",
    tech: ["Python", "BigQuery", "Airbyte", "Scikit-learn", "Cutomer Segmentation"],
    link: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  },
  {
    name: "Fiber Classification CV Pipeline",
    desc: "YOLOv11-based computer vision for material innovation in FemCare products, achieving 95% classification accuracy.",
    tech: ["YOLOv11", "OpenCV", "PyTorch", "Docker"],
    link: "",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop"
  },
  {
    name: "AI-powered Chatbot",
    desc: "NLP chatbot deployed for customer support, achieving 90%+ intent classification accuracy and reducing response time by 60%.",
    tech: ["TensorFlow", "scikit-learn", "Tableau", "FastAPI"],
    link: "",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop"
  },
  {
    name: "Lung Disease/COVID Detection",
    desc: "Deep learning model for X-ray image-based disease detection with 92% accuracy (published research work).",
    tech: ["TensorFlow", "Python", "OpenCV", "CNN"],
    link: "https://github.com/sathvikmaahi/LUNG-DISEASE-AND-COVID-DETECTION-USING-CHESTX-RAY-IMAGES-BY-DEEP-LEARNING",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
  },
  {
    name: "Drug Classification Using Machine Learning",
    desc: "A machine learning solution for classifying drugs based on chemical properties and clinical data, supporting pharmaceutical research and personalized medicine initiatives.",
    tech: ["Python", "scikit-learn", "Pandas", "Data Visualization", "Jupyter"],
    link: "https://github.com/sathvikmaahi/DRUG-CLASSIFICATION-USING-MACHINE-LEARNING",
    image: "https://images.unsplash.com/photo-1588776814546-ec7e93716c6a?w=400&h=250&fit=crop"
  }
];

const skills = {
  "Languages & Databases": [
    "C", "Python", "R", "SQL", "PostgreSQL", "MongoDB"
  ],
  "Web Technologies": [
    "HTML", "CSS", "JavaScript", "Flask", "Streamlit", "REST API's", "FastAPI"
  ],
  "Cloud Services": [
    "AWS (S3, SageMaker, Glue, Redshift, Athena, ECS)", "Microsoft Azure", "GCP (BigQuery)", "IBM Cloud Services (Auto AI services, Watson Studio, Cognos Analytics)"
  ],
  "Artificial Intelligence": [
    "Unsupervised and Supervised Learning (Regression, Classification)",
    "Reinforcement Learning (DQN)",
    "Deep Learning Architectures (Neural Networks, Transfer Learning)",
    "Computer Vision",
    "Natural Language Processing (Semantic Analysis, Text Segmentation)",
    "ML Ops (ML Flow)",
    "LLMs (GPT-3,4, Time Series Analysis)",
    "Generative AI"
  ],
  "Framework & Libraries": [
    "PyTorch", "Keras", "Scikit-Learn", "Pandas", "NumPy", "Seaborn", "Matplotlib", "Hugging Face", "LangChain", "OpenAI", "NLTK", "Spacy", "FastAPI"
  ],
  "Data Engineering": [
    "PySpark", "Apache Airflow", "Databricks", "ETL/ELT Pipelines", "Data Modeling", "Snowflake"
  ],
  "Tools": [
    "Jira", "Databricks", "Tableau", "Spark", "Docker", "Google Colab", "GitHub"
  ],
  "Other Skills": [
    "Data Structures", "Algorithms", "SDLC", "Agile Development", "CI/CD Pipelines", "Exploratory Data Analysis (EDA)"
  ]
};

const certifications = [
  { name: "AWS Certified Data Engineer (Associate)", issuer: "Amazon Web Services", year: "2024" },
  { name: "IBM Machine Learning Specialist (Associate)", issuer: "IBM", year: "2023" },
  { name: "Generative AI & Prompt Engineering", issuer: "Google Cloud", year: "2024" },
  { name: "Deep Learning Specialization", issuer: "Coursera", year: "2023" },
  {name: "Software Engineer", issuer: "Hackerrank", year: "2025"},
  {name: "Generative AI", issuer: "National Association of State Boards of Accountancy (NASBA)", year: "2025"}
];

const education = [
  {
    degree: "Master's in Information Technology",
    school: "University of Cincinnati",
    date: "Jan 2024 – May 2025",
    gpa: "4.0/4.0",
    highlights: ["Information security and assurance", "Principles of Cybersecurity", "Machine learning and data mining", "Data driven cybersecurity", "Microsoft Azure Services", "Database management system",  "Google Cloud Platform", "Infrastructure Sustainability"]
  },
  {
    degree: "Bachelor's in Electronics & Communications Engineering",
    school: "JB Institute Of Engineering and Technology",
    date: "2019 - 2023",
    gpa: "3.7/4.0",
    highlights: ["Signal Processing", "Digital Communications", "VLSI Design","Computer Architecture", "Computer Networks (TCP/IP, UDP)", "Mathematics (Statistics, Linear Algebra)"]
  }
];

const contactLinks = [
  { icon: <FaEnvelope size={20} />, url: "mailto:sathviksanka1@gmail.com", label: "Email" },
  { icon: <FaLinkedin size={20} />, url: "https://linkedin.com/in/sathviksanka", label: "LinkedIn" },
  { icon: <FaGithub size={20} />, url: "https://github.com/sathvikmaahi", label: "GitHub" }
];

const researchInterests = [
  {
    title: "Embedded Machine Learning",
    description: "Exploring the intersection of machine learning and embedded systems to create intelligent, low-power devices that can perform complex AI tasks at the edge. Focus areas include model optimization for resource-constrained environments, real-time inference, and edge computing architectures.",
    keyAreas: [
      "Edge AI and IoT Integration",
      "Model Compression & Quantization", 
      "Real-time Inference Optimization",
      "Hardware-Accelerated ML",
      "Embedded Neural Networks",
      "Low-Power AI Systems"
    ],
    icon: "🔬",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Machine Learning in Electronics & Communication",
    description: "Investigating how machine learning can revolutionize electronic systems and communication networks. This includes signal processing, wireless communication optimization, and intelligent electronic device design using AI-driven approaches.",
    keyAreas: [
      "AI-Enhanced Signal Processing",
      "Wireless Communication Optimization",
      "Smart Antenna Systems",
      "ML-based Circuit Design",
      "Intelligent Network Management",
      "Cognitive Radio Systems"
    ],
    icon: "📡",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI Applications in Legal Systems",
    description: "Researching how artificial intelligence can transform legal processes, from document analysis and case prediction to automated legal research and compliance monitoring. Exploring the ethical implications and practical applications of AI in the legal domain.",
    keyAreas: [
      "Legal Document Analysis",
      "Case Outcome Prediction",
      "Automated Legal Research",
      "Contract Analysis & Review",
      "Compliance Monitoring",
      "Legal AI Ethics & Bias"
    ],
    icon: "⚖️",
    color: "from-green-500 to-emerald-500"
  }
];

const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "15+", label: "Projects Completed" },
  { number: "6", label: "Certifications" },
  { number: "1000+", label: "Hours of Learning" }
];

// Custom hook to detect if an element is in view
function useInView(options) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

// TimelineItem component for experience timeline
function TimelineItem({ exp, idx }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`relative md:flex md:items-center md:justify-between md:space-x-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      {/* Timeline dot */}
      <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
        <span className={`block w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-white dark:border-gray-900 shadow-lg transition-transform duration-700 ${inView ? 'scale-110' : 'scale-75'}`} />
      </div>
      <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}> 
        <div className="bg-[#23272f]/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <h4 className="text-2xl font-bold text-[#e3e6ed] mb-2">{exp.role}</h4>
              <div className="flex items-center gap-2">
                <p className="text-xl text-primary font-semibold">{exp.company}</p>
                {exp.website && (
                  <a 
                    href={exp.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors duration-200"
                    title={`Visit ${exp.company} website`}
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
            </div>
            <div className="text-right mt-4 lg:mt-0">
              <p className="text-[#b0b3bb] font-medium">{exp.period}</p>
              <p className="text-[#b0b3bb]">{exp.location}</p>
            </div>
          </div>
          <ul className="space-y-3">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-[#b0b3bb]">
                <FaStar className="text-primary mt-1 flex-shrink-0" size={12} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:w-1/2" />
    </div>
  );
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Section refs for scrollspy
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const researchRef = useRef(null);
  const contactRef = useRef(null);

  // Smooth scroll handler
  const handleNavClick = (section) => {
    setActiveSection(section);
    const sectionRefs = {
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      skills: skillsRef,
      research: researchRef,
      contact: contactRef,
    };
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      const sections = [
        { id: 'about', ref: aboutRef },
        { id: 'experience', ref: experienceRef },
        { id: 'projects', ref: projectsRef },
        { id: 'skills', ref: skillsRef },
        { id: 'research', ref: researchRef },
        { id: 'contact', ref: contactRef },
      ];
      const scrollPos = window.scrollY + 120; // offset for nav height
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
    <div className="font-sans min-h-screen bg-[#23272f] text-[#e3e6ed] transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 shadow-xl backdrop-blur-lg bg-[#23272f]/90 border-b border-white/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img src="/ss-logo.svg" alt="SS Logo" className="w-10 h-10 rounded-lg shadow-md" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sathvik Sanka</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'research', label: 'Research' },
                { id: 'contact', label: 'Contact' },
              ].map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => handleNavClick(nav.id)}
                  className={`relative px-2 py-1 font-medium transition text-base focus:outline-none
                    ${activeSection === nav.id ? 'text-primary' : 'text-[#e3e6ed]'}
                    group
                  `}
                  style={{ background: 'none', border: 'none' }}
                >
                  {nav.label}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-primary transition-all duration-300
                      ${activeSection === nav.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
                      group-hover:opacity-100 group-hover:scale-x-100
                    `}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" ref={aboutRef} className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 animate-pulse-slow">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold animate-[float_3s_ease-in-out_infinite]">
                SS
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
              Sathvik Sanka
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#e3e6ed] mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Machine Learning Engineer & Artificial Intelligence Specialist </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-[#b0b3bb] mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Results-driven engineer with 3+ years experience delivering AI and data solutions across e-commerce, healthcare, and consumer goods. 
              Expert in machine learning, cloud infrastructure, and production data pipelines that drive business impact.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-[#23272f]/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: `${0.6 + idx * 0.1}s`}}>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-[#b0b3bb]">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '1s'}}>
              <a 
                href={RESUME_URL} 
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload /> Download Resume
              </a>
              <div className="flex space-x-4">
                {contactLinks.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#23272f]/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:text-primary border border-white/20"
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
      <section id="experience" ref={experienceRef} className="py-16 px-4 bg-[#23272f]/50 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#e3e6ed] mb-4">Professional Experience</h3>
            <p className="text-lg text-[#b0b3bb] max-w-2xl mx-auto">A journey through my professional growth and achievements</p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-secondary dark:from-primary dark:via-primary/50 dark:to-secondary transform -translate-x-1/2 z-0 transition-colors duration-500" />
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <TimelineItem key={idx} exp={exp} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#e3e6ed] mb-4">Featured Projects</h3>
            <p className="text-lg text-[#b0b3bb] max-w-2xl mx-auto">Innovative solutions that demonstrate technical expertise and business impact</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-[#23272f]/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaCode className="text-white" size={48} />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#e3e6ed] mb-3">{project.name}</h4>
                  <p className="text-[#b0b3bb] mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
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
      <section id="skills" ref={skillsRef} className="py-16 px-4 bg-[#23272f]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#e3e6ed] mb-4">Technical Skills</h3>
            <p className="text-lg text-[#b0b3bb] max-w-2xl mx-auto">Comprehensive expertise across the data and AI ecosystem</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-[#23272f]/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  {category.includes("ML") && <FaCode className="text-primary" size={24} />}
                  {category.includes("Data") && <FaDatabase className="text-primary" size={24} />}
                  {category.includes("Cloud") && <FaCloud className="text-primary" size={24} />}
                  {category.includes("Analytics") && <FaChartLine className="text-primary" size={24} />}
                  <h4 className="text-xl font-bold text-[#e3e6ed]">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span key={i} className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-2 rounded-full text-sm font-medium border border-primary/20">
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
      <section id="research" ref={researchRef} className="py-16 px-4 bg-[#23272f]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#e3e6ed] mb-4">Research Interests</h3>
            <p className="text-lg text-[#b0b3bb] max-w-3xl mx-auto">
              Exploring cutting-edge applications of AI and machine learning across diverse domains, 
              from embedded systems to legal technology, pushing the boundaries of what's possible with intelligent systems.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-1">
            {researchInterests.map((research, idx) => (
              <div key={idx} className="bg-[#23272f]/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${research.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                        {research.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-[#e3e6ed] mb-4">{research.title}</h4>
                      <p className="text-[#b0b3bb] mb-6 leading-relaxed text-lg">{research.description}</p>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {research.keyAreas.map((area, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${research.color} rounded-full`}></div>
                            <span className="text-[#b0b3bb] text-sm font-medium">{area}</span>
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
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-8 border border-primary/20">
              <h4 className="text-2xl font-bold text-[#e3e6ed] mb-4">Research Vision</h4>
              <p className="text-lg text-[#b0b3bb] max-w-4xl mx-auto leading-relaxed">
                My research focuses on bridging the gap between theoretical AI advancements and practical, 
                real-world applications. By exploring these interdisciplinary areas, I aim to contribute to 
                the development of more efficient, ethical, and accessible AI systems that can solve complex 
                problems across various industries and domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Certifications */}
            <div>
              <h3 className="text-3xl font-bold text-[#e3e6ed] mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="bg-[#23272f]/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                    <h4 className="font-semibold text-[#e3e6ed] mb-2">{cert.name}</h4>
                    <p className="text-primary mb-1">{cert.issuer}</p>
                    <p className="text-sm text-[#b0b3bb]">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold text-[#e3e6ed] mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-[#23272f]/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                    <h4 className="font-semibold text-[#e3e6ed] mb-2">{edu.degree}</h4>
                    <p className="text-primary mb-1">{edu.school}</p>
                    <p className="text-sm text-[#b0b3bb] mb-2">{edu.date}</p>
                    <p className="text-sm text-[#b0b3bb] mb-2">GPA: {edu.gpa}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
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
      <section id="contact" ref={contactRef} className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-[#e3e6ed] mb-6">Let's Connect</h3>
          <p className="text-xl text-primary/20 mb-8">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss potential projects or opportunities.
          </p>
          <ContactForm />
          
          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <h4 className="text-xl font-semibold text-[#e3e6ed] mb-6">Connect with me on social media</h4>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {contactLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#23272f] text-[#e3e6ed]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#b0b3bb]">© {new Date().getFullYear()} Sathvik Sanka. Warning: May cause sudden inspiration..</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      {/* AI Portfolio Assistant */}
      <AIPortfolioAssistant />
    </div>
  );
}

<style>
{`
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulse 3s ease-in-out infinite;
}

.animate-rotate-slow {
  animation: rotate 20s linear infinite;
}
`}
</style>
