import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./pages/HomePage.js";
import HistoryPage from "./pages/HistoryPage.js";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header>
        <h1>Scorekeeper</h1>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="history" element={<HistoryPage />} />
        </Routes>
      </Main>
      <Footer>
        <Navigation />
      </Footer>
    </>
  );
}

export default App;

const Main = styled.main`
  display: grid;
  gap: 1rem;
  margin: 3rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
`;
