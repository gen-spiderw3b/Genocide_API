import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;

  span {
    color: red;
  }
  .form {
    width: 50vw;
    background: black;
  }
  label {
    color: red;
  }
  .form-label {
    color: red;
  }
  .form-input {
    background: white;
    color: red;
    margin-bottom: 0.5rem;
  }
  .form-select {
    width: 100%;
    padding: 0.3rem 0;
    color: red;
  }
  h6 {
    color: red;
  }
  .desc {
    width: 100%;
    height: 10rem;
    margin-bottom: 1rem;
  }
  .btn:hover {
    color: red;
    background: black;
  }
`;

export default Wrapper;
