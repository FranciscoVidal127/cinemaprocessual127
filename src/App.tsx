import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { LanguageToggle } from './components/LanguageToggle';
import { useLanguage } from './context/LanguageContext';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Textos } from './pages/Textos';
import { TextoDetail } from './pages/TextoDetail';
import { Filmografia } from './pages/Filmografia';
import { FilmeDetail } from './pages/FilmeDetail';
import { Fotos } from './pages/Fotos';
import { Reel } from './pages/Reel';
import { Atuacao } from './pages/Atuacao';
import { AssistenciaDirecao } from './pages/AssistenciaDirecao';
import { Escrita } from './pages/Escrita';
import { Post } from './pages/Post';
import { NotFound } from './pages/NotFound';
import './App.css';

function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <header className="site-header">
      <a href="#main" className="skip-link">{t.nav.skipToContent}</a>
      <div className="header-inner">
        <Link to="/" className="header-logo" onClick={closeMenu}>Francisco Vidal</Link>
        <nav className="header-nav" aria-label="Main navigation">
          <Link to="/sobre" className={`nav-link${isActive('/sobre') ? ' nav-link--active' : ''}`}>{t.nav.sobre}</Link>
          <Link to="/reel" className={`nav-link${isActive('/reel') ? ' nav-link--active' : ''}`}>{t.nav.reel}</Link>
          <Link to="/filmografia" className={`nav-link${isActive('/filmografia') ? ' nav-link--active' : ''}`}>{t.nav.filmografia}</Link>
          <Link to="/textos" className={`nav-link${isActive('/textos') || isActive('/texto') ? ' nav-link--active' : ''}`}>{t.nav.textos}</Link>
          <Link to="/fotos" className={`nav-link${isActive('/fotos') ? ' nav-link--active' : ''}`}>{t.nav.fotos}</Link>
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
            <Link to="/reel" onClick={closeMenu}>{t.nav.reel}</Link>
            <Link to="/filmografia" onClick={closeMenu}>{t.nav.filmografia}</Link>
            <Link to="/textos" onClick={closeMenu}>{t.nav.textos}</Link>
            <Link to="/fotos" onClick={closeMenu}>{t.nav.fotos}</Link>
            <span className="mobile-divider" />
            <Link to="/assistencia-de-direcao" onClick={closeMenu}>{t.nav.assistenciaDirecao}</Link>
            <Link to="/escrita" onClick={closeMenu}>{t.nav.escrita}</Link>
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
          <Route path="/reel" element={<Reel />} />
          <Route path="/filmografia" element={<Filmografia />} />
          <Route path="/filme/:slug" element={<FilmeDetail />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/textos" element={<Textos />} />
          <Route path="/texto/:slug" element={<TextoDetail />} />
          <Route path="/atuacao" element={<Atuacao />} />
          <Route path="/assistencia-de-direcao" element={<AssistenciaDirecao />} />
          <Route path="/escrita" element={<Escrita />} />
          <Route path="/post/:slug" element={<Post />} />
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
