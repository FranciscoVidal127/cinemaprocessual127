import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { LanguageToggle } from './components/LanguageToggle';
import { useLanguage } from './context/LanguageContext';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Textos } from './pages/Textos';
import { TextoDetail } from './pages/TextoDetail';
import { Filmografia } from './pages/Filmografia';
import { NotFound } from './pages/NotFound';
import './App.css';

function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a href="#main" className="skip-link">{t.nav.skipToContent}</a>
      <div className="header-inner">
        <Link to="/" className="header-logo" onClick={closeMenu}>Francisco Vidal</Link>
        <nav className="header-nav" aria-label="Main navigation">
          <Link to="/sobre" className={`nav-link${location.pathname === '/sobre' ? ' nav-link--active' : ''}`}>{t.nav.sobre}</Link>
          <Link to="/filmografia" className={`nav-link${location.pathname === '/filmografia' ? ' nav-link--active' : ''}`}>{t.nav.filmografia}</Link>
          <Link to="/textos" className={`nav-link${location.pathname === '/textos' ? ' nav-link--active' : ''}`}>{t.nav.textos}</Link>
        </nav>
        <LanguageToggle />
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <Link to="/sobre" onClick={closeMenu}>{t.nav.sobre}</Link>
            <Link to="/filmografia" onClick={closeMenu}>{t.nav.filmografia}</Link>
            <Link to="/textos" onClick={closeMenu}>{t.nav.textos}</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-name">Francisco Vidal</span>
        <span className="footer-location">{t.footer.location}</span>
      </div>
    </footer>
  );
}

function AppRoutes() {
  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/filmografia" element={<Filmografia />} />
          <Route path="/textos" element={<Textos />} />
          <Route path="/texto/:slug" element={<TextoDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
