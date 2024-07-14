import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 50vh;
  .form {
    background: black;
  }
  .title {
    color: red;
    margin-bottom: 3rem;
  }
  .form-label {
    color: red;
    margin-bottom: 2rem;
  }
  .form-input {
    color: red;
    margin-bottom: 2rem;
  }
  .link-container {
    width: 50vw;
    margin: 0 auto;
  }
  a {
    text-align: center;
    text-decoration: none;
    transition: var(--transition);
    cursor: pointer;
  }
  a:hover {
    color: red;
  }
  @media (min-width: 1200px) {
    .link-container {
      width: 35vw;
    }
  }
`;

export default Wrapper;
