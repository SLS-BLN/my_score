import styled from "styled-components";

export default styled.button`
  color: white;
  background-color: ${(props) => (props.background === "red" ? "red" : "blue")};
  padding: 1rem 2rem;
  border-radius: 5px;
  border: 0.25px solid #999;
`;
