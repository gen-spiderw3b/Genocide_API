import styled from "styled-components";

const Wrapper = styled.main`
  background: white;
  min-height: 100vh;
  .war-nav {
    height: 5rem;
    background: grey;
  }
  .nav-center {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px;
  }
  .btn-component {
    border: transparent;
  }
  .create-group {
    background: red;
    text-transform: uppercase;
    font-size: 2rem;
    color: black;
  }
  .browse-group {
    background: black;
    text-transform: uppercase;
    font-size: 2rem;
    color: red;
  }
  .content {
    margin-top: 5rem;
    display: grid;
    place-items: center;
  }
  .form {
    background: black;
  }
  label {
    color: red;
    margin-bottom: 2rem;
  }
  .form-input {
    margin-bottom: 2rem;
  }
  .form-input::placeholder {
    color: red;
    text-transform: capitalize;
  }
  .btn-block {
    background: red;
    color: black;
    border: transparent;
    border-radius: 10px;
    padding: 1rem 0;
  }
`;

export default Wrapper;
