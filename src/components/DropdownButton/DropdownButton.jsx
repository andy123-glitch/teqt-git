import { useRef } from 'react';
import arrow from '@assets/images/arrow.svg';
import './style.scss';

export default function DropdownButton({ title, children }) {
  const pRef = useRef(null);
  function handleClick(e) {
    pRef.current.classList.toggle('active');

    e.target.style.rotate =
      e.target.style.rotate === '180deg' ? '0deg' : '180deg';
  }
  return (
    <div className="dropdown-btn">
      <div className="header">
        <h3>{title}</h3>
        <button type="button" onClick={handleClick}>
          <img src={arrow} alt="" />
        </button>
      </div>
      <div className="children" ref={pRef}>
        {children}
      </div>
    </div>
  );
}
