import styled from "styled-components";

const Wrapper = styled.main`
  /* display: grid;
  place-items: center; */
  min-height: 110vh;
  background: black;
  .warning {
    background: red;
    margin-bottom: 3rem;
  }

  .warning h2 {
    text-align: center;
    color: black;
    letter-spacing: 0.4rem;
    margin-bottom: 0.8rem;
  }
  ul li {
    text-decoration: none;
    color: black;
    text-transform: capitalize;
  }
  li {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
  header {
    color: red;
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 10rem;
  }
  .form {
    margin: 0 auto;
    margin-top: -5rem;
    display: flex;
    flex-direction: column;
    max-width: 60vw;
    min-width: 250px;
    border: 1px solid red;
  }
  label {
    text-align: center;
    color: red;
    margin-bottom: 1rem;
  }
  .form-input {
    background: red;
    margin-bottom: 1rem;
  }
  .form-input::placeholder {
    color: black;
  }
  .form-select {
    padding: 0.8rem 0;
    width: 100%;
    background: black;
    color: red;
  }
  .text-area {
    height: 5rem;
    margin-bottom: 1rem;
  }
  .btn-block {
    background: red;
    border: transparent;
    padding: 1.1rem 0;
    transition: var(--transition);
  }
  .btn-block:hover {
    background: black;
    color: red;
  }
  @media (min-width: 800px) {
    header {
      font-size: 3rem;
    }
    .warning {
      text-align: center;
    }
  }
`;

export default Wrapper;
