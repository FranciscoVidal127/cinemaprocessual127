import { BrowserRouter, Routes, Route, useLocation, NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Reel } from './pages/Reel';
import { Atuacao } from './pages/Atuacao';
import { AssistenciaDirecao } from './pages/AssistenciaDirecao';
import { Filmografia } from './pages/Filmografia';
import { FilmeDetail } from './pages/FilmeDetail';
import { Fotos } from './pages/Fotos';
import { Escrita } from './pages/Escrita';
import { Post } from './pages/Post';
import { NotFound } from './pages/NotFound';
import './App.css';

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`header${(scrolled || menuOpen) ? ' header--scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="nav-brand">Cinema Processual</Link>

        <div className="header-right">
          <LanguageToggle />
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="nav-mobile">
          <NavLink to="/sobre" className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}>{t.nav.sobre}</NavLink>
          <NavLink to="/reel" className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}>{t.nav.reel}</NavLink>
          <NavLink to="/filmografia" className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}>{t.nav.filmografia}</NavLink>
          <NavLink to="/fotos" className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}>{t.nav.fotos}</NavLink>
          <div className="nav-mobile-divider" />
          <NavLink to="/assistencia-de-direcao" className={({ isActive }) => isActive ? 'nav-mobile-link nav-mobile-link--secondary active' : 'nav-mobile-link nav-mobile-link--secondary'}>{t.nav.assistenciaDirecao}</NavLink>
          <NavLink to="/escrita" className={({ isActive }) => isActive ? 'nav-mobile-link nav-mobile-link--secondary active' : 'nav-mobile-link nav-mobile-link--secondary'}>{t.nav.escrita}</NavLink>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-name">Francisco Vidal</span>
        <span className="footer-sep" aria-hidden="true" />
        <a href="mailto:franciscovidalcs@gmail.com" className="footer-link">franciscovidalcs@gmail.com</a>
        <span className="footer-sep" aria-hidden="true" />
        <a href="https://www.instagram.com/franciscovidalcs/" target="_blank" rel="noopener noreferrer" className="footer-link">@franciscovidalcs</a>
        <span className="footer-sep" aria-hidden="true" />
        <span className="footer-location">{t.footer.location}</span>
      </div>
    </footer>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-enter">
      {children}
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage();

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">{t.nav.skipToContent}</a>
      <Header />
      <main className="main" id="main-content">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/sobre" element={<Layout><Sobre /></Layout>} />
        <Route path="/reel" element={<Layout><Reel /></Layout>} />
        <Route path="/atuacao" element={<Layout><Atuacao /></Layout>} />
        <Route path="/assistencia-de-direcao" element={<Layout><AssistenciaDirecao /></Layout>} />
        <Route path="/filmografia" element={<Layout><Filmografia /></Layout>} />
        <Route path="/fotos" element={<Layout><Fotos /></Layout>} />
        <Route path="/escrita" element={<Layout><Escrita /></Layout>} />
        <Route path="/filme/:slug" element={<Layout><FilmeDetail /></Layout>} />
        <Route path="/post/:slug" element={<Layout><Post /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
