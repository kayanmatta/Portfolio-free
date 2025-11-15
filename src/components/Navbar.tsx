import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Verifica a posição do elemento da navbar
      const navbarSection = document.getElementById('navbar-section');
      if (navbarSection) {
        const navbarPosition = navbarSection.getBoundingClientRect().top;
        const navbarHeight = navbarSection.offsetHeight;
        
        // Quando o topo da navbar alcançar o topo da janela, fixa a navbar
        if (navbarPosition <= 20 && navbarPosition > -navbarHeight) {
          setIsFixed(true);
          setScrolled(true);
        } 
        // Quando a navbar estiver completamente fora da viewport, mantém fixa
        else if (navbarPosition <= -navbarHeight) {
          setIsFixed(true);
          setScrolled(true);
        }
        // Quando estiver acima da navbar, remove a fixação
        else {
          setIsFixed(false);
          setScrolled(false);
        }
      }
      
      // Detectar seção ativa
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Função para verificar se um link está ativo
  const isActive = (sectionId: string) => {
    return activeSection === sectionId;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isFixed ? 'fixed' : ''}`}>
      <div className="navbar-glow"></div>
      <div className="navbar-container">
        <a 
          href="#home" 
          className="navbar-brand"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
        >
Meu Portfólio
        </a>
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
              className={`nav-link ${isActive('home') ? 'active' : ''}`}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
              className={`nav-link ${isActive('about') ? 'active' : ''}`}
            >
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#portfolio" 
              onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }} 
              className={`nav-link ${isActive('portfolio') ? 'active' : ''}`}
            >
              Portfolio
            </a>
          </li>

          <li className="nav-item">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
              className={`nav-link ${isActive('contact') ? 'active' : ''}`}
            >
              Contato
            </a>
          </li>
        </ul>
        
        <button 
          className="nav-cta"
          onClick={() => scrollToSection('contact')}
        >
          Vamos Conversar
        </button>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>
      </div>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav">
          <li className="mobile-nav-item">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
              className={`mobile-nav-link ${isActive('home') ? 'active' : ''}`}
            >
              Home
            </a>
          </li>
          <li className="mobile-nav-item">
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
              className={`mobile-nav-link ${isActive('about') ? 'active' : ''}`}
            >
              Sobre
            </a>
          </li>
          <li className="mobile-nav-item">
            <a 
              href="#portfolio" 
              onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }} 
              className={`mobile-nav-link ${isActive('portfolio') ? 'active' : ''}`}
            >
              Portfolio
            </a>
          </li>

          <li className="mobile-nav-item">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
              className={`mobile-nav-link ${isActive('contact') ? 'active' : ''}`}
            >
              Contato
            </a>
          </li>
          <li className="mobile-nav-item">
            <button 
              className="nav-cta mobile-cta"
              onClick={() => scrollToSection('contact')}
            >
              Vamos Conversar
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;