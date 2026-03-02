import { NavLink } from 'react-router-dom';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import './style.scss';

function NotFound() {
  return (
    <>
      <Header />
      <main className="NotFound-content" role="main">
        <div className="number-NotFound">404</div>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className="return">
          Retourner sur la page d’accueil
        </NavLink>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
