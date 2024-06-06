import styled from "styled-components";

const Wrapper = styled.div`
  .form {
    width: 15rem;
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
  }
  .form-select {
    color: red;
  }
  .btn {
    text-decoration: none;
    color: black;
    transition: var(--transition);
  }
  .btn:hover {
    color: red;
  }
  @media (min-width: 600px) {
    .form {
      width: 40vw;
    }
  }
`;

export default Wrapper;
