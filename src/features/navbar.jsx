import { Link} from 'react-router-dom';
import AnimalLogo from "./../features/AnimalLogo"

export default function Navbar() {
  return (
    <nav className="nav">
      <AnimalLogo className="logo"/>
      <ul className="nav-list">
        <li className="link">Home</li>
        <li className="link">About</li>
        <li className="link">Services</li>
        <li className="link">Contact</li>
        <Link className="link" to="/signup"> SignUp</Link>
        <li className="link">Login</li>
      </ul>
    </nav>
  );
}

