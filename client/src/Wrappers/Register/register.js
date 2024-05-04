import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto 0;
  .form {
    background: black;
  }
  .header {
    margin-bottom: 3rem;
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
