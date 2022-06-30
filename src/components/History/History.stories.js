import History from "./History";

const exampleGame = {
  id: "1",
  players: [
    {
      id: "123",
      name: "John",
      score: 151,
    },
    {
      id: "456",
      name: "Jane",
      score: 152,
    },
    {
      id: "789",
      name: "Jim",
      score: 153,
    },
  ],
};

export default {
  title: "History",
  component: History,
};

export const Default = () => <History game={exampleGame} />;
