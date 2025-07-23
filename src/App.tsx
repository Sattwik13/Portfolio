import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, Phone, Menu, X } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Award } from "lucide-react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const certificates = [
  {
    title: "Full Stack Developer",
    issuer: "InternShala",
    date: "June 2025",
    link: "https://trainings.internshala.com/s/v/3700262/08429dd3",
    image: "https://img-c.udemycdn.com/course/750x422/625204_436a_2.jpg", // replace with your own
  },
  {
    title: "Career Essentials in Software Development",
    issuer: "Microsoft",
    date: "June 2025",
    link: "https://drive.google.com/file/d/1Ek9ErnoHlrFfhK00FYX4DOmAuYPbqK2-/view?usp=drive_link",
    image: "https://th.bing.com/th/id/OIP.FZAw-04CYpLnuBKaHAxO_QHaEG?w=317&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
  },
  {
    title: "Low Level Design",
    issuer: "CodeHelp",
    date: "Feb 2025",
    link: "https://learn.codehelp.in/share-certificate?serialno=VPPL6CDV",
    image: "https://ts2.mm.bing.net/th?id=OIP.H-FICT8y8T9VASicTHxUxQHaEb&pid=15.1",
  },
];


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
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
    setMobileMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-white text-xl font-light">Loading Portfolio...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-20 bg-slate-900/30 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Sattwik Manna
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-slate-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero section  */}
        {/* <Hero /> */}
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-slate-900 to-emerald-900 bg-[length:300%_300%] animate-gradient-x z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
            Sattwik Manna
          </span>
        </h1>

        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            1000,
            'React | Next.js | Node.js | Express.js',
            1000,
            'MySQL | MongoDB | Redis | BullMQ',
            1000,
            'Javascript | C++ | Java',
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl mt-7 md:text-4xl text-gray-300 font-mono"
          repeat={Infinity}
        />

        <p className="text-lg text-gray-400 mt-8 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
              Passionate about creating exceptional digital experiences through clean code and innovative solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-gray-600 hover:border-gray-500 rounded-lg font-medium transition-all duration-300 hover:bg-gray-800"
              >
                Get In Touch
              </button>
            </div>

      </motion.div>
      {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </h2>
            {/* <p className="text-gray-400 max-w-2xl mx-auto">
              I'm a passionate software engineer with expertise in modern web technologies and a strong foundation in computer science.
            </p> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/70 transition-all duration-300">
                <h3 className="text-2xl text-center font-mono mb-4 text-blue-400">I am a passionate developer </h3>
              
                <p className="text-gray-300 text-justify font-light leading-relaxed">
                  I am always looking out for new things to explore. I love to collaborate with like-minded people who are fueled by curiosity. I enjoy solving complex problems and building applications that make a meaningful impact
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-emerald-500/70 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">sattwikmanna6359@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">+91-( 7001096359 )</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'JavaScript', level: 90 },
                    { name: 'Java', level: 80 },
                    { name: 'C++', level: 80 },
                    { name: 'React', level: 85 },
                    { name: 'Express.js', level: 90 },
                    { name: 'Node.js', level: 80 },
                    { name: 'MongoDB', level: 85 },
                    { name: 'SQL', level: 90 },
                    
                  ].map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            {/* <p className="text-gray-400 max-w-2xl mx-auto">
              My journey through education and professional development in software engineering.
            </p> */}
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: "Diploma",
                  organization: "ICV",
                  period: "2018 - 2021",
                  description: "Computer Science And Information Technology",
                  type: "education"
                },
                {
                  title: "B.TECH",
                  organization: "MIT",
                  period: "2021 - 2024",
                  description: "Compute Science And Engineering",
                  type: "education"
                },
                {
                  title: "Software Developer Traniee",
                  organization: "Internshala",
                  period: "2024 - 2025",
                  description: "Focused on software engineering fundamentals, algorithms, and modern development practices.",
                  type: "work"
                }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 ml-12 md:ml-0">
                      <div className="flex items-center space-x-2 mb-2">
                        {item.type === 'education' && <Briefcase className="w-5 h-5 text-blue-400" />}
                        {item.type === 'education' && <Code2 className="w-5 h-5 text-emerald-400" />}
                        {item.type === 'work' && <User className="w-5 h-5 text-purple-400" />}
                        <span className="text-sm text-gray-400">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-blue-400 mb-3">{item.organization}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-slate-800 border-4 border-blue-500 rounded-full z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            {/* <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects demonstrating various technologies and skills.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
  {
    title: "Payment Management System",
    description: "A comprehensive payment processing application with modern UI and secure backend.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/Sattwik13/Payment-Management-System",
    demo: "https://github.com/Sattwik13/Payment-Management-System",
    image: "https://media.istockphoto.com/id/1329913812/photo/banking-icon-concept.jpg?b=1&s=612x612&w=0&k=20&c=fA5JSw3j695h2Ytgq5r12ka4xkI3pb7kGq4uOdEISE0=" // ✅ your hosted image or GitHub raw URL
  },
  {
    title: "FinIntel Platform",
    description: "Financial intelligence platform for data analysis and insights with interactive dashboards.",
    tech: ["React", "Tailwind CSS", "ShadCN UI", "Next.js","JavaScript", "Recharts", "Express", "Supabase", "Clerk"],
    github: "https://github.com/Sattwik13/FinIntel",
    demo: "https://finintel-sattwik-mannas-projects.vercel.app/",
    image: "https://www.thewatchtower.com/assets/images/blog_images/ai-in-finance1727418180.jpg"
  },
  {
    title: "Token Price Interpolator ",
    description: "Historical Token Price Oracle with Interpolation Engine",
    tech: ["nextjs14", "TailwindCSS", "redis", "BullMQ", "mongodb-atlas", "express"],
    github: "https://github.com/Sattwik13/Token-price-interpolator",
    demo: "https://token-price-interpolator.vercel.app/",
    image: "https://th.bing.com/th/id/OIP.5uxEQ--YtFt4C2mX91EYjQHaE8?w=252&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and modern design principles.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Sattwik13/Portfolio",
    demo: "https://sattwik.netlify.app/",
    image: "https://th.bing.com/th/id/OIP.1ffI0Sr4ncOeWbltZ-I2nQHaEK?w=329&h=185&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
  },
  {
    title: "Art of Music",
    description: "Drive into our comprehension music courses and transform your musical journey today. Wheater you are a beginner or looking to refine yur skills, join us unlock your true potential",
    tech: ["next.js", "TailwindCSS", "react", "motion"],
    github: "https://github.com/Sattwik13/Music_Next_js",
    demo: "https://artofmusic-pi.vercel.app/",
    image: "https://th.bing.com/th/id/OIP.ZNF_1EUqOflwbBvkA814zAHaFj?w=259&h=194&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
  },
  {
    title: "Weather Forecast App ",
    description: "Modern, responsive portfolio website built with React and modern design principles.",
    tech: ["html", "TailwindCSS", "javascript", "express"],
    github: "https://github.com/Sattwik13/Weather_Forecast_App",
    demo: "https://weather-forecast-app-sg4m.vercel.app/",
    image: "https://th.bing.com/th/id/OIP.X03RSWuBxL-Fbtc9DM9xfgHaHf?w=190&h=192&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
  },
  
]
.map((project, index) => (
              <div
                key={index}
                className="bg-slate-950/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-600/70 transition-all duration-300 hover:scale-105 group"
              >
                {/* <div className="h-48 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div> */}
                <div className="h-48 bg-slate-700 rounded-lg mb-6 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-16 bg-slate-950/80 px-4" id="certificates">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-blue-600" /> Certificates
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-blue-500/70 hover:scale-105 transition-all duration-300 flex flex-col"
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full h-full object-cover rounded-lg mb-2 border border-slate-600"
                />

                <h3 className="text-lg font-semibold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-400">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline mt-auto"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. Let's connect!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <a
                  href="mailto:sattwikmanna6359@gmail.com"
                  className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Mail className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    sattwikmanna6359@gmail.com
                  </p>
                </a>

                <a
                  href="https://www.linkedin.com/in/sattwik-manna-bba0341bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Linkedin className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Connect with me
                  </p>
                </a>

                <a
                  href="https://github.com/Sattwik13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <Github className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    View my code
                  </p>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700 text-center">
                {/* <p className="text-gray-400 mb-4">
                  Or download my resume for more details
                </p> */}
                <a
                  href="https://drive.google.com/file/d/1t8FVa3oEAT7bix5V0DLkPgATjZigijiM/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <span>Download Resume</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Sattwik Manna. All rights reserved</p>
        </div>
      </div>
    </footer>

    </div>
  );
}

export default App;