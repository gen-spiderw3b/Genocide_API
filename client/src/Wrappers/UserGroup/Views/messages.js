import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .error-msg {
    color: red;
    margin: 10rem auto;
  }
  tr:nth-child(odd) {
    background: black;
    color: red;
    cursor: pointer;
  }
  tr:nth-child(even) {
    background: grey;
    cursor: pointer;
  }
  tr:hover {
    background: white;
  }

  .title-underline {
    width: 25%;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    background: red;
    color: black;
    padding: 0.5rem 0;
    text-transform: upperCase;
  }

  td {
    padding: 0.8rem 0;
    text-align: center;
    text-transform: capitalize;
  }
  .link-btn {
    color: white;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    border-radius: 5px;
    transition: var(--transition);
    cursor: pointer;
  }
  .link-btn:hover {
    color: red;
  }
  .btn {
    border-radius: 5px;
    background: red;
    padding: 0 1.25rem;
    color: black;
    font-size: 1rem;
    box-shadow: none;
    transition: var(--transition);
    cursor: pointer;
  }
  .btn:hover {
    background: black;
    color: red;
  }
  @media (max-width: 600px) {
    th {
      display: none;
    }
    td {
      display: grid;
      color: white;
      text-align: center;
      text-transform: capitalize;
      grid-template-columns: 15ch auto;
      padding: 0.5rem 1rem;
      font-weight: 700;
    }
    td::before {
      content: attr(data-cell) ":";
      color: red;
      text-transform: uppercase;
      font-weight: 600;
    }
    .link-btn {
      background: red;
      color: black;
      width: 100px;
      margin: 0 auto;
      font-size: 1rem;
      font-weight: 500;
    }
    .btn {
      max-width: 100px;
      min-width: 100px;
      margin: 0 auto;
      color: black;
    }
  }
  @media (min-width: 600px) {
    .btn {
      margin-right: 1rem;
    }
  }
  @media (min-width: 1000px) {
    .link-btn {
      padding: 0 0.1rem;
    }
  }
`;

export default Wrapper;
