import { NavLink } from 'react-router-dom';

export default function Card() {
  return (
    <article>
      <NavLink to="/logement/1">
        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
        <h2>Titre de l'announece</h2>
      </NavLink>
    </article>
  );
}
