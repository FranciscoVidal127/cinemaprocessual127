import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { FilmeDetail } from './pages/FilmeDetail';
import { Post } from './pages/Post';
import './App.css';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="/" className="nav-brand">Francisco Vidal</a>
          {isHome && (
            <div className="nav-links">
              <a href="#reel">Reel</a>
              <a href="#sobre">Sobre</a>
              <a href="#filmografia">Filmografia</a>
              <a href="#fotos">Fotos</a>
              <a href="#escrita">Escrita</a>
              <a href="#contato">Contato</a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-statement">
            Cinema, atuação e escrita como prática de presença e transformação.
          </div>
          <div className="footer-meta">
            Rio de Janeiro<br />
            {new Date().getFullYear()}
          </div>
        </div>
        <p>© {new Date().getFullYear()} Francisco Vidal</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/filme/:slug" element={<Layout><FilmeDetail /></Layout>} />
        <Route path="/post/:slug" element={<Layout><Post /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
