import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .error-msg {
    color: red;
    margin: 15rem auto;
  }
  .section-center {
  }
  .center {
    margin: 0 auto;
    margin-top: 5rem;
    padding-left: 0.3rem;
  }

  .article {
    background: black;
    width: 20rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    border-radius: 10px;
    padding: 1rem 1.5rem;
  }
  .article h3 {
    color: red;
    margin-bottom: 1rem;
  }
  .article h3,
  h5 {
    text-align: center;
    margin-bottom: 1rem;
  }
  a {
    font-size: 1rem;
    color: white;
    transition: var(--transition);
  }
  a:hover {
    color: red;
  }
  .btn-text {
    text-align: center;
    margin: 0 auto;
    padding: 1rem 0;
    color: red;
    background: black;
    font-size: 2rem;
    border-radius: 10px;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .btn-text:hover {
    background: red;
    color: black;
  }
  @media (min-width: 1100px) {
    .article-section {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .article {
      margin: 1rem;
    }
  }
`;

export default Wrapper;
