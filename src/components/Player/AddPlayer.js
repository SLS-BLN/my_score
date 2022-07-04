import { useState } from "react";

export default function AddPlayer({ onAddPlayer }) {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlayer(name);
    console.log(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What's your name?
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Add Player</button>
    </form>
  );
}
