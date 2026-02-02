import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Card({ to, cover, title }) {
  return (
    <article>
      <NavLink to={'/logement/' + to}>
        <img src={cover} />
        <h2>{title}</h2>
      </NavLink>
    </article>
  );
}
