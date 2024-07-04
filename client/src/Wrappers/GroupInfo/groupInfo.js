import styled from "styled-components";

const Wrapper = styled.article`
  border-radius: 10px;
  min-height: 30vh;
  background: red;
  .title {
    margin-bottom: 5rem;
  }
  ul li {
    text-align: center;
    color: black;
  }
  li {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }
  p {
    text-transform: capitalize;
    color: yellow;
    text-align: center;
    margin-bottom: 1rem;
  }
  svg {
    margin-left: 1rem;
    font-size: 2rem;
    background-color: black;
    color: red;
    transition: var(--transition);
  }
  svg:hover {
    background: yellow;
    color: blue;
  }
  @media (min-width: 600px) {
    p {
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
`;

export default Wrapper;
