import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaArrowUp, FaExternalLinkAlt, FaStar, FaCode, FaDatabase, FaCloud, FaChartLine, FaMoon, FaSun } from "react-icons/fa";

const RESUME_URL = "/resume.pdf";

const experiences = [
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
      "Designed, trained, and deployed machine learning models for real-world applications.",
      "Automated model training and evaluation workflows, reducing manual effort by 30%.",
      "Mentored junior engineers and contributed to technical documentation and best practices."
    ]
  },
  {
    role: "Data Scientist",
    company: "The SmartBridge",
    period: "Nov 2021 – Feb 2022",
    location: "Hyderabad, India",
    bullets: [
      "Developed and deployed data-driven solutions for client projects, improving business decision-making.",
      "Built and maintained data pipelines and performed data analysis for actionable insights.",
      "Collaborated with cross-functional teams to deliver end-to-end analytics solutions."
    ]
  },

];

const projects = [
  {
    name: "Intelligent Crop Recommendation & Generative AI Advisor",
    desc: "A machine learning-powered system that recommends optimal crops based on soil, weather, and market data, enhanced with a generative AI assistant for personalized farming advice.",
    tech: ["Python", "scikit-learn", "Generative AI", "Streamlit", "Pandas"],
    link: "",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop"
  },
  {
    name: "Federated Threat Detection for Privacy-Preserving Cybersecurity",
    desc: "A distributed threat detection platform leveraging federated learning to identify cyber threats across multiple organizations while ensuring data privacy and compliance.",
    tech: ["Federated Learning", "PySyft", "PyTorch", "Cybersecurity", "Docker"],
    link: "",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400&h=250&fit=crop"
  },
  {
    name: "Smart Waste Classification with Deep Learning",
    desc: "A deep learning solution for automated garbage classification, enabling efficient recycling and waste management through real-time image recognition.",
    tech: ["TensorFlow", "Keras", "OpenCV", "Python", "CNN"],
    link: "",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=250&fit=crop"
  },
  {
    name: "Flight Fare & Delay Prediction Platform",
    desc: "A machine learning platform that predicts flight fares and delays using historical and real-time data, empowering travelers and airlines with actionable insights.",
    tech: ["scikit-learn", "Pandas", "Flask", "ML Ops", "AWS"],
    link: "",
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
    tech: ["Python", "BigQuery", "Airbyte", "Scikit-learn"],
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
    link: "",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
  },
  {
    name: "Drug Classification Using Machine Learning",
    desc: "A machine learning solution for classifying drugs based on chemical properties and clinical data, supporting pharmaceutical research and personalized medicine initiatives.",
    tech: ["Python", "scikit-learn", "Pandas", "Data Visualization", "Jupyter"],
    link: "",
    image: "https://images.unsplash.com/photo-1588776814546-ec7e93716c6a?w=400&h=250&fit=crop"
  }
];

const skills = {
  "Languages & Databases": [
    "C", "Python", "R", "SQL", "PostgreSQL", "MongoDB"
  ],
  "Web Technologies": [
    "HTML", "CSS", "JavaScript", "Flask", "Streamlit", "REST API's"
  ],
  "Cloud Services": [
    "AWS (S3, SageMaker, Glue, Redshift, Athena, ECS)", "Microsoft Azure", "GCP (BigQuery)"
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
    "PyTorch", "Keras", "Scikit-Learn", "Pandas", "NumPy", "Seaborn", "Matplotlib", "Hugging Face", "LangChain", "OpenAI", "NLTK", "Spacy"
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
  { name: "Deep Learning Specialization", issuer: "Coursera", year: "2023" }
];

const education = [
  {
    degree: "M.S. Information Technology",
    school: "University of Cincinnati",
    date: "Jan 2024 – May 2025",
    gpa: "3.8/4.0",
    highlights: ["Machine Learning", "Data Science", "Cloud Computing"]
  },
  {
    degree: "B.Tech. Electronics & Communications Engineering",
    school: "Jb Institute Of Engineering and Technology",
    date: "2017 - 2021",
    gpa: "3.7/4.0",
    highlights: ["Signal Processing", "Digital Communications", "VLSI Design"]
  }
];

const contactLinks = [
  { icon: <FaEnvelope size={20} />, url: "mailto:sathviksanka1@gmail.com", label: "Email" },
  { icon: <FaLinkedin size={20} />, url: "https://linkedin.com/in/sathviksanka", label: "LinkedIn" },
  { icon: <FaGithub size={20} />, url: "https://github.com/sathvikmaahi", label: "GitHub" }
];

const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "15+", label: "Projects Completed" },
  { number: "4", label: "Certifications" },
  { number: "95%", label: "Client Satisfaction" }
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
        <span className={`block w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-white dark:border-gray-900 shadow-lg transition-transform duration-700 ${inView ? 'scale-110' : 'scale-75'}`} />
      </div>
      <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}> 
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-800/40 transition-colors duration-500">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-indigo-200 mb-2">{exp.role}</h4>
              <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold">{exp.company}</p>
            </div>
            <div className="text-right mt-4 lg:mt-0">
              <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.period}</p>
              <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
            </div>
          </div>
          <ul className="space-y-3">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-200">
                <FaStar className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0" size={12} />
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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={
      `font-sans min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-gray-100' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-900'}`
    }>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 shadow-lg transition-colors duration-500 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img src="/ss-logo.svg" alt="SS Logo" className="w-10 h-10 rounded-lg shadow-md" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">Sathvik Sanka</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</a>
              <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Experience</a>
              <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Projects</a>
              <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Skills</a>
              <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact</a>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full bg-indigo-100 dark:bg-gray-800 hover:bg-indigo-200 dark:hover:bg-gray-700 transition-colors duration-300"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FaSun className="text-yellow-400" size={20} /> : <FaMoon className="text-indigo-700" size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-[float_3s_ease-in-out_infinite]">
                SS
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Sathvik Sanka
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">ML Software Engineer & Data Engineer</h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-600 mb-8 leading-relaxed">
              Results-driven engineer with 3+ years experience delivering AI and data solutions across e-commerce, healthcare, and consumer goods. 
              Expert in machine learning, cloud infrastructure, and production data pipelines that drive business impact.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={RESUME_URL} 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold flex items-center gap-2"
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
                    className="bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:text-indigo-600"
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
      <section id="experience" className="py-16 px-4 bg-white/50 dark:bg-gray-900/60 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Professional Experience</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A journey through my professional growth and achievements</p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-indigo-400 via-indigo-200 to-purple-400 dark:from-indigo-700 dark:via-indigo-900 dark:to-purple-900 transform -translate-x-1/2 z-0 transition-colors duration-500" />
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <TimelineItem key={idx} exp={exp} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Innovative solutions that demonstrate technical expertise and business impact</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-600/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaCode className="text-white" size={48} />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{project.name}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
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
      <section id="skills" className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive expertise across the data and AI ecosystem</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  {category.includes("ML") && <FaCode className="text-indigo-600" size={24} />}
                  {category.includes("Data") && <FaDatabase className="text-indigo-600" size={24} />}
                  {category.includes("Cloud") && <FaCloud className="text-indigo-600" size={24} />}
                  {category.includes("Analytics") && <FaChartLine className="text-indigo-600" size={24} />}
                  <h4 className="text-xl font-bold text-gray-800">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span key={i} className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-2 rounded-full text-sm font-medium border border-indigo-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Certifications */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                    <h4 className="font-semibold text-gray-800 mb-2">{cert.name}</h4>
                    <p className="text-indigo-600 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                    <h4 className="font-semibold text-gray-800 mb-2">{edu.degree}</h4>
                    <p className="text-indigo-600 mb-1">{edu.school}</p>
                    <p className="text-sm text-gray-500 mb-2">{edu.date}</p>
                    <p className="text-sm text-gray-600 mb-2">GPA: {edu.gpa}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">
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
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Let's Connect</h3>
          <p className="text-xl text-indigo-100 mb-8">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss potential projects or opportunities.
          </p>
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
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Sathvik Sanka. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

<style>
{`
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
`}
</style>
