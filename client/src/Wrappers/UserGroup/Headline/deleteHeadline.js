import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;

  .article {
    max-width: 800px;
    margin: 15rem auto;
    background: black;
    padding: 2rem 2rem;
  }
  h3 {
    text-align: center;
    color: red;
    margin-bottom: 0.5rem;
  }
  h5 {
    text-align: center;
    color: yellow;
    margin-bottom: 0.5rem;
  }
  p {
    text-align: center;
    text-transform: capitalize;
    color: white;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
  }
  .prev-btn,
  .next-btn {
    background: transparent;
    border: transparent;
    color: red;
    font-size: 2rem;
    cursor: pointer;
  }
  .delete-btn {
    text-transform: capitalize;
    padding: 0.3rem 1.125rem;
    color: red;
    border: transparent;
    background: white;
    transition: var(--transition);
    cursor: pointer;
    margin: 0 2rem;
  }
  .delete-btn:hover {
    background: red;
    color: black;
  }
`;

export default Wrapper;
