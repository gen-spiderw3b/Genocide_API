import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .section-center {
    width: 90vw;
  }
  .article {
    width: 60vw;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
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
  a {
    text-align: center;
    text-decoration: none;
    background: red;
    padding: 0.3rem 2.5rem;
    transition: var(--transition);
  }
  a:hover {
    background: white;
    color: red;
  }
  @media (min-width: 600px) {
    .section-center {
      margin: 0 auto;
    }
    .article {
      width: 40vw;
      margin: 3rem auto;
    }
  }
  @media (min-width: 1000px) {
    .section-center {
      display: grid;
      grid-template-columns: 0.5fr 0.2fr 0.1fr;
    }
    .article {
      width: 20vw;
      margin-right: 10rem;
    }
  }
`;

export default Wrapper;
