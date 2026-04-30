import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ solid = false }) {
  const navigate = useNavigate();
  return (
    <nav className={`navbar ${solid ? 'navbar-solid' : ''}`}>
      <Link to="/" className="nav-logo">FlatEase</Link>
      <div className="nav-menu">
        <Link to="/" className="nav-link active">Home</Link>
        <Link to="/rent-flats" className="nav-link">Rent Flats</Link>
        <Link to="/for-owners" className="nav-link">For Owners</Link>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <div className="nav-actions">
        <button className="nav-btn-login" onClick={() => navigate('/login')}>Login</button>
        <button className="nav-btn-register" onClick={() => navigate('/register')}>Register</button>
      </div>
    </nav>
  );
}
