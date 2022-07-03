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
  const [players, setPlayers] = useState([dummyData]);

  const handleAddPlayer = (name) => {
    setPlayers([...players, { id: players.length + 1, name, score: 0 }]);
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

  const addPlayer = <AddPlayer currywurst={handleAddPlayer} />;

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
