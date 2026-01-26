import { useParams } from 'react-router-dom';
import DropdownButton from '../components/DropdownButton';
import Profile from '../components/Profile';
import Stars from '../components/Stars';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import datas from '../../data/data.json';

function Logement() {
  const { id } = useParams();

  const find = datas.find((data) => data.id === id);
  if (find === undefined) window.location = '/';

  const {
    title,
    pictures,
    host,
    description,
    rating,
    location,
    equipments,
    tags,
  } = find;
  return (
    <>
      <div className="main-content logement-page">
        <Header />
        <img className="cover" src={pictures[0]} />
        <div className="first-row">
          <section className="headings">
            <h1>{title}</h1>
            <h2>{location}</h2>
          </section>
          <Profile name={host.name} picture={host.picture} />
        </div>
        <div className="logement">
          <div className="tags">
            {tags.map((tag,index) => (
              <div className="utag" key={`${index}-${tag}`}>{tag}</div>
            ))}
          </div>
          <Stars number={rating} />
          <DropdownButton title="Description">{description}</DropdownButton>
          <DropdownButton title="Équipements">
            {equipments.map((equipment,index) => (
              <div key={`${index}-${equipment}`}>- {equipment}</div>
            ))}
          </DropdownButton>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Logement;
