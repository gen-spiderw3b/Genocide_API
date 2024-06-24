import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .title h2 {
    color: red;
  }
  .title span {
    color: black;
  }
  .title-underline {
    color: red;
    margin-bottom: 3rem;
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
  }
  .article {
    background: black;
    border-radius: 10px;
    padding: 0.7rem 0;
    margin-bottom: 1.5rem;
  }
  .games {
    text-align: center;
    color: red;
    margin-bottom: 0.5rem;
  }
  .groupName {
    color: purple;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .links {
    display: block;
    text-decoration: none;
    color: white;
    text-align: center;
    margin-bottom: 0.8rem;
  }
  .text {
    text-align: center;
    text-transform: capitalize;
    color: white;
    margin-bottom: 0.9rem;
  }
  .btn-block {
    background: none;
    color: red;
    text-transform: capitalize;
    border: none;
    transition: var(--transition);
  }
  .btn-block:hover {
    color: black;
    background: red;
  }
  .member-form {
    text-align: center;
    margin: 0 auto;
  }
  .member-btn {
    font-size: 1.2rem;
    background: transparent;
    border: transparent;
    color: red;
    text-transform: capitalize;
  }

  @media (min-width: 700px) {
    .section-center {
      width: 60vw;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
  @media (min-width: 1100px) {
    .section-center {
      width: 70vw;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 2rem;
    }
  }
`;

export default Wrapper;
