import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;

  .nav {
    background: black;
    display: flex;
    align-items: center;
    width: 100%;
    height: 5rem;
    margin-bottom: 3rem;
  }
  .link {
    color: red;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    margin-right: 2rem;
    padding: 0 1.25rem;
    cursor: pointer;
  }
  .link:hover {
    color: white;
  }
`;

export default Wrapper;
