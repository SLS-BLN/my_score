import Player from "../components/Player/Player.js";
import AddPlayer from "../components/Player/AddPlayer.js";
import Button from "../components/Button/Button";
import { useState } from "react";

export default function HomePage({ players }) {
  const [isPlaying, setIsPlaying] = useState(true);

  const endGameHandler = () => {
    setIsPlaying(false);
  };

  const displayGame = players.map((player) => {
    return <Player key={player.id} name={player.name} score={player.score} />;
  });

  return (
    <>
      <h2>Game</h2>
      {!isPlaying && <p>Start a new game, enter your name below</p>}
      {isPlaying && displayGame}
      {isPlaying && (
        <Button background={"lightseagreen"} onClick={endGameHandler}>
          end game
        </Button>
      )}
      <AddPlayer />
    </>
  );
}
