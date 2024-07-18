import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .section-center {
    width: 90vw;
  }
  .article {
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    border-radius: 10px;
  }
  h2 {
    padding-top: 0.5rem;
    color: red;
    margin-bottom: 1rem;
  }
  h4 {
    color: red;
    margin-bottom: 1rem;
  }
  .btn {
    background: red;
    padding: 0 2.5rem;
    transition: var(--transition);
  }
  .btn:hover {
    background: white;
    color: red;
  }
  @media (min-width: 600px) {
    .section-center {
      margin: 0 auto;
    }
    .article {
      width: 60vw;
      margin: 3rem auto;
    }
  }
  @media (min-width: 1000px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .article {
      width: 30vw;
      height: 10rem;
    }
  }
`;

export default Wrapper;
