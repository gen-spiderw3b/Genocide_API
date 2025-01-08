import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;

  .section-center {
    width: 80vw;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .article {
    margin-top: 2rem;
    background: black;
    border: 5px solid red;
    width: 300px;
    height: 15rem;
    border-radius: 10px;
    margin-bottom: 10rem;
    text-align: center;
  }
  .title {
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
  .title h2 {
    color: white;
  }
  .section-length {
    color: red;
    margin-bottom: 3rem;
  }
  a {
    text-decoration: none;
    text-transform: capitalize;
    color: white;
    transition: var(--transition);
  }
  a:hover {
    color: red;
  }
  @media (min-width: 800px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 1rem;
    }
  }
  @media (min-width: 1170px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem 1rem;
    }
  }
`;

export default Wrapper;
