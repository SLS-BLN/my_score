import History from "../components/History/History";
import { initialPreviousGames } from "../historyDB";

export default function HistoryPage() {
  return (
    <>
      <h2>Previous Games</h2>
      {initialPreviousGames.map((game) => {
        return <History key={game.id} game={game} />;
      })}
    </>
  );
}
