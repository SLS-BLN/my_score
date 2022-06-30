import Player from "./Player";

const examplePlayer = {
  name: "Player 1",
  score: 0,
};

export default {
  title: "Player",
  component: Player,
};

export const Default = () => (
  <Player name={examplePlayer.name} score={examplePlayer.score} />
);
