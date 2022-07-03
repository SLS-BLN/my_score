import Player from "../components/Player/Player.js";
import AddPlayer from "../components/Player/AddPlayer.js";
import Button from "../components/Button/Button";
import { useState } from "react";

const players = [
  {
    id: 1,
    name: "Player 2",
    score: 14,
  },
];

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(true);

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

  const addPlayer = <AddPlayer />;

  return (
    <>
      <h2>Game</h2>
      {!isPlaying && <p>Want to play?</p>}
      {!isPlaying && addPlayer}
      {isPlaying && displayPlayer}
      {isPlaying && endGameButton}
    </>
  );
}
