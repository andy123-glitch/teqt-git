import { useNavigate, useParams } from 'react-router-dom';
import DropdownButton from '@components/DropdownButton';
import Profile from '@components/Profile';
import Stars from '@components/Stars';
import Footer from '@layouts/Footer';
import Header from '@layouts/Header';
import datas from '../../../data/data.json';
import Carousel from '@components/Carousel';
import { useEffect } from 'react';
import './style.scss';

function Logement() {
  const { id } = useParams();
  const nav = useNavigate();
  const find = datas.find((data) => data.id === id) ?? null;
  useEffect(() => {
    if (find === null) {
      nav('/404');
      return null;
    }
  }, [nav, find]);

  if (find === null) return null;
  const {
    title,
    host,
    description,
    rating,
    location,
    equipments,
    tags,
    pictures,
  } = find;
  return (
    <>
      <div className="main-content logement-page">
        <Header />
        <Carousel pictures={pictures} />
        <div className="grid">
          <div className="first-col">
            <div className="headings">
              <h1>{title}</h1>
              <h2>{location}</h2>
            </div>
            <div className="tags">
            {tags.map((tag, index) => (
              <div className="utag" key={`${index}-${tag}`}>
                {tag}
              </div>
            ))}
            </div>
          </div>
          <div className="second-col">
            <Profile name={host.name} picture={host.picture} />
            <Stars number={rating} />
          </div>
        </div>
        <div className="logement">
          <DropdownButton title="Description">{description}</DropdownButton>
          <DropdownButton title="Équipements">
            {equipments.map((equipment, index) => (
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
