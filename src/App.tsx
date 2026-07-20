import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Atuacao from './pages/Atuacao'
import Filmografia from './pages/Filmografia'
import FilmeDetail from './pages/FilmeDetail'
import Reel from './pages/Reel'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atuacao" element={<Atuacao />} />
        <Route path="/filmografia" element={<Filmografia />} />
        <Route path="/filmografia/:slug" element={<FilmeDetail />} />
        <Route path="/reel" element={<Reel />} />
      </Routes>
    </Layout>
  )
}
