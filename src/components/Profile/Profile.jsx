import './style.scss';

export default function Profile({ picture, name }) {
  return (
    <div className="profile">
      <h3>{name}</h3>
      <img src={picture} alt="" />
    </div>
  );
}
