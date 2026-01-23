import { useRef } from 'react';

export default function DropdownButton({ title, children }) {
  const pRef = useRef(null);
  function handleClick(e) {
    pRef.current.classList.toggle('active');
  }
  return (
    <div className="dropdown-btn">
      <div className='header-dro'>

      </div>
      <h3>{title}</h3>
      <button type="button" onClick={handleClick}>
        gddfg
      </button>
      <p ref={pRef}>{children}</p>
    </div>
  );
}
