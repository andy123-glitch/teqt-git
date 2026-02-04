import Header from '@layouts/Header';
//import imgBanner from '@assets/images/background.png';
import Card from '@components/Card';
import Footer from '@layouts/Footer';
import datas from '../../../data/data.json';
import './style.scss';

function Home() {
  return (
    <>
      <div className="main-content">
        <Header />
        <main>
          <section className="banner-home">
            <span>Chez vous, partout et ailleurs</span>
            <div className="sombre"></div>
          </section>
          <section className="container">
            {datas.map(({ id, cover, title }) => (
              <Card
                to={id}
                cover={cover}
                title={title}
                key={`${id}-${title}`}
              />
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
