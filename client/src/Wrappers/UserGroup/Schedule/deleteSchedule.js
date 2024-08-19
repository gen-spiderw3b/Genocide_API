import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .title,
  h2 {
    color: black;
  }
  span {
    color: red;
    margin-left: 1rem;
  }
  .title-underline {
    width: 25%;
  }
  .article {
    max-width: 500px;
    background: black;
    margin: 20rem auto;
    border-radius: 10px;
  }
  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 0.8rem;
    color: white;
  }
  p {
    text-align: center;
    color: red;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .btn-container {
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .delete-btn {
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    background: red;
    color: white;
    border-radius: 10px;
    border: transparent;
    cursor: pointer;
  }
  .delete-btn:hover {
    background: white;
    color: red;
  }
  .prev-btn,
  .next-btn {
    font-size: 2rem;
    background: transparent;
    border: transparent;
    color: red;
    padding: 0 1rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .prev-btn :hover {
    color: white;
  }
  .next-btn :hover {
    color: white;
  }
`;

export default Wrapper;
