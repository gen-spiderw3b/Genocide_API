import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 2rem;

  .form {
    width: 20rem;
    background: black;
  }
  .form-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .form-title {
    color: red;
    margin-bottom: 1rem;
  }
  .form-label {
    color: red;
    text-align: center;
  }
  .form-select {
    color: red;
    text-transform: uppercase;
  }

  .btn {
    text-decoration: none;
    color: black;
    transition: var(--transition);
  }

  .btn:hover {
    color: red;
  }
  @media (min-width: 800px) {
    margin-right: 25rem;
  }
  @media (min-width: 1000px) {
    margin-right: 10rem;
    .form {
      width: 30rem;
    }
  }
  @media (min-width: 1200px) {
    margin-right: 20rem;
    .form {
      width: 40rem;
    }
  }
`;

export default Wrapper;
