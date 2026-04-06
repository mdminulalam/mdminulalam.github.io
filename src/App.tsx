import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Linkedin as LinkedIn, Github, ExternalLink, Download, Code, Briefcase, GraduationCap, Award, Send, Brain, Cpu, Activity, BookOpen, Users, Sun, Moon, X as XIcon } from 'lucide-react';
import IconDemo from './IconDemo';

// Custom Google Scholar Icon Component
const GoogleScholarIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 12.53 14.978 11.5 12 11.5s-5.548 1.03-6.758 2.269M12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10m-1 1.5v3l2.5 1.5-2.5 1.5v3l5-3-5-3v-2z"/>
  </svg>
);

// Custom ResearchGate Icon Component  
const ResearchGateIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
    <rect width="24" height="24" rx="3" fill="#00d0b7"/>
    <g fill="white" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold">
      <text x="3" y="15" textAnchor="start">R</text>
      <text x="13" y="15" textAnchor="start">G</text>
    </g>
  </svg>
);
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showIconDemo, setShowIconDemo] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Show icon demo if URL contains #icons
  useEffect(() => {
    if (window.location.hash === '#icons') {
      setShowIconDemo(true);
    }
  }, []);

  if (showIconDemo) {
    return <IconDemo />;
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'research', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  /*const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'AWS', level: 70 }
  ];*/

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      //metrics: '40% increase in conversion rate'
    },
    {
      title: 'Robot Operating System (ROS) controlled Mobile Robot: Mapping and Positioning',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://www.youtube.com/watch?v=dcdqAwVTC1g&list=PLun_i5TqhXR3IkP0YHO1dKT9q9KwqPiiV',
      githubUrl: '#',
      //metrics: '500+ active users'
    },
    {
      title: 'A Robotic Ball Balancing Beam System',
      description: 'Interactive dashboard for visualizing complex datasets with custom charts, filters, and real-time data processing.',
      technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL', 'Docker'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      //metrics: 'Processes 1M+ data points daily'
    },
    {
      title: 'A Robotic Ball Balancing Beam System',
      description: 'Interactive dashboard for visualizing complex datasets with custom charts, filters, and real-time data processing.',
      technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL', 'Docker'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      //metrics: 'Processes 1M+ data points daily'
    }
  ];

  const experiences = [
    {
      company: 'University of Nevada-Las Vegas, Nevada, USA',
      position: 'Graduate Research Assistant (RA) & Teaching Assistant (TA)',
      period: '2023 - Present',
      description: 'Instructor and researcher specializing in digital logic and embedded systems, with active work in AI‑driven wearable technologies. Teach courses and hands-on labs (CPE100, EGG202, CPE200). Conduct research on generative AI for medical imaging and explainable AI methods that support early detection of neurodegenerative diseases.',
      achievements: [
        'Developed IoT-based AI system for gait characterization and early neurodegenerative disease detection',
        'Implemented a full embedded AI pipeline for gait data analysis using IMU sensors',
        'Constructed a comprehensive gait dataset integrating wearable sensors and experimental conditions',
        'Published peer-reviewed journal and conference papers on AI, wearable systems, and generative models for healthcare'

      ]
    },
    {
      company: 'Paradigm IOT LLC, Las Vegas, Nevada, USA',
      position: 'Electrical Engineering Intern (Research & Development)',
      period: 'June, 2024 - July, 2024',
      description: 'Worked on the IMU sensor integration team, contributing to the development of novel consumer sensor devices. Collaborated across embedded systems teams on circuit design, firmware, and wireless communication systems.',
      achievements: [
        'Designed firmware and software for the Silky Mitts® ball and stick embedded sensor',
        'Conducted optical inspections and PCB circuit analysis, ensuring compliance with industry and regulatory standards',
        'Assisted in designing LoRaWAN system architecture for connected sensor applications',
        'Collaborated with hardware and embedded system teams on circuit design and validation processes'
      ]
    },
    {
      company: 'Arkansas Tech University, Arkansas, USA',
      position: 'Graduate Research Assistant (RA) & Teaching Assistant (TA)',
      period: '2021 - 2023',
      description: 'Contributed to teaching and research in machine learning and digital logic design, supporting both academic courses and applied research projects.',
      achievements: [
        'Developed machine learning models for prediction and classification tasks',
        'Implemented KNN, Naïve Bayes, Random Forest, SVM, and Logistic Regression for comparative analysis',
        'Applied SHAP interpretable ML to uncover relationships between predictors and outcomes',
        'Taught and supervised 100+ senior students in the Digital Logic Design Lab',
        'Conducted experiments and project-based learning with Cadence software and FPGA devices'
      ]
    }
  ];

  const education = [
    {
      institution: 'University of Nevada, Las Vegas',
      degree: 'Doctor of Philosophy (PhD) in Electrical Engineering',
      period: '2023 - Present',
      gpa: '',
      coursework: ['Machine Learning Application', 'Embedded Systems for Automation', 'Embedded Security', 'Real Time Embedded', 'IoT Systems', 'Cloud Computing Engr.','Optical Sensing'],
      //thesis: 'Optimizing Neural Network Performance in Distributed Computing Environments',
      honors: ['Graduate Research Assistantship', 'Howe Bioengineering Fellowship']
    },
    {
      institution: 'Arkansas Tech University',
      degree: 'Master of Engineering (MEng) in Electrical Engineering',
      period: '2021 - 2023',
      gpa: '',
      coursework: ['Machine Learning', 'Digital Image Processing', 'Advanced Semiconductors', 'Statistical Signal Processing', 'Categorical Data Analysis', 'Modern Control Systems'],
      //thesis: 'Multimodal Explainable AI for Neurodegenerative and Chronic Disease Diagnosis',
      honors: ['Graduate Research Fellowship']
    },
    {
      institution: 'North South University',
      degree: 'Bachelor of Science (BSc) in Electronics and Telecommunication Engineering',
      period: '2011 - 2016',
      gpa: '',
      coursework: ['Data Structures', 'Computer Architecture', 'Software Engineering', 'Linear Algebra'],
      activities: '',
      honors: ''
    }
  ];

  const certifications = [
    {
      name: 'AWS Academy Engineering Operations Technicians',
      issuer: 'Amazon Web Services',
      date: '2025',
      expiry: '',
      credentialId: 'https://www.credly.com/badges/aba0456d-1f5b-493b-a1cb-7e9b939c0329'
    },
    {
      name: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services',
      date: '2025',
      expiry: '',
      credentialId: 'https://www.credly.com/badges/677779eb-ff6e-42e8-a29a-3489de072d28'
    },
    {
      name: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
      issuer: 'Oracle',
      date: '2023',
      expiry: '',
      credentialId: 'OC4237995'
    },
    {
      name: 'Python for Everybody Specialization',
      issuer: 'University of Michigan | Coursera',
      date: '2020',
      expiry: '',
      credentialId: '4FAQZYYD54V6'
    }
  ];

  const research = [
    {
      title: 'Early Detection of Alzheimer’s Disease Using Generative Models: A Review of GANs and Diffusion Models in Medical Imaging',
      authors: 'Md Minul Alam, Shahram Latifi',
      journal: 'MDPI Algorithms',
      year: '2025',
      type: 'Peer-reviewed Journal',
      doi: 'https://doi.org/10.3390/a18070434',
      //citations: 45,
      keywords: ['Alzheimer’s disease', 'generative models', 'diffusion models', 'MCI', 'MRI']
    },
    {
      title: 'A Systematic Review of Techniques for Early-Stage Alzheimer’s disease Diagnosis Using Machine Learning and Deep Learning',
      authors: 'Md Minul Alam, Shahram Latifi',
      journal: 'Journal of Data Science and Intelligent Systems',
      year: '2025',
      type: 'Peer-reviewed Journal',
      doi: 'https://doi.org/10.47852/bonviewJDSIS52025037',
      //citations: 45,
      keywords: ['AD', 'mild cognitive impairment', 'MCI', 'MRI', 'neurodegenerative disorders', 'neuroimaging', 'PET']
    },
    {
      title: 'Prediction of diabetes at early stage using interpretable machine learning',
      authors: 'Mohammad Sajidul Islam, Md Minul Alam, Afsana Ahamed, Syed Imran Ali Meerza',
      conference: 'IEEE SoutheastCon 2023',
      year: '2023',
      type: 'Conference Paper',
      doi: 'https://doi.org/10.1109/SoutheastCon51012.2023.10115152',
      //citations: 28,
      //abstract: 'We propose a dynamic query optimization technique that adapts to varying cloud resource availability and workload patterns.',
      keywords: ['Diabetes', 'Machine Learning', 'Interpretable Machine Learning', 'Prediction']
    },
    {
      title: 'Design of a Mobile Aeration System for Aquaculture and Proof of Concept',
      authors:'AKM Rubaiyat Reza Habib, Md Minul Alam, Mohammad Rezaul Islam',
      conference: 'IEEE 2021 International Conference on Computer, Communication, Chemical, Materials and Electronic Engineering (IC4ME2)',
      //publication: 'IEEE 2021 International Conference on Computer, Communication, Chemical, Materials and Electronic Engineering (IC4ME2)',
      year: '2021',
      type: 'Conference Paper',
      doi: 'https://doi.org/10.1109/IC4ME253898.2021.9768594',
      //type: 'Industry Article',
      //url: 'https://techcrunch.com/future-web-development',
      //views: '50K+',
      //abstract: 'An analysis of emerging web technologies and their potential impact on the development landscape over the next five years.',
      keywords: ['Aquaculture', 'Aerator', 'Dissolved Oxygen','Aeration', 'Mobile']
    },
    /*{
      title: 'Building Resilient Microservices Architecture',
      authors: 'A. Johnson',
      journal: 'Software Engineering Quarterly',
      year: '2022',
      type: 'Technical Article',
      citations: 15,
      abstract: 'A comprehensive guide to designing and implementing microservices that can withstand failures and scale effectively.',
      keywords: ['Microservices', 'System Architecture', 'Resilience']
    }*/
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img
                src="/M_LogoTranspa.png"
                alt="Logo"
                className="h-10 w-10 object-contain dark:brightness-0 dark:invert"
              />
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Md Minul Alam
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Experience', 'Education', 'Research', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Experience', 'Education', 'Research', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md w-full text-left transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="text-blue-600 dark:text-blue-400">Md Minul Alam</span>
                </h1>
                <p className="text-xl sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
                  PhD Candidate and Graduate Assistant
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                 <p> Welcome to my personal website!</p> 
                 <p>
                  I build intelligent embedded systems that integrate AI to tackle real-world challenges in health diagnostics and mobility analysis.
                 </p>
                 <p>From AI models to wearable sensors, my work focuses on creating smart systems that make a real impact on people’s lives.</p>
                 </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <Mail size={20} />
                 <span> Get In Touch</span>
                </button>
               {/* <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Resume
              </button>*/}
              </div>

              <div className="inline-flex items-center gap-3">
                <a href="https://www.linkedin.com/in/mdminulalam/" className="w-12 h-12 bg-[#0077B5] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200" title="LinkedIn">
                  <LinkedIn size={24} className="text-white" />
                </a>
                <a href="https://www.researchgate.net/profile/Md-Minul-Alam?ev=hdr_xprf" className="w-12 h-12 bg-[#00D0B7] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200" title="ResearchGate">
                  <ResearchGateIcon size={24} className="text-white" />
                </a>
                <a href="https://scholar.google.com/citations?user=Kbt7bTYAAAAJ&hl=en" className="w-12 h-12 bg-[#4285F4] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200" title="Google Scholar">
                  <GoogleScholarIcon size={24} className="text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200" title="GitHub">
                  <Github size={24} className="text-white" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/Me.png"
                  alt="Md Minul Alam"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl transform rotate-6 scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              AI Researcher | Embedded Systems | Healthcare Innovation | IoT Systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Blue gradient card with bio and skills */}
            <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <p className="leading-relaxed">
                  I'm a PhD candidate in Electrical Engineering, specializing in Embedded Systems with a focus 
                  on integrating machine learning. With a Master's degree in Electrical Engineering and a solid 
                  foundation in AI research, I'm passionate about combining artificial intelligence and embedded 
                  technologies to build intelligent systems for real-world healthcare solutions.
                </p>
                
                <p className="leading-relaxed">
                  My work focuses on the design and implementation of innovative embedded and IoT systems 
                  powered by machine learning, with applications in wearable health monitoring, mobility analysis, 
                  and early detection of neurodegenerative diseases. These efforts have led to contributions in peer-reviewed journals and international conferences. As I continue to advance my work, I aim to leverage cutting-edge technologies to drive innovation and address critical societal challenges.
                </p>
                
                <p className="leading-relaxed">
                  Explore my website to learn more about my research, insights, and academic journey. Together, let's push the boundaries of engineering and AI for a healthier, smarter future.
                </p>
                
                {/* Skills/Technologies tags */}
                <div className="flex flex-wrap gap-3">
                  {['Python', 'TensorFlow', 'Arduino', 'RTOS', 'Edge AI', 'MQTT', 'AWS'].map((tech) => (
                    <span 
                      key={tech}
                      className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right side - Feature cards */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6 hover:shadow-md transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI for Health</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Building Generative AI models for early diagnosis of Neurodegenerative diseases using medical and wearable sensor data.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6 hover:shadow-md transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Embedded Intelligence</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Developing low-power embedded systems that enable real-time AI inference in IoT and wearable health devices.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6 hover:shadow-md transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart IoT Systems</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Designing IoT-powered health monitoring frameworks for mobility analysis, gait tracking, and neurodegenerative disease detection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-50 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 hover:shadow-md transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                    <Briefcase size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <Award size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Academic background and professional certifications
            </p>
          </div>

          {/* Academic Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Academic Degrees</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-8 hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                        <div className="flex items-center gap-2">
                          <GraduationCap size={16} />
                          <span>{edu.period}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center gap-2">
                            <Award size={16} />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {edu.coursework && (
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white mb-3">Relevant Coursework</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {(edu.honors || edu.activities) && (
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white mb-3">
                          {edu.honors ? 'Honors & Awards' : 'Activities'}
                        </h5>
                        <ul className="space-y-1">
                          {(edu.honors || edu.activities || []).map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                              <Award size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {edu.thesis && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                      <h5 className="font-medium text-gray-900 dark:text-white mb-2">Thesis</h5>
                      <p className="text-gray-600 dark:text-gray-300 italic">{edu.thesis}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Award className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <span className="text-sm text-green-600 font-medium"> {cert.expiry}</span>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{cert.issuer}</p>
                  <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <p>Issued: {cert.date}</p>
                    <p className="font-mono text-xs">ID: {cert.credentialId}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Research & Publications</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Academic research, publications, and contributions to the field
            </p>
          </div>

          <div className="space-y-8">
            {research.map((paper, index) => (
              <div key={index} className="bg-slate-50 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 hover:shadow-md transition-all duration-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                        {paper.type}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">{paper.year}</span>
                      {paper.citations && (
                        <span className="text-green-600 text-sm font-medium">
                          {paper.citations} citations
                        </span>
                      )}
                      {paper.views && (
                        <span className="text-purple-600 text-sm font-medium">
                          {paper.views} views
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{paper.title}</h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {paper.authors && `Authors: ${paper.authors}`}
                    </p>
                    
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                      {paper.journal || paper.conference || paper.publication}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 mt-4 lg:mt-0">
                    {paper.doi && (
                      <a
                        href={`https://doi.org/${paper.doi}`}
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        DOI
                      </a>
                    )}
                    {paper.url && (
                      <a
                        href={paper.url}
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Read
                      </a>
                    )}
                  </div>
                </div>
                
                {typeof paper.abstract === 'string' && paper.abstract.trim() && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Abstract</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{paper.abstract}</p>
                  </div>
                )}
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {paper.keywords.map((keyword, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research Metrics */}
          {/*<div className="mt-16 bg-slate-50 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Research Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">12</div>
                <div className="text-gray-600 dark:text-gray-300">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">88</div>
                <div className="text-gray-600 dark:text-gray-300">Total Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15</div>
                <div className="text-gray-600 dark:text-gray-300">H-Index</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-300">Conference Talks</div>
              </div>
            </div>
          </div>*/}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(project)}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 overflow-hidden hover:shadow-lg transition-all duration-200 group text-left"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm text-green-600 font-medium mb-4">
                    {project.metrics}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-600 to-indigo-500 rounded-2xl p-8 text-white mb-8">
              <div >
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 hover:bg-white/10 p-1 rounded-lg transition-colors duration-200">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white-900">Email</p>
                    <p className="text-blue-100">alamm1@unlv.nevada.edu</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:bg-white/10 p-1 rounded-lg transition-colors duration-200">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white-900">Phone</p>
                    <p className="text-blue-100"> -</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:bg-white/10 p-1 rounded-lg transition-colors duration-200">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white-900">Location</p>
                    <p className="text-blue-100">Las Vegas, NV</p>
                  </div>
                </div>
              </div>
            </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/mdminulalam/"
                  className="w-12 h-12 bg-[#0077B5] text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-transform duration-200"
                >
                  <LinkedIn size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=Kbt7bTYAAAAJ&hl=en"
                  className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  title="Google Scholar"
                >
                  <GoogleScholarIcon size={20} />
                </a>
                <a
                  href="https://www.researchgate.net/profile/Md-Minul-Alam?ev=hdr_xprf"
                  className="w-12 h-12 bg-[#00D0B7] rounded-lg flex items-center justify-center hover:bg-green-700 transition-transform duration-200"
                  title="ResearchGate"
                >
                  <ResearchGateIcon size={20} />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white dark:bg-gray-800 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <XIcon size={28} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.metrics && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Metrics</h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    {selectedProject.metrics}
                  </p>
                </div>
              )}

              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={selectedProject.liveUrl}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <Github size={18} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-bold text-xl mb-4">Md Minul Alam</div>
           {/*<p className="text-gray-400 dark:text-gray-500 mb-6">
              Building the future, one line of code at a time.
            </p>*/}
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://www.linkedin.com/in/mdminulalam/" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                <LinkedIn size={24} />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="https://scholar.google.com/citations?user=Kbt7bTYAAAAJ&hl=en" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200" title="Google Scholar">
                <GoogleScholarIcon size={24} />
              </a>
              <a href="https://www.researchgate.net/profile/Md-Minul-Alam?ev=hdr_xprf" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200" title="ResearchGate">
                <ResearchGateIcon size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                © 2026 Md Minul Alam. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
