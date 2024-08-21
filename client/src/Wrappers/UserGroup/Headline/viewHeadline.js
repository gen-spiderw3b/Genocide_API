import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .no-news {
    color: red;
    margin: 10rem auto;
  }
  .title h3 {
    color: black;
  }
  span {
    color: red;
  }
  .title-underline {
    width: 25%;
  }
  .section-center {
    max-width: 800px;
  }
  .article {
    background: black;
    width: 20rem;
    padding: 0.5rem 0;
    margin: 2rem auto;
    border: 3px solid red;
    border-radius: 10px;
  }
  .category {
    color: red;
  }
  .article-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .headline h3 {
    color: red;
  }
  .desc p {
    color: white;
    width: 20em;
    padding: 0 1.5rem;
    text-align: center;
    text-transform: capitalize;
  }
  @media (min-width: 1000px) {
    .section-center {
      max-width: 90vw;
      display: grid;
      grid-template-columns: 0.5fr 0.4fr;
      gap: 0 1rem;
    }
  }
  @media (min-width: 1200px) {
    .section-center {
      grid-template-columns: 0.5fr 0.4fr 0.4fr;
    }
  }
`;

export default Wrapper;
