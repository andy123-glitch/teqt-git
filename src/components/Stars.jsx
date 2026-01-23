export default function Stars({ number }) {
  let stars = [];
  for (let index = number; index > 0; index--) {
    stars.push('★');
  }
  while (stars.length < 5) {
    stars.push('☆');
  }

  return (
    <div className="stars">
      {stars.map(s => (
        <span>{s}</span>
      ))}
    </div>
  );
}
