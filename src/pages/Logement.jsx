import DropdownButton from '../components/DropdownButton';
import Profile from '../components/Profile';
import Stars from '../components/Stars';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

function Logement(params) {
  return (
    <>
      <div className="main-content logement-page">
        <Header />
        <img
          className="cover"
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
        />
        <div className="first-row">
          <section className="headings">
            <h1>Cozy loft on the Canal Saint-Martin</h1>
            <h2>Paris, Île-de-France</h2>
          </section>
          <Profile
            name={'Della Case'}
            picture={
              'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg'
            }
          />
        </div>
        <div className="logement">
          <div className="tags">
            <div className="utag">cozy</div>
            <div className="utag">Canal</div>
            <div className="utag">Paris 10</div>
          </div>
          <Stars number={3} />
          <DropdownButton title="Description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et
            reiciendis, corrupti possimus assumenda ratione dignissimos odio
            obcaecati deserunt perferendis id tempore? Assumenda explicabo id
            doloribus totam illo aliquid veniam.
          </DropdownButton>
          <DropdownButton title="Équipements">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et
            reiciendis, corrupti possimus assumenda ratione dignissimos odio
            obcaecati deserunt perferendis id tempore? Assumenda explicabo id
            doloribus totam illo aliquid veniam.
          </DropdownButton>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Logement;
