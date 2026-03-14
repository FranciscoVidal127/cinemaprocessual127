import { BrowserRouter, Routes, Route, useLocation, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Escrita } from './pages/Escrita';
import { FilmeDetail } from './pages/FilmeDetail';
import { Post } from './pages/Post';
import './App.css';

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${isHome ? ' header--home' : ''}`}>
      <div className="header-inner">
        <a href="/" className="nav-brand">
          <span className="nav-brand-name">Francisco Vidal</span>
          <span className="nav-brand-sub">ator · cineasta · escritor</span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <NavLink to="/reel" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Reel
          </NavLink>
          <NavLink to="/sobre" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Sobre
          </NavLink>
          <NavLink to="/filmografia" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Filmografia
          </NavLink>
          <NavLink to="/fotos" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Fotos
          </NavLink>
          <NavLink to="/escrita" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Escrita
          </NavLink>
          <a href="mailto:franciscovidalcs@gmail.com" className="nav-link nav-link--contact">
            Contato
          </a>
        </nav>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <nav className="nav-mobile">
          <NavLink to="/reel" className="nav-mobile-link">Reel</NavLink>
          <NavLink to="/sobre" className="nav-mobile-link">Sobre</NavLink>
          <NavLink to="/filmografia" className="nav-mobile-link">Filmografia</NavLink>
          <NavLink to="/fotos" className="nav-mobile-link">Fotos</NavLink>
          <NavLink to="/escrita" className="nav-mobile-link">Escrita</NavLink>
          <a href="mailto:franciscovidalcs@gmail.com" className="nav-mobile-link">Contato</a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-name">Francisco Vidal</p>
          <p className="footer-desc">Ator · Cineasta · Tradutor · Escritor de Cinema</p>
        </div>
        <div className="footer-center">
          <p className="footer-statement">Cinema, atuação e escrita como prática contínua de presença e transformação.</p>
        </div>
        <div className="footer-right">
          <p className="footer-location">Rio de Janeiro</p>
          <a href="mailto:franciscovidalcs@gmail.com" className="footer-email">franciscovidalcs@gmail.com</a>
          <a href="https://www.instagram.com/franciscovidalcs/" target="_blank" rel="noopener noreferrer" className="footer-instagram">@franciscovidalcs</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Francisco Vidal</span>
      </div>
    </footer>
  );
}

import { Reel } from './pages/Reel';
import { Filmografia } from './pages/Filmografia';
import { Fotos } from './pages/Fotos';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <Header />
      <main className="main">{children}</main>
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
        <Route path="/filmografia" element={<Layout><Filmografia /></Layout>} />
        <Route path="/fotos" element={<Layout><Fotos /></Layout>} />
        <Route path="/escrita" element={<Layout><Escrita /></Layout>} />
        <Route path="/filme/:slug" element={<Layout><FilmeDetail /></Layout>} />
        <Route path="/post/:slug" element={<Layout><Post /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
