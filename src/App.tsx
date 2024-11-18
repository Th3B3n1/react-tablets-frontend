import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/Menu';
import TabletekLista from './pages/TabletekLista';
import TabletekFelvetel from './pages/TabletekFelvetel';
import Kezdolap from './pages/Kezdolap';
import TabletekFullCRUD from './pages/TabletekFullCRUD';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/kezdolap" element={<Kezdolap />} />
        <Route path="/tabletek-lista" element={<TabletekLista />} />
        <Route path="/tabletek-felvetel" element={<TabletekFelvetel />} />
        <Route path="/tabletekfullcrud" element={<TabletekFullCRUD />} />
        <Route path="/" element={<Navigate to="/kezdolap" replace />} />
        <Route path="*" element={<Navigate to="/kezdolap" replace />} />
      </Routes>
    </Router>
  );
}

export default App;