import { useEffect, useRef, useState } from 'react';
import arrowLeft from '@assets/images/arrow-left.svg';
import './style.scss';
import arrowRight from '@assets/images/arrow-right.svg';

export default function Carousel({ pictures }) {
  const [img, setImg] = useState(0);
  const iRef = useRef();

  useEffect(() => {
    iRef.current.style = 'transform: translateX(calc(-' + img * 100 + '% )';
  }, [img]);

  // S'il n'y a qu'une image, ne créer pas les flèches
  if (pictures.length < 2) {
    return (
      <div className="carousel">
        <div ref={iRef} className="img-container">
          <img
            src={pictures[0]}
            width="1240px"
            height="415px"
            alt="Imagedu logement"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="carousel">
      <div ref={iRef} className="img-container">
        {pictures.map((picture, index) => (
          <img
            src={picture}
            key={`${index}`}
            fetchPriority={index === 1 ? 'high' : 'low'}
            alt={`Image n ${index} du logement`}
            width="1240px"
            height="415px"
          />
        ))}
      </div>
      <div
        className="arrows left"
        onClick={() => setImg(img - 1 < 0 ? pictures.length - 1 : img - 1)}
      >
        <img src={arrowRight} alt="Fleche gauche" width="47px" height="79px" />
      </div>
      <div
        className="arrows right"
        onClick={() => setImg(img + 1 > pictures.length - 1 ? 0 : img + 1)}
      >
        <img src={arrowLeft} alt="Fleche droite" height="79px" width="47px" />
      </div>
      <span>
        {img + 1} / {pictures.length}
      </span>
    </div>
  );
}
