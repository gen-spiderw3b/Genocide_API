import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;

  .form {
    margin: 10rem auto;
    background: black;
  }
  header {
    margin-top: 0.5rem;
  }
  .header h3 {
    color: red;
    text-align: center;
  }
  label {
    font-size: 1.2rem;
    color: red;
    margin-bottom: 1.2rem;
    margin-top: 1rem;
  }
  input {
    background: white;
  }
  input::placeholder {
    color: red;
  }
  .btn {
    margin-top: 2rem;
  }
`;

export default Wrapper;
