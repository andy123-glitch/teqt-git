import DropdownButton from '../components/DropdownButton';
import Profile from '../components/Profile';
import Stars from '../components/Stars';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

function Logement(params) {
  return (
    <>
      <div className="main-content">
        <Header />
        <main className="logement">
          <img className='cover' src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg" />
          <section className="info">
            <h1>Lorem, ipsum dolor.</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <Profile
              name={'Della Case'}
              picture={
                'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg'
              }
            />
          </section>
          <section className="tags-star">
            <div className="tags">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum illum dolor aperiam cupiditate delectus nobis, enim molestiae, ratione saepe architecto in, pariatur recusandae a sit natus odit explicabo harum!</span>
            </div>
            <Stars number={3} />
          </section>
          <div className="drop-btns">
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
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Logement;
