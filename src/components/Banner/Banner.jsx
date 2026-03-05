import './style.scss';

export default function Banner({ text = '', imgSrc, opacity = 0 }) {
  return (
    <section className="banner">
      <img src={imgSrc} />
      {text !== '' ? <span>{text}</span> : <></>}
      {opacity !== 0 ? (
        <div className="dark" style={{ opacity: opacity }}></div>
      ) : (
        <></>
      )}
    </section>
  );
}
