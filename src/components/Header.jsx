import { Link } from 'react-router-dom';

export function Header() {
  
  const headerButton = {
    padding: '8px 12px',
    marginRight: '10px',
    backgroundColor: '#ffffff',
    color: '#444444',
    border: '1px solid #444444',
  };
  
  return (
    <header>
      <Link to="/">
        <button style={headerButton}>Портфолио</button>
      </Link>
      <Link to="/layout">
        <button style={headerButton}>Расположение товаров</button>
      </Link>
      <Link to="/dropdown">
        <button style={headerButton}>Выпадающий список</button>
      </Link>
    </header>
  );
}
