import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaUser, FaPaperPlane, FaTimes, FaComments } from 'react-icons/fa';

const AIPortfolioAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Portfolio knowledge base
  const portfolioKnowledge = {
    personal: {
      name: "Sathvik Sanka",
      title: "Machine Learning Engineer & Artificial Intelligence Specialist",
      experience: "3+ years",
      location: "San Francisco, California",
      education: "Master's in Information Technology from University of Cincinnati (4.0 GPA)",
      background: "Results-driven engineer with expertise in AI, ML, and data engineering"
    },
    projects: {
      "Ovarian cancer detection": {
        description: "A machine learning-based system for early detection and classification of ovarian cancer using medical imaging and clinical data. Implements advanced ML algorithms for improved diagnostic accuracy and patient outcomes.",
        technologies: ["Python", "Machine Learning", "Medical Imaging", "scikit-learn", "Data Analysis", "Healthcare AI"],
        impact: "Improves early cancer detection and patient outcomes through AI-powered medical imaging analysis",
        github: "https://github.com/sathvikmaahi/ovarian-cancer-information"
      },
      "AI powered universal data analyst": {
        description: "A full-stack AI-powered analytics platform that lets users upload any business data format and receive intelligent insights via natural language queries. Integrates multiple Hugging Face models for automated text generation, sentiment analysis, and business intelligence recommendations.",
        technologies: ["Python", "SQL", "Hugging Face Transformers", "PyTorch", "Natural Language Processing", "Sentiment Analysis"],
        impact: "Enables business users to get AI-powered insights from any data format through natural language",
        github: "https://github.com/sathvikmaahi/ai-powered-universal-data-analyst"
      },
      "Intelligent Crop Recommendation": {
        description: "A machine learning-powered system that recommends optimal crops based on soil, weather, and market data, enhanced with a generative AI assistant for personalized farming advice.",
        technologies: ["Python", "scikit-learn", "Generative AI", "Streamlit", "Pandas"],
        impact: "Helps farmers make data-driven decisions for optimal crop selection and yield"
      }
    },
    skills: {
      "Machine Learning": "Expert in supervised and unsupervised learning, deep learning architectures, computer vision, and NLP. Experience with PyTorch, TensorFlow, scikit-learn, and Hugging Face models.",
      "Data Engineering": "Proficient in building scalable data pipelines using Apache Airflow, PySpark, BigQuery, and ETL/ELT processes. Experience with data modeling and warehousing solutions.",
      "Cloud Services": "Hands-on experience with AWS (SageMaker, Glue, Redshift), Microsoft Azure, GCP (BigQuery), and IBM Cloud Services including Watson Studio and Cognos Analytics.",
      "Programming": "Strong proficiency in Python, R, SQL, and web technologies. Experience with Flask, Streamlit, and REST APIs.",
      "AI/ML Tools": "Expert in PyTorch, Keras, scikit-learn, Pandas, NumPy, and specialized libraries for computer vision and NLP."
    },
    experience: {
      "Vertx AI": {
        role: "Machine Learning Engineer",
        period: "June 2025 – Present",
        location: "San Francisco, California",
        focus: "Developing and deploying machine learning models for AI-powered applications, collaborating with cross-functional teams, and optimizing model performance for production readiness."
      },
      "Gear Supply": {
        role: "Data Engineer (Data Science)",
        period: "Jan 2025 – Apr 2025",
        location: "Cincinnati, Ohio",
        achievements: ["Designed personalized product recommendation system (12% CTR increase)", "Developed forecasting models reducing sales forecast error by 10%", "Automated marketing KPIs via BigQuery dashboards (7% revenue uplift)"]
      }
    }
  };

  // AI response generation
  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();
    const words = message.split(' ').filter(word => word.length > 0);
    
    // Handle single words and short queries
    if (words.length === 1) {
      const singleWord = words[0];
      
      // Single word responses
      switch (singleWord) {
        case 'python':
          return `Python is one of Sathvik's core programming languages. He uses it extensively for machine learning, data analysis, web development, and AI applications. His projects include healthcare AI systems, business intelligence platforms, and agricultural AI solutions - all built with Python.`;
        
        case 'ml':
        case 'machine':
        case 'learning':
          return `Machine Learning is Sathvik's primary expertise! He has 3+ years building ML systems including computer vision for medical imaging, NLP for business analytics, recommendation systems, and predictive models. He's proficient with PyTorch, TensorFlow, scikit-learn, and Hugging Face models.`;
        
        case 'ai':
        case 'artificial':
        case 'intelligence':
        case 'artificial intelligence':
          return `AI is Sathvik's passion! He specializes in machine learning, computer vision, natural language processing, and generative AI. His work includes healthcare AI (cancer detection), business AI (universal data analyst), and agricultural AI (crop recommendations).`;
        
        case 'data':
          return `Data Engineering is a key strength! Sathvik builds scalable data pipelines using Apache Airflow, PySpark, BigQuery, and ETL/ELT processes. He's worked with recommendation systems, forecasting models, and real-time analytics dashboards.`;
        
        case 'cloud':
          return `Sathvik has extensive cloud experience with AWS (SageMaker, Glue, Redshift), Microsoft Azure, GCP (BigQuery), and IBM Cloud Services. He's deployed AI models, built data pipelines, and managed cloud infrastructure.`;
        
        case 'healthcare':
          return `Healthcare AI is one of Sathvik's focus areas! He built an ovarian cancer detection system using machine learning and medical imaging. The project improves early cancer detection through AI-powered analysis of clinical data.`;
        
        case 'projects':
        case 'work':
          return `Sathvik has worked on several AI projects: 1) Ovarian Cancer Detection (healthcare AI), 2) Universal Data Analyst (business intelligence), 3) Intelligent Crop Recommendations (agricultural AI), 4) Product Recommendation System, and more! Which interests you?`;
        
        case 'experience':
          return `Sathvik has 3+ years of experience in AI and data engineering. Currently at Vertx AI as ML Engineer, previously at Gear Supply building recommendation systems and forecasting models. He's worked across healthcare, e-commerce, and consumer goods industries.`;
        
        case 'education':
          return `Sathvik holds a Master's in Information Technology from University of Cincinnati with a perfect 4.0 GPA. His studies focused on cybersecurity, machine learning, data mining, and cloud platforms including Azure and GCP.`;
        
        case 'contact':
          return `You can reach Sathvik through LinkedIn (linkedin.com/in/sathviksanka), GitHub (github.com/sathvikmaahi), or email at sathviksanka1@gmail.com. He's always interested in new opportunities!`;
        
        case 'github':
          return `Sathvik's GitHub: github.com/sathvikmaahi. You'll find his projects including the ovarian cancer detection system, universal data analyst, and other AI/ML implementations. Feel free to explore his code!`;
        
        case 'linkedin':
          return `Sathvik's LinkedIn: linkedin.com/in/sathviksanka. Connect with him for professional opportunities, collaborations, or to discuss AI and machine learning projects!`;
        
        case 'resume':
          return `Sathvik's resume is available for download on his portfolio! It details his 3+ years of experience in machine learning, data engineering, and AI development across multiple industries.`;
        
        case 'skills':
        case 'skill':
          return `Sathvik's key skills include: Machine Learning, Data Engineering, Cloud Services (AWS/Azure/GCP), Programming (Python/R/SQL), AI/ML Tools (PyTorch/TensorFlow), and Web Technologies. Which area would you like to know more about?`;
        
        case 'who':
        case 'what':
        case 'how':
          return `I'm an AI assistant for Sathvik Sanka, a Machine Learning Engineer & AI Specialist. I can tell you about his projects, skills, experience, education, or anything else about his portfolio. What would you like to know?`;
        
        case 'hey':
        case 'hello':
        case 'hi':
        case 'hellooo':
        case 'hiee':
        case 'heyy':
        case 'yo':
        case 'sup':
        case 'greetings':
          return `Hey there! 👋 I'm Sathvik's AI Portfolio Assistant. I'm here to help you learn about his work, projects, and skills. What would you like to know about? You can ask me anything from "python" to "projects" to "experience" - or just say hi! 😊`;
        
        case 'thanks':
        case 'thank':
        case 'thx':
        case 'ty':
          return `You're welcome! 😊 I'm here to help. Feel free to ask me anything else about Sathvik's portfolio - his projects, skills, experience, or just chat!`;
        
        case 'bye':
        case 'goodbye':
        case 'see':
        case 'later':
          return `Goodbye! 👋 It was great chatting with you. Feel free to come back anytime to learn more about Sathvik's work. Have a wonderful day! ✨`;
        
        case 'cool':
        case 'awesome':
        case 'nice':
        case 'great':
          return `Thanks! 😄 I'm glad you think so. Sathvik has some really interesting projects and skills. Is there anything specific you'd like to know more about?`;
        
        case 'help':
        case 'what':
        case 'how':
          return `I'm here to help! 🚀 You can ask me about Sathvik's projects, skills, experience, education, or contact info. Try single words like "python", "ml", "projects", "github", or ask full questions. What would you like to know?`;
        
        default:
          // Check if the word matches any project names
          const projectMatch = Object.keys(portfolioKnowledge.projects).find(project => 
            project.toLowerCase().includes(singleWord) || singleWord.includes(project.toLowerCase().split(' ')[0])
          );
          
          if (projectMatch) {
            const project = portfolioKnowledge.projects[projectMatch];
            return `The ${projectMatch} project: ${project.description}. It uses ${project.technologies.join(', ')} and ${project.impact}. Would you like more details?`;
          }
          
          // Check if the word matches any skill areas
          const skillMatch = Object.keys(portfolioKnowledge.skills).find(skill => 
            skill.toLowerCase().includes(singleWord) || singleWord.includes(skill.toLowerCase().split(' ')[0])
          );
          
          if (skillMatch) {
            return portfolioKnowledge.skills[skillMatch];
          }
          
          // Check if the word matches any company names
          const companyMatch = Object.keys(portfolioKnowledge.experience).find(company => 
            company.toLowerCase().includes(singleWord) || singleWord.includes(company.toLowerCase().split(' ')[0])
          );
          
          if (companyMatch) {
            const exp = portfolioKnowledge.experience[companyMatch];
            return `At ${companyMatch}, Sathvik worked as ${exp.role} from ${exp.period} in ${exp.location}. ${exp.focus}`;
          }
          
          return `I'm not sure about "${singleWord}". Try asking about Sathvik's projects, skills, experience, education, or contact information. You can also ask about specific technologies like Python, ML, AI, cloud, or healthcare!`;
      }
    }
    
    // Handle multi-word queries (existing logic)
    if (message.includes('who are you') || message.includes('tell me about yourself')) {
      return `I'm an AI assistant for ${portfolioKnowledge.personal.name}, a ${portfolioKnowledge.personal.title} with ${portfolioKnowledge.personal.experience} of experience. I'm here to help you learn about Sathvik's projects, skills, and experience. What would you like to know?`;
    }
    
    if (message.includes('experience') || message.includes('work history')) {
      return `Sathvik has ${portfolioKnowledge.personal.experience} of experience in AI and data engineering. Currently working as ML Engineer at Vertx AI in San Francisco, previously at Gear Supply where he built recommendation systems and forecasting models. Would you like details about a specific role?`;
    }
    
    // Projects
    if (message.includes('project') || message.includes('work')) {
      if (message.includes('ovarian') || message.includes('cancer')) {
        const project = portfolioKnowledge.projects["Ovarian cancer detection"];
        return `The Ovarian Cancer Detection project is a healthcare AI system that uses machine learning to analyze medical imaging and clinical data for early cancer detection. It's built with ${project.technologies.join(', ')} and focuses on improving diagnostic accuracy. You can find it on GitHub: ${project.github}`;
      }
      if (message.includes('data analyst') || message.includes('universal')) {
        const project = portfolioKnowledge.projects["AI powered universal data analyst"];
        return `The AI Universal Data Analyst is a full-stack platform that lets users upload any business data and get AI-powered insights through natural language. It uses ${project.technologies.join(', ')} and integrates multiple Hugging Face models for automated analysis.`;
      }
      return `Sathvik has worked on several AI projects including healthcare applications, business intelligence platforms, and agricultural AI systems. Which project interests you most? I can tell you about the Ovarian Cancer Detection, Universal Data Analyst, or Intelligent Crop Recommendation systems.`;
    }
    
    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('expertise')) {
      if (message.includes('machine learning') || message.includes('ml')) {
        return portfolioKnowledge.skills["Machine Learning"];
      }
      if (message.includes('data') || message.includes('engineering')) {
        return portfolioKnowledge.skills["Data Engineering"];
      }
      if (message.includes('cloud') || message.includes('aws') || message.includes('azure')) {
        return portfolioKnowledge.skills["Cloud Services"];
      }
      if (message.includes('python') || message.includes('programming')) {
        return portfolioKnowledge.skills["Programming"];
      }
      return `Sathvik has expertise in Machine Learning, Data Engineering, Cloud Services, Programming, and AI/ML Tools. Which area would you like me to elaborate on?`;
    }
    
    // Education
    if (message.includes('education') || message.includes('degree') || message.includes('university')) {
      return `Sathvik holds a Master's in Information Technology from University of Cincinnati with a perfect 4.0 GPA. His studies focused on information security, cybersecurity, machine learning, data mining, and cloud platforms including Azure and GCP.`;
    }
    
    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('linkedin')) {
      return `You can reach Sathvik through LinkedIn (linkedin.com/in/sathviksanka), GitHub (github.com/sathvikmaahi), or email at sathviksanka1@gmail.com. He's always interested in new opportunities and collaborations!`;
    }
    
    // Default response
    return `I'm here to help you learn about Sathvik's portfolio! You can ask me about his projects, skills, experience, education, or contact information. What would you like to know?`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage = inputMessage.trim();
    setInputMessage('');
    
    // Add user message
    const newUserMessage = { type: 'user', content: userMessage, timestamp: new Date() };
    setMessages(prev => [...prev, newUserMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI thinking time
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
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50"
        title="Ask me anything about Sathvik's portfolio!"
      >
        <FaComments size={24} />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-end p-4">
          <div className="bg-[#23272f] rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col border border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <FaRobot className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">AI Portfolio Assistant</h3>
                  <p className="text-sm text-gray-400">Ask me anything about Sathvik!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-gray-400 py-8">
                  <FaRobot className="mx-auto mb-3 text-4xl text-primary" />
                  <p>Hi! I'm your AI assistant for Sathvik's portfolio.</p>
                  <p className="text-sm mt-2">Ask me about his projects, skills, experience, or anything else!</p>
                </div>
              )}
              
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-white/10 text-white border border-white/20'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white border border-white/20 rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Sathvik's portfolio..."
                  className="flex-1 bg-white/10 text-white placeholder-gray-400 rounded-xl px-4 py-3 border border-white/20 focus:border-primary focus:outline-none transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-primary text-white p-3 rounded-xl hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
