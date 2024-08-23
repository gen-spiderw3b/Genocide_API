import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .error-msg {
    color: red;
  }
  .section-center {
    width: 80vw;
    margin: 5rem auto;
  }

  .article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: black;
    border-radius: 5px;
    margin: 0 auto;
    width: 40%;
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
  .teamleader {
    display: block;
    background: red;
    color: white;
    text-align: center;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
  }
  .lists {
    display: block;
    background: grey;
    color: black;
    text-align: center;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .useName {
    display: block;
    text-align: center;
    margin-bottom: 1rem;
    background: white;
    color: red;
    padding: 0.5rem 0;
  }
  .update-btn {
    width: 6rem;
    border: none;
    background: white;
    border-radius: 5px;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    color: red;
    text-transform: capitalize;
    font-size: 1rem;
    transition: var(--transition);
  }
  .update-btn:hover {
    background: red;
    color: black;
  }
  .btn {
    text-align: center;
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
    .btns {
      flex-direction: row;
    }
    .update-btn {
      width: auto;
      margin-bottom: 0;
      margin-right: 0.125rem;
      font-size: 1rem;
    }
  }
  @media (min-width: 1170px) {
    .article {
      width: 500px;
    }
  }
`;

export default Wrapper;
