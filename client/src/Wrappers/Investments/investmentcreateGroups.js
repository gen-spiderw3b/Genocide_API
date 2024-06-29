import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .form {
    background: black;
  }
  .form-input {
    color: black;
    margin-bottom: 1.5rem;
  }
  .form-label {
    font-size: 1.2rem;
    color: red;
    margin-bottom: 0.8rem;
  }
  .form-select {
    width: 100%;
    background: grey;
  }
  .label {
    font-size: 1.2rem;
    color: red;
    text-transform: capitalize;
  }
  .area {
    margin-top: 1rem;
    width: 100%;
    background: white;
  }
  .btn {
    margin-top: 2rem;
  }
`;

export default Wrapper;
