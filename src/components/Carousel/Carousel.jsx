import { useEffect, useRef, useState } from 'react';
import arrowLeft from '@assets/images/arrow-left.svg';
import './style.scss';
import arrowRight from '@assets/images/arrow-right.svg';

export default function Carousel({ pictures }) {
  const [img, setImg] = useState(0);
  const iRef = useRef();

  useEffect(() => {
    const position = (iRef.current.style =
      'transform: translateX(calc(-' + img * 100 + '% )');
  }, [img]);

  if (pictures.length < 2) {
    return (
      <div className="carousel">
        <div ref={iRef} className="img">
          {pictures.map((picture, index) => (
            <img src={picture} key={`${index}`} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="carousel">
      <div ref={iRef} className="img-container">
        {pictures.map((picture, index) => (
          <img src={picture} key={`${index}`} />
        ))}
      </div>
      <>
        <div
          className="arrows left"
          onClick={() => setImg(img - 1 < 0 ? pictures.length - 1 : img - 1)}
        >
          <img src={arrowRight} alt="" />
        </div>
        <div
          className="arrows right"
          onClick={() => setImg(img + 1 > pictures.length - 1 ? 0 : img + 1)}
        >
          <img src={arrowLeft} alt="" />
        </div>
        <span>
          {img + 1} / {pictures.length}
        </span>
      </>
    </div>
  );
}
