import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .form {
    background: black;
  }
  .form-input::placeholder {
    color: red;
  }
  .form-label {
    color: red;
    margin: 1rem 0;
  }
  .desc {
    width: 100%;
    height: 10rem;
    margin-bottom: 1rem;
  }
  .desc::placeholder {
    color: red;
  }
  .btn {
    background: red;
  }
  .btn:hover {
    color: black;
  }
  .cancel {
    background: red;
    color: white;
    width: 50%;
    margin: 0 auto;
    padding: 0.5rem 0;
    transition: var(--transition);
    display: block;
  }
  .cancel:hover {
    color: black;
  }
`;

export default Wrapper;
