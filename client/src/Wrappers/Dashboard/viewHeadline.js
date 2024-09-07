import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .section-center {
    margin: 0 auto;
    width: 60vw;
    max-width: 1170px;
  }
  .article {
    margin: 1rem auto;
    padding: 1rem 1.25rem;
    border: 2px solid red;
    border-radius: 10px;
    background: black;
    min-height: 600px;
    max-width: 400px;
  }
  .category {
    text-align: center;
    color: red;
    margin-bottom: 1rem;
  }
  .headline {
    text-align: center;
    color: red;
    margin-bottom: 1rem;
  }
  .desc {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 1rem;
    color: white;
  }
  .desc p {
    color: white;
    text-transform: capitalize;
    line-height: 1.2;
    margin-bottom: 2rem;
  }
  .link {
    color: red;
    text-align: center;
    margin-bottom: 1rem;
  }
  a {
    color: red;
    text-decoration: none;
  }
  @media (min-width: 2000px) {
    .section-center {
      margin: 0;
      width: 70vw;
      max-width: 2000px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
