import styled from "styled-components";

const Wrapper = styled.aside`
  min-height: 100vh;

  background: black;

  .title {
    color: red;
    font-size: 0.9rem;
    padding-bottom: 3rem;
  }
  .headline {
    padding: 1rem 0;
  }
  .title-underline {
    background-color: red;
    width: auto;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  ul {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    text-transform: capitalize;
    text-align: center;
    color: red;
    font-size: 0.8rem;
    transition: var(--transition);
    cursor: pointer;
  }
  svg {
    font-size: 1rem;
    color: black;
    display: none;
  }
  @media (min-width: 800px) {
    .title {
      font-size: 1.5rem;
    }
    svg {
      display: initial;
    }
    a {
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.2rem;
    }
  }
`;

export default Wrapper;
