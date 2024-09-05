import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  background: black;
  .article {
    background: black;
    padding: 0.5rem 1rem;
    height: 50vh;
  }
  .question {
    margin: 5rem auto;

    text-align: center;
    line-height: 1.3;
    color: white;
    text-transform: capitalize;
    margin-bottom: 5rem;
  }
  .list-container {
    width: 80vw;
    max-width: 800px;
    margin: 0 auto;
  }
  ol li {
    list-style-type: upper-roman;
    color: red;
    text-align: center;
  }
  li {
    margin-left: 2rem;
    margin-bottom: 5rem;
  }
  .btn-container {
    display: flex;
    justify-content: space-around;
  }
  .cancel,
  .delete {
    padding: 0.5rem 1rem;
    background: red;
    color: white;
    border-color: white;
    transition: var(--transition);
  }
  .cancel:hover,
  .delete:hover {
    background: black;
    color: red;
  }
  @media (min-width: 1000px) {
    .article {
      height: 100vh;
    }
  }
`;

export default Wrapper;
