import Player from "../components/Player/Player.js";
import AddPlayer from "../components/Player/AddPlayer.js";
import Button from "../components/Button/Button";
import { useState } from "react";

const dummyData = {
  id: 11111,
  name: "Player 1",
  score: 14,
};

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [players, setPlayers] = useState([]);

  const handleAddPlayer = (name) => {
    setPlayers([...players, { id: players.length + 1, name, score: 0 }]);
    console.log(players);
  };

  const endGameHandler = () => {
    setIsPlaying(false);
  };

  const displayPlayer = players.map((player) => {
    return <Player key={player.id} name={player.name} score={player.score} />;
  });

  const endGameButton = (
    <Button background={"red"} onClick={endGameHandler}>
      End game
    </Button>
  );

  const addPlayer = <AddPlayer onAddPlayer={handleAddPlayer} />;

  // change state of score in Player.js - find solution
  const setZero = () => "do something to reset the score";

  return (
    <>
      <h2>Game</h2>
      {addPlayer}
      {!isPlaying && <p>Want to play?</p>}
      {displayPlayer}
      {endGameButton}
      <button type="button" aria-label="Reset score" onClick={setZero}>
        Reset scores
      </button>
    </>
  );
}
