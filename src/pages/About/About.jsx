import Footer from '@layouts/Footer';
import Header from '@layouts/Header';
import './style.scss';

import DropdownButton from '@components/DropdownButton';

function About() {
  return (
    <>
      <Header />
      <div className="about-content ">
        <section className="banner-about"></section>
        <section className="dropdown-button-container">
          <DropdownButton title="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            réqulièrement vérifiées par nos équipes.
          </DropdownButton>
          <DropdownButton title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme,
          </DropdownButton>
          <DropdownButton title="Service">
            La qualité du service est au coeur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance.
          </DropdownButton>
          <DropdownButton title="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nes hôtes que
            pour les voyageurs, chaque logement correspond aux critéres de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, celà permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité doméstique pour nos hôtes.
          </DropdownButton>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
