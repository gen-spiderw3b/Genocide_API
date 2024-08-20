import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .delete-msg {
    color: red;
    margin: 10rem auto;
  }
  .title h3 {
    color: black;
  }
  span {
    color: red;
  }
  .title-underline {
    width: 25%;
  }
  .article {
    background: black;
    margin: 15rem auto;
    max-width: 400px;
    border-radius: 10px;
  }

  h4 {
    color: red;
    text-align: center;
    padding-top: 0.5rem;
    margin-bottom: 1rem;
  }
  p {
    color: red;
    text-align: center;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    justify-content: space-between;
  }
  .delete-btn {
    color: red;
    border: transparent;
    border-radius: 5px;
    text-transform: capitalize;
    padding: 0.3rem 1rem;
    margin-bottom: 0.5rem;
    transition: var(--transition);
    cursor: pointer;
  }
  .delete-btn:hover {
    background: red;
    color: black;
  }
  .prev-btn,
  .next-btn {
    font-size: 2rem;
    background: transparent;
    border: transparent;
    margin: 0 1rem;
    color: white;
    transition: var(--transition);
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    color: red;
  }
`;

export default Wrapper;
