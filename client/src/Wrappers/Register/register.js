import styled from "styled-components";

const Wrapper = styled.div`
  height: 110vh;
  margin: auto 0;
  background: whitesmoke;
  header {
    margin-top: 3rem;
  }
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
  .form-select {
    width: 100%;
    padding: 0.5rem 0;
    color: red;
  }
`;

export default Wrapper;
