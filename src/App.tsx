import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="app">
      {/* ADICIONADO: Componentes de efeito */}
      <ParticlesBackground />
      <CustomCursor />
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            Criamos <span>experiências</span> digitais
          </h1>
          <p className="hero-subtitle">
            Desenvolvimento de sites e sistemas personalizados para sua empresa se <span className="sales-highlight">destacar na web</span>
          </p>
          <div className="hero-features">
            <div className="feature-badge">
              <span className="feature-icon">✓</span>
              <span className="feature-text">+10 Anos de Experiência</span>
            </div>
            <div className="feature-badge">
              <span className="feature-icon">✓</span>
              <span className="feature-text">+50 Projetos Concluídos</span>
            </div>
            <div className="feature-badge">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Suporte 24/7</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary scale-in">Ver Portfólio</a>
            <a href="#contact" className="btn btn-secondary scale-in">Fale Conosco</a>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="floating-element float">
          <a href="#about" className="scroll-down">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* MODIFICADO: Navbar Section - Posicionada aqui para o efeito "sticky" */}
      <div id="navbar-section">
        <Navbar />
      </div>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title fade-in-up">Sobre Nós</h2>
          <p className="section-subtitle fade-in-up">
            Especialistas em criação de <span className="sales-highlight">soluções digitais inovadoras</span>
          </p>
          
          <div className="about-content">
            <div className="about-text">
              <h3 className="about-text-title fade-in-left">Especialistas em Criação de Sites</h3>
              <p className="about-text-paragraph fade-in-left">
                Somos uma equipe apaixonada por tecnologia e design, dedicada a criar soluções digitais 
                que impulsionam o crescimento dos nossos clientes. Com anos de experiência no mercado, 
                desenvolvemos sites e sistemas que combinam estética, funcionalidade e performance.
              </p>
              <p className="about-text-paragraph fade-in-left">
                Trabalhamos com as mais modernas tecnologias do mercado para garantir que seu projeto 
                tenha a melhor performance, segurança e experiência para seus usuários.
              </p>
              <div className="features fade-in-left">
                <div className="feature hover-lift">
                  <div className="feature-dot"></div>
                  <span>Design Responsivo</span>
                </div>
                <div className="feature hover-lift">
                  <div className="feature-dot"></div>
                  <span>Otimização SEO</span>
                </div>
                <div className="feature hover-lift">
                  <div className="feature-dot"></div>
                  <span>Performance</span>
                </div>
              </div>
            </div>
            
            <div className="about-image hover-lift">
              <div className="image-placeholder">
                <div className="stat">
                  <div className="stat-number">10+</div>
                  <div className="stat-text">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <div className="container">
          <h2 className="section-title fade-in-up">Nossos Serviços</h2>
          <p className="section-subtitle fade-in-up">
            Oferecemos <span className="sales-highlight">soluções completas</span> para sua presença digital
          </p>
          
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card hover-lift">
              <div className="service-number">01</div>
              <div className="service-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-title">Websites Personalizados</h3>
              <p className="service-description">
                Desenvolvemos sites únicos que representam a identidade da sua marca e convertem visitantes em clientes.
              </p>
              <ul className="service-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Design moderno e responsivo</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Otimização para motores de busca</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Integração com redes sociais</span>
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="service-card hover-lift">
              <div className="service-number">02</div>
              <div className="service-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3h18v18H3V3z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 17V7m6 10V7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-title">E-commerce</h3>
              <p className="service-description">
                Criamos lojas virtuais completas com sistema de pagamento, gestão de estoque e integração com marketplaces.
              </p>
              <ul className="service-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Integração com gateways de pagamento</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Gestão de produtos e estoque</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Relatórios de vendas</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="service-card hover-lift">
              <div className="service-number">03</div>
              <div className="service-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-title">Sistemas Web</h3>
              <p className="service-description">
                Desenvolvemos sistemas personalizados para otimizar processos e aumentar a produtividade da sua empresa.
              </p>
              <ul className="service-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Painéis administrativos</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Integração com APIs</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Relatórios personalizados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section portfolio">
        <div className="container">
          <h2 className="section-title fade-in-up">Nosso Portfólio</h2>
          <p className="section-subtitle fade-in-up">
            Confira alguns dos <span className="sales-highlight">projetos que desenvolvemos</span>
          </p>
          
          <div className="portfolio-grid">
            {/* Project 1 */}
            <div className="project-card hover-scale">
              <div className="project-image" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'}}>
                <div className="project-overlay">
                  <button className="btn-project">Ver Projeto</button>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">E-commerce de Moda</h3>
                <p className="project-description">
                  Loja virtual completa com sistema de pagamento e gestão de estoque
                </p>
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="project-card hover-scale">
              <div className="project-image" style={{background: 'linear-gradient(135deg, #8b5cf6, #ec4899)'}}>
                <div className="project-overlay">
                  <button className="btn-project">Ver Projeto</button>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Portal de Notícias</h3>
                <p className="project-description">
                  Portal de notícias com sistema de publicação e gerenciamento de conteúdo
                </p>
                <div className="tags">
                  <span className="tag">Vue.js</span>
                  <span className="tag">Laravel</span>
                  <span className="tag">MySQL</span>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="project-card hover-scale">
              <div className="project-image" style={{background: 'linear-gradient(135deg, #ec4899, #f59e0b)'}}>
                <div className="project-overlay">
                  <button className="btn-project">Ver Projeto</button>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Sistema de Gestão</h3>
                <p className="project-description">
                  Sistema de gestão empresarial com dashboard e relatórios personalizados
                </p>
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">Express</span>
                  <span className="tag">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center" style={{marginTop: '3rem'}}>
            <button className="btn btn-secondary scale-in">Ver Todos os Projetos</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title fade-in-up">Entre em Contato</h2>
          <p className="section-subtitle fade-in-up">
            Vamos <span className="sales-highlight">conversar sobre o seu próximo projeto</span>
          </p>
          
          <div className="contact-container">
            <div className="contact-info">
              <h3 className="fade-in-left">Informações de Contato</h3>
              
              <div className="contact-item fade-in-left">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Telefone</h4>
                  <p>(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="contact-item fade-in-left">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>contato@suaempresa.com</p>
                </div>
              </div>
              
              <div className="contact-item fade-in-left">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Endereço</h4>
                  <p>São Paulo, SP</p>
                </div>
              </div>
              
              <div className="social-links fade-in-left">
                <a href="#" className="social-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm13.5-12.268a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="contact-form">
              <h3 className="fade-in-right">Envie uma mensagem</h3>
              <form>
                <div className="form-grid">
                  <div className="form-group fade-in-right">
                    <input 
                      type="text" 
                      placeholder="Seu nome" 
                      className="form-control"
                    />
                  </div>
                  <div className="form-group fade-in-right">
                    <input 
                      type="email" 
                      placeholder="Seu email" 
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group fade-in-right">
                  <input 
                    type="text" 
                    placeholder="Assunto" 
                    className="form-control"
                  />
                </div>
                <div className="form-group fade-in-right">
                  <textarea 
                    placeholder="Sua mensagem" 
                    className="form-control"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="btn btn-primary scale-in"
                  style={{width: '100%', position: 'relative', overflow: 'hidden'}}
                >
                  <span style={{position: 'relative', zIndex: 2, fontWeight: 'bold', letterSpacing: '1px'}}>Enviar Mensagem</span>
                  <span style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))', opacity: 0.8, zIndex: 1}}></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title fade-in-up">O que nossos clientes dizem</h2>
          <p className="section-subtitle fade-in-up">
            Veja o que empresas parceiras acham do nosso trabalho
          </p>
          
          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card hover-lift">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "O trabalho da equipe foi excepcional. Entregaram nosso projeto antes do prazo e com qualidade acima da média."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">Carlos Silva</h4>
                    <p className="author-position">CEO, TechSolutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="testimonial-card hover-lift">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Transformaram nossa presença digital. O e-commerce que criaram aumentou nossas vendas em 150% no primeiro mês."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">Maria Oliveira</h4>
                    <p className="author-position">Diretora de Marketing, ModaStyle</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="testimonial-card hover-lift">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Profissionais altamente qualificados e comprometidos. Superaram todas as nossas expectativas em termos de design e funcionalidade."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">Roberto Santos</h4>
                    <p className="author-position">Gerente de TI, FinançasPro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <a href="#home" className="footer-brand scale-in">SuaEmpresa</a>
          <p className="footer-text fade-in-up">
            Criando experiências digitais que transformam negócios
          </p>
          <div className="footer-cta">
            <p className="footer-cta-text">Pronto para transformar sua presença digital?</p>
            <a href="#contact" className="btn btn-primary footer-cta-button">Iniciar Projeto</a>
          </div>
          <div className="footer-copyright fade-in-up">
            © {new Date().getFullYear()} SuaEmpresa. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;