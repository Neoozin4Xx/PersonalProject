import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Twitter, Linkedin, Menu, X, Code2, Zap, Palette, Moon, Sun, Globe } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      // Navigation
      home: "Home",
      about: "About",
      work: "Work",
      contact: "Contact",
      
      // Hero Section
      heroTitle: "Simple Web",
      heroSubtitle: "Development",
      heroDescription: "We create elegant and efficient web solutions using modern technologies.",
      seeWork: "See Work",
      
      // About Section
      aboutTitle: "About Our Work",
      aboutDescription1: "We focus on creating web experiences that combine functionality with clean design. We use the best development practices to deliver lasting solutions.",
      aboutDescription2: "Our minimalist approach ensures that every element has a purpose, resulting in intuitive and performant interfaces.",
      
      // Features
      fastTitle: "Fast",
      fastDescription: "Agile development with Vite and instant hot reload",
      modernTitle: "Modern",
      modernDescription: "React with hooks and functional components",
      elegantTitle: "Elegant",
      elegantDescription: "Clean and responsive design with Tailwind CSS",
      
      // Work Section
      workTitle: "Recent Work",
      workDescription: "Some of the projects we've developed with a focus on simplicity and functionality.",
      
      // Projects
      dashboardTitle: "Dashboard",
      dashboardDescription: "Clean interface for data analysis",
      ecommerceTitle: "E-commerce",
      ecommerceDescription: "Minimalist and functional online store",
      blogTitle: "Blog",
      blogDescription: "Content platform with CMS",
      
      // Contact Section
      contactTitle: "Let's Talk",
      contactDescription: "Have a project in mind? We'd love to help you turn your ideas into reality.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell us about your project...",
      sendMessage: "Send Message",
      
      // Footer
      footerText: "Simple. Elegant. Efficient."
    },
    pt: {
      // Navigation
      home: "Início",
      about: "Sobre",
      work: "Trabalhos",
      contact: "Contato",
      
      // Hero Section
      heroTitle: "Desenvolvimento",
      heroSubtitle: "Web Simples",
      heroDescription: "Criamos soluções web elegantes e eficientes usando tecnologias modernas.",
      seeWork: "Ver Trabalhos",
      
      // About Section
      aboutTitle: "Sobre Nosso Trabalho",
      aboutDescription1: "Focamos em criar experiências web que combinam funcionalidade com design limpo. Utilizamos as melhores práticas de desenvolvimento para entregar soluções duradouras.",
      aboutDescription2: "Nossa abordagem minimalista garante que cada elemento tenha um propósito, resultando em interfaces intuitivas e performáticas.",
      
      // Features
      fastTitle: "Rápido",
      fastDescription: "Desenvolvimento ágil com Vite e hot reload instantâneo",
      modernTitle: "Moderno",
      modernDescription: "React com hooks e componentes funcionais",
      elegantTitle: "Elegante",
      elegantDescription: "Design limpo e responsivo com Tailwind CSS",
      
      // Work Section
      workTitle: "Trabalhos Recentes",
      workDescription: "Alguns dos projetos que desenvolvemos com foco na simplicidade e funcionalidade.",
      
      // Projects
      dashboardTitle: "Dashboard",
      dashboardDescription: "Interface limpa para análise de dados",
      ecommerceTitle: "E-commerce",
      ecommerceDescription: "Loja online minimalista e funcional",
      blogTitle: "Blog",
      blogDescription: "Plataforma de conteúdo com CMS",
      
      // Contact Section
      contactTitle: "Vamos Conversar",
      contactDescription: "Tem um projeto em mente? Adoraríamos ajudar você a transformar suas ideias em realidade.",
      nameLabel: "Nome",
      emailLabel: "Email",
      messageLabel: "Mensagem",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu@email.com",
      messagePlaceholder: "Conte-nos sobre seu projeto...",
      sendMessage: "Enviar Mensagem",
      
      // Footer
      footerText: "Simples. Elegante. Eficiente."
    }
  };

  const t = translations[language];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t.fastTitle,
      description: t.fastDescription
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: t.modernTitle,
      description: t.modernDescription
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: t.elegantTitle,
      description: t.elegantDescription
    }
  ];

  const projects = [
    {
      title: t.dashboardTitle,
      description: t.dashboardDescription,
      tech: ["React", "Tailwind", "Charts"]
    },
    {
      title: t.ecommerceTitle,
      description: t.ecommerceDescription,
      tech: ["Next.js", "Stripe", "Prisma"]
    },
    {
      title: t.blogTitle,
      description: t.blogDescription,
      tech: ["Gatsby", "MDX", "GraphQL"]
    }
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const themeClasses = {
    bg: isDarkMode ? 'bg-gray-900' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    textTertiary: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    bgSecondary: isDarkMode ? 'bg-gray-800' : 'bg-gray-50',
    bgCard: isDarkMode ? 'bg-gray-800' : 'bg-white',
    bgInput: isDarkMode ? 'bg-gray-700' : 'bg-white',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    borderLight: isDarkMode ? 'border-gray-800' : 'border-gray-100',
    hover: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100',
    hoverCard: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200',
    navBg: isDarkMode ? 'bg-gray-900/95' : 'bg-white/95',
    buttonPrimary: isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800',
    buttonSecondary: isDarkMode ? 'border-gray-600 text-white hover:border-gray-500' : 'border-gray-300 text-gray-900 hover:border-gray-400',
    inputBorder: isDarkMode ? 'border-gray-600' : 'border-gray-300',
    inputFocus: isDarkMode ? 'focus:ring-white' : 'focus:ring-gray-900',
    tagBg: isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? `${themeClasses.navBg} backdrop-blur-sm border-b ${themeClasses.borderLight}` : 'bg-transparent'
      }`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="font-semibold text-lg tracking-tight">DevStack</div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { key: 'home', href: '#home' },
                { key: 'about', href: '#about' },
                { key: 'work', href: '#work' },
                { key: 'contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-colors text-sm font-medium`}
                >
                  {t[item.key]}
                </a>
              ))}
            </div>

            {/* Theme and Language controls - Always visible */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-lg ${themeClasses.hover} transition-colors flex items-center space-x-1`}
                title={language === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium">{language === 'en' ? 'PT' : 'EN'}</span>
              </button>
              
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${themeClasses.hover} transition-colors`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${themeClasses.hover} transition-colors ml-2`}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${themeClasses.navBg} border-t ${themeClasses.borderLight}`}>
            <div className="px-6 py-4 space-y-2">
              {[
                { key: 'home', href: '#home' },
                { key: 'about', href: '#about' },
                { key: 'work', href: '#work' },
                { key: 'contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`block py-2 ${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-colors text-sm font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t[item.key]}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
              {t.heroTitle}
              <br />
              <span className="font-normal">{t.heroSubtitle}</span>
            </h1>
            <p className={`text-xl ${themeClasses.textSecondary} mb-8 leading-relaxed`}>
              {t.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className={`${themeClasses.buttonPrimary} px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center group`}>
                {t.seeWork}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className={`border ${themeClasses.buttonSecondary} px-8 py-3 rounded-lg font-medium transition-colors`}>
                {t.contact}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${themeClasses.bgSecondary}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                {t.aboutTitle}
              </h2>
              <p className={`${themeClasses.textSecondary} mb-6 leading-relaxed`}>
                {t.aboutDescription1}
              </p>
              <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                {t.aboutDescription2}
              </p>
            </div>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-10 h-10 ${themeClasses.bgCard} rounded-lg flex items-center justify-center border ${themeClasses.border}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              {t.workTitle}
            </h2>
            <p className={`${themeClasses.textSecondary} max-w-2xl mx-auto`}>
              {t.workDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className={`${themeClasses.bgSecondary} rounded-lg h-48 mb-4 ${themeClasses.hoverCard} transition-colors flex items-center justify-center`}>
                  <div className={`text-4xl font-light ${themeClasses.textTertiary} group-hover:${themeClasses.textSecondary.split(' ')[0]} transition-colors`}>
                    {index + 1}
                  </div>
                </div>
                <h3 className={`font-medium mb-2 group-hover:${themeClasses.textSecondary.split(' ')[0]} transition-colors`}>
                  {project.title}
                </h3>
                <p className={`${themeClasses.textSecondary} text-sm mb-3 leading-relaxed`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`${themeClasses.tagBg} px-2 py-1 rounded text-xs font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${themeClasses.bgSecondary}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              {t.contactTitle}
            </h2>
            <p className={`${themeClasses.textSecondary} mb-12 leading-relaxed`}>
              {t.contactDescription}
            </p>

            <div className={`${themeClasses.bgCard} rounded-lg p-8 shadow-sm border ${themeClasses.border}`}>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-left">
                    <div className={`text-sm font-medium ${themeClasses.text} mb-2`}>{t.nameLabel}</div>
                    <input 
                      type="text"
                      className={`w-full border ${themeClasses.inputBorder} ${themeClasses.bgInput} ${themeClasses.text} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${themeClasses.inputFocus} focus:border-transparent transition-all`}
                      placeholder={t.namePlaceholder}
                    />
                  </div>
                  <div className="text-left">
                    <div className={`text-sm font-medium ${themeClasses.text} mb-2`}>{t.emailLabel}</div>
                    <input 
                      type="email"
                      className={`w-full border ${themeClasses.inputBorder} ${themeClasses.bgInput} ${themeClasses.text} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${themeClasses.inputFocus} focus:border-transparent transition-all`}
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>
                <div className="text-left">
                  <div className={`text-sm font-medium ${themeClasses.text} mb-2`}>{t.messageLabel}</div>
                  <textarea 
                    rows={5}
                    className={`w-full border ${themeClasses.inputBorder} ${themeClasses.bgInput} ${themeClasses.text} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${themeClasses.inputFocus} focus:border-transparent transition-all resize-none`}
                    placeholder={t.messagePlaceholder}
                  />
                </div>
                <button className={`w-full ${themeClasses.buttonPrimary} py-3 rounded-lg font-medium transition-colors`}>
                  {t.sendMessage}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${themeClasses.borderLight}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="font-semibold text-lg tracking-tight mb-4 md:mb-0">
              DevStack
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className={`${themeClasses.textTertiary} hover:${themeClasses.textSecondary.split(' ')[0]} transition-colors`}>
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className={`${themeClasses.textTertiary} hover:${themeClasses.textSecondary.split(' ')[0]} transition-colors`}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className={`${themeClasses.textTertiary} hover:${themeClasses.textSecondary.split(' ')[0]} transition-colors`}>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className={`mt-8 pt-8 border-t ${themeClasses.borderLight} text-center ${themeClasses.textTertiary} text-sm`}>
            <p>© 2024 DevStack. {t.footerText}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;