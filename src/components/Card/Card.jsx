import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Card({ to, cover, title }) {
  return (
    <article>
      <NavLink to={'/logement/' + to}>
        <img
          src={cover}
          alt="Photo de l'interieur de l'appartement"
          width="340px"
          height="340px"
        />
        <h2>{title}</h2>
      </NavLink>
    </article>
  );
}
