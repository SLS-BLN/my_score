import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">Play</StyledLink>
      <StyledLink to="/history">History</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(NavLink)`
  display: grid;
  flex: 1;
  place-items: center;
  background-color: aliceblue;
  color: black;
  border: none;
  text-decoration: none;
  padding: 1.5rem;

  &.active {
    background-color: darkblue;
    color: white;
  }
  &:hover {
    background-color: lightblue;
  }
`;
