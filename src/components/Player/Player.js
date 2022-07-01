import { useState } from "react";
import styled from "styled-components";

export default function Player({ name }) {
  const [score, setScore] = useState(0);
  const increaseNum = () => setScore(score + 1);
  const decreaseNum = () => setScore(score - 1);
  const setZero = () => setScore(0);

  return (
    <>
      <PlayerWrapper>
        <PlayerName>{name}</PlayerName>
        <PlayerScore>
          <Button
            type="button"
            aria-label="Decrease score"
            onClick={decreaseNum}
          >
            -
          </Button>
          <span>{score}</span>
          <Button
            type="button"
            aria-label="Increase score"
            onClick={increaseNum}
          >
            +
          </Button>
        </PlayerScore>
      </PlayerWrapper>
      <ResetButton type="button" aria-label="Reset score" onClick={setZero}>
        Reset scores
      </ResetButton>
    </>
  );
}

const PlayerWrapper = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0.5rem;
`;

const PlayerName = styled.h3`
  font-size: 1.8rem;
  width: 16rem;
  text-align: left;
`;

const Button = styled.button`
  font-size: 1.8rem;
  font-weight: bold;
  background-color: #999;
  color: white;
  width: 3rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px; ;
`;

const ResetButton = styled.button`
  font-size: 1.8rem;
  font-weight: bold;
  background-color: #999;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px; ;
`;

const PlayerScore = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 2rem;
`;
