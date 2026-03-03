import starActive from '@assets/images/star-active.svg';
import starInactive from '@assets/images/star-inactive.svg';
import './style.scss';

export default function Stars({ number }) {
  let stars = [];
  //permet de savoir combien d'etoile a affiché
  for (let index = number; index > 0; index--) {
    stars.push(starActive);
  }
  while (stars.length < 5) {
    stars.push(starInactive);
  }

  return (
    <div className="stars">
      {stars.map((s, index) => (
        <img
          src={s}
          alt="Icon d'étoiles activée/désactivé"
          key={`${s}-${index}`}
          width="25px"
          height="24px"
        />
      ))}
    </div>
  );
}
