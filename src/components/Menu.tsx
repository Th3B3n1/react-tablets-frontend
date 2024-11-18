import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="menu">
      <Link to="/kezdolap">Kezdőlap</Link>
      <Link to="/tabletek-lista">Tabletek Lista</Link>
      <Link to="/tabletek-felvetel">Tablet Felvétele</Link>
      <Link to="/tabletekfullcrud">Tabletek FullCRUD</Link>
    </nav>
  );
}

export default Menu;