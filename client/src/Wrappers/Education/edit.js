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

  .file-div {
    margin-top: -1.5rem;
    margin-bottom: 2rem;
  }
  .label {
    text-transform: capitalize;
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
  .form-input {
    margin-bottom: 1rem;
  }
  .form-select {
    width: 100%;
    margin-bottom: 0.5rem;
    background: black;
    color: red;
    text-transform: capitalize;
  }

  .select-box {
    width: 100%;
  }
  .delete-file {
    width: 100%;
    background: black;
    color: red;
    border-color: red;
    margin-bottom: 3rem;
    transition: var(--transition);
  }
  .delte-file:hover {
    background: black;
    color: red;
  }

  .submitFile p {
    text-align: center;
    color: black;
    text-transform: capitalize;
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
      width: 80vw;
      flex-direction: row;
      gap: 0rem 5rem;
    }
    .select-box {
      width: 40vw;
    }
    .delete-file {
      padding: 1rem 0;
      transition: var(--transition);
    }
    .delete-file:hover {
      background: red;
      color: black;
    }
    .form {
      width: 40vw;
    }
  }
`;

export default Wrapper;
