import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  background: black;
  /* img */
  .hero-container {
    height: calc(100vh - 5rem);
    background: white;
  }

  /* article */
  .article-section {
    height: auto;
  }
  .article-title {
    color: red;
    font-size: 2rem;
    text-transform: capitalize;
    text-align: center;
  }
  .title-underline {
    width: 10rem;
    margin-top: 0.6rem;
    background: black;
    margin-bottom: 2rem;
  }
  .about-title {
    font-size: 4rem;
    margin-bottom: 3rem;
    text-align: center;
    color: red;
    text-transform: uppercase;
  }
  .about-span {
    color: white;
  }
  .article {
    background: white;
    width: 90vw;
    margin: 0 auto;
    margin-bottom: 2rem;
    padding: 1.25rem 1rem;
    border-radius: 5px;
    border: 2px solid red;
  }
  .article-message {
    color: black;
    text-align: center;
  }
`;

export default Wrapper;
