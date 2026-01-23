import { useRef } from 'react';

export default function DropdownButton({ title, children }) {
  const pRef = useRef(null);
  function handleClick(e) {
    pRef.current.classList.toggle('active');

    e.target.style.rotate =
      e.target.style.rotate === '270deg' ? '90deg' : '270deg';
  }
  return (
    <div className="dropdown-btn">
      <div className="header">
        <h3>{title}</h3>
        <button type="button" onClick={handleClick}>
          ➤
        </button>
      </div>
      <p ref={pRef}>{children}</p>
    </div>
  );
}
