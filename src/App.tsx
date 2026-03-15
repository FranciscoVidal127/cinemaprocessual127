import { BrowserRouter, Routes, Route, useLocation, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Reel } from './pages/Reel';
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isHome = location.pathname === '/';

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${isHome ? ' header--home' : ''}`}>
      <div className="header-inner">
        <a href="/" className="nav-brand">
          <span className="nav-brand-name">Francisco Vidal</span>
          <span className="nav-brand-sub">ator · cineasta · escritor · rio de janeiro</span>
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
          <NavLink to="/reel" className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}>Reel</NavLink>
          <NavLink to="/sobre" className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}>Sobre</NavLink>
          <NavLink to="/filmografia" className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}>Filmografia</NavLink>
          <NavLink to="/fotos" className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}>Fotos</NavLink>
          <NavLink to="/escrita" className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}>Escrita</NavLink>
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
          <p className="footer-desc">Ator · Cineasta · Escritor</p>
          <p className="footer-desc">Rio de Janeiro, Brasil</p>
        </div>
        <div className="footer-center">
          <p className="footer-statement">O cinema como matéria: tempo, montagem, escuta, relação.</p>
        </div>
        <div className="footer-right">
          <p className="footer-location">Escreva</p>
          <a href="mailto:franciscovidalcs@gmail.com" className="footer-email">franciscovidalcs@gmail.com</a>
          <a href="https://www.instagram.com/franciscovidalcs/" target="_blank" rel="noopener noreferrer" className="footer-instagram">@franciscovidalcs</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Francisco Vidal · Rio de Janeiro</span>
      </div>
    </footer>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-enter">
      {children}
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <Header />
      <main className="main">
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
