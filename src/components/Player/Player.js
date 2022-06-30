export default function Player({ name, score }) {
  return (
    <section>
      <h1>{name}</h1>
      <button type="button" aria-label="Decrease score">
        -
      </button>
      <span>{score}</span>
      <button type="button" aria-label="Increase score">
        +
      </button>
    </section>
  );
}
