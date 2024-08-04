import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .section-center {
    width: 80vw;
    margin: 5rem auto;
  }

  .article {
    background: black;
    margin: 0 auto;
    width: 40%;
    height: 10rem;
    position: relative;
    margin-bottom: 4rem;
  }
  .title h2 {
    color: red;
  }
  .members {
    color: red;
    text-align: center;

    margin: 3rem auto;
  }
  a {
    text-decoration: none;
  }
  .btn {
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    cursor: pointer;
    transition: var(--transition);
  }
  .btn:hover {
    background: red;
    color: black;
  }
  @media (min-width: 800px) {
    .article {
      width: 300px;
    }
    .section-center {
      display: grid;
      grid-template-columns: 0.5fr 0.4fr;
      gap: 2rem;
    }
  }
  @media (min-width: 1170px) {
    .article {
      width: 500px;
    }
  }
`;

export default Wrapper;
