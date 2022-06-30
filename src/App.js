import Player from "./components/Player/Player.js";
import Button from "./components/Button/Button.js";
import History from "./components/History/History.js";
import { initialPreviousGames } from "./historyDB.js";
import { Route, Routes } from "react-router-dom";

const players = [
  {
    name: "John",
    score: 15,
    id: "1",
  },
  {
    name: "Jane",
    score: 15,
    id: "2",
  },
  {
    name: "Jim",
    score: 15,
    id: "3",
  },
];

function App() {
  return (
    <>
      <heading>
        <h1>Game</h1>
      </heading>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Game</h2>
                {players.map((player) => {
                  return (
                    <Player
                      key={player.id}
                      name={player.name}
                      score={player.score}
                    />
                  );
                })}
                <Button background={"lightseagreen"}>end game</Button>
              </>
            }
          />
          <Route
            path="/history"
            element={
              <>
                <h2>Previous Games</h2>
                {initialPreviousGames.map((game) => {
                  return <History key={game.id} game={game} />;
                })}
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
