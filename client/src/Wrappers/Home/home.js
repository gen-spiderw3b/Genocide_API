import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  background: black;
  /* img */
  .hero-section {
    height: calc(100vh - 5rem);
  }
  .attribution {
    visibility: hidden;
  }
  .attribution a:hover {
    color: white;
  }

  .hero-img {
    width: 100vw;
    display: block;
    background-repeat: no-repeat;
    object-fit: cover;
  }

  /* Article */
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
    margin: 0 auto;
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
    margin: 0 auto;
    line-height: 1.5;
    color: black;
    text-transform: capitalize;
  }
  /* End Of Article */
  /* Media Queries */
  @media (min-width: 800px) {
    /* img */
    .hero-section {
      height: calc(90vh - 5rem);
    }
    .attribution {
      visibility: visible;
    }
  }
  @media (min-width: 900px) {
    /* img */
    .hero-section {
      height: calc(90vh - 5rem);
    }
  }
  @media (min-width: 1170px) {
    /* img */
    .hero-section {
      height: calc(100vh - 5rem);
    }
  }
  @media (min-width: 1200px) {
    /* img */
    .article {
      width: auto;
    }
    #article-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1300px) {
    /* img */
    .hero-section {
      height: calc(120vh - 5rem);
    }
  }
  @media (min-width: 1400px) {
    /* img */
    .hero-section {
      height: calc(140vh - 5rem);
    }
  }
  /* End Of Media Queries */
`;

export default Wrapper;
