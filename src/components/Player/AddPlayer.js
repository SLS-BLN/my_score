import { useState } from "react";

export default function AddPlayer() {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    // irgendwas mit currywurst ...
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
