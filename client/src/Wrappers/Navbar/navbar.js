import styled from "styled-components";

const Wrapper = styled.nav`
  /* Nav */
  #nav-container {
    height: 5rem;
    background: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
    padding: 0.2rem 0.8rem;
    margin-right: 0.5rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    text-decoration: none;
    background: black;
    color: red;
    border: transparent;
    border-radius: 10px;
  }
  a:hover {
    color: white;
  }
  @media (min-width: 600px) {
    .header a {
      font-size: 2rem;
    }
    .login a {
      margin-right: 4rem;
      font-size: 1.3rem;
    }
  }
`;

export default Wrapper;
