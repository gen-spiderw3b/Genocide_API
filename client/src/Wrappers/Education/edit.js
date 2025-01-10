import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .small-container {
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
  }
  .section-center {
    margin: 0 auto;
    margin-top: 5rem;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem 0;
  }
  .title p {
    color: red;
  }
  .list {
    color: red;
  }
  .form {
    width: 60vw;
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
  }

  @media (min-width: 800px) {
    .nav {
      background: black;
      height: 5rem;
    }
    .large-container {
      display: flex;
      justify-content: space-around;
    }
    .btn {
      margin-top: 0.5rem;
      padding: 1.5rem 2rem;
      box-shadow: none;
      transition: var(--transition);
    }
    .btn:hover {
      background: white;
      color: red;
    }
  }
  @media (min-width: 1000px) {
    .section-center {
      width: 60vw;
      flex-direction: row;
      gap: 0rem 5rem;
    }
    .form {
      width: 40vw;
    }
  }
`;

export default Wrapper;
