import { NavLink } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function NotFound() {
  return (
    <>
      <div className="main-content NotFound">
        <Header />
        <div className="number-NotFound">404</div>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className="return">Retourner sur la page d’accueil</NavLink>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
