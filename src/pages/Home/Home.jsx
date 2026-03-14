import Header from '@layouts/Header';
//import imgBanner from '@assets/images/background.png';
import Card from '@components/Card';
import Footer from '@layouts/Footer';
import datas from '../../../data/data.json';
import './style.scss';
import Banner from '@components/Banner/Banner';

import img from '@assets/images/background.png';


function Home() {
  return (
    <>
      <Header />
      <main className="home-content" role="main">
        <Banner
          imgSrc={img}
          text="Chez vous, partout et ailleurs"
          opacity="0.7"
        />
        <section className="container">
          {datas.map(({ id, cover, title }) => (
            <Card to={id} cover={cover} title={title} key={`${id}-${title}`} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
