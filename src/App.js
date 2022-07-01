import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./pages/HomePage.js";
import HistoryPage from "./pages/HistoryPage.js";
import styled from "styled-components";

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
];

function App() {
  return (
    <>
      <header>
        <h1>Scorekeeper</h1>
      </header>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage players={players} />} />
          <Route path="history" element={<HistoryPage />} />
        </Routes>
      </Main>
      <footer>
        <Navigation />
      </footer>
    </>
  );
}

export default App;

const Main = styled.main`
  display: grid;
  gap: 10px;
  margin-bottom: 4rem;
`;
