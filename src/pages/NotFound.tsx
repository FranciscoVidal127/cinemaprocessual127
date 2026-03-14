import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-inner">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Página não encontrada</h1>
        <p className="not-found-text">O endereço que você acessou não existe ou foi movido.</p>
        <Link to="/" className="not-found-link">← Voltar ao início</Link>
      </div>
    </div>
  );
}
