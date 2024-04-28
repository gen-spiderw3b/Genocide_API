import styled from "styled-components";

const Wrapper = styled.nav`
  /* Nav */
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Header */
  .header a {
    padding-left: 0.5rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    text-decoration: none;
    color: black;
  }
  /* Login */
  .login a {
    padding-right: 0.5rem;
    text-transform: capitalize;
    font-size: 1.3rem;
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: white;
  }
  @media (min-width: 600px) {
    .header a {
      font-size: 2rem;
    }
    .login a {
      font-size: 2rem;
    }
  }
`;

export default Wrapper;
