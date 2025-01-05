import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .form {
    display: flex;
    flex-direction: column;
  }
  .forms {
    display: flex;
    flex-direction: column;
  }
  .label {
    margin-bottom: 1rem;
  }
  .form-select {
    width: 100%;
    background: black;
    color: red;
    padding: 0.5rem 0;
  }
  .input {
    background: black;
    color: red;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
  }
  .input::placeholder {
    color: white;
  }
  span {
    color: red;
  }
  .btn-block {
    background: black;
    color: red;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
    transition: var(--transition);
  }
  .btn-block:hover {
    background: red;
    color: black;
  }
  .course-submit-message {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export default Wrapper;
