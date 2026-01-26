import Header from '../layout/Header';
import imgBanner from '../assets/images/background.png';
import Card from '../components/Card';
import Footer from '../layout/Footer';
import datas from '../../data/data.json';

function Home() {
  return (
    <>
      <div className="main-content">
        <Header />
        <main>
          <section className="banner">
            <img
              src={imgBanner}
              alt="Photo d'un paysage avec des montagnes"
              height={223} /*width={1240}*/
            />
            <span>Chez vous, partout et ailleurs</span>
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
