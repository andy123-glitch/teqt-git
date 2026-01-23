import logo from '../assets/images/logo-light-mode.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      
        <img
          src={logo}
          alt="Kasa avec une maison a la place du a"
          height="68px"
        />
      
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/informations">A propos</NavLink>
      </nav>
    </header>
  );
}
