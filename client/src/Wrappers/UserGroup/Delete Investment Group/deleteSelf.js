import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .article {
    margin: 10rem auto;
    background: black;
    width: 50vw;
    border-radius: 10px;
  }
  .title {
    padding-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .question {
    text-align: center;
    text-transform: capitalize;
    margin: 0 auto;
    color: white;
    margin-bottom: 3rem;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    padding: 1rem 1rem;
  }
  button {
    font-size: 0.2rem;
  }
  .cancel {
    font-size: 0.6rem;
    margin-right: 1rem;
    padding: 0 1.25rem;
    border-radius: 10px;
    background: black;
    color: red;
    text-transform: capitalize;
  }
  .delete {
    font-size: 0.6rem;
    padding: 0.5rem 1.25rem;
    border-radius: 10px;
    background: black;
    color: red;
    text-transform: capitalize;
  }
  @media (min-width: 900px) {
    .article {
      max-width: 600px;
    }
    .cancel {
      font-size: 1rem;
    }
    .delete {
      font-size: 1rem;
    }
  }
`;

export default Wrapper;
