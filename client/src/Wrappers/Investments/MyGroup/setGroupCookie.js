import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .section-center {
    margin: 0 auto;
    margin-top: 10rem;
  }
  .title h3 {
    color: red;
  }
  .form {
    background: black;
  }
  .form-label {
    color: red;
  }
  .form-input {
    background: white;
  }
  .form-input,
  ::placeholder {
    color: red;
  }
  .btn {
    background: red;
  }
`;

export default Wrapper;
