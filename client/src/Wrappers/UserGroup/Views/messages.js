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
    background: black;
    padding: 0.2rem 0.8rem;
    border-radius: 10px;
    cursor: pointer;
  }
  .link-btn a {
    color: green;
  }
  .link-btn a:hover {
    color: red;
  }

  .delete {
    background: black;
    color: green;
    padding: 0.2rem 0.8rem;
    border-radius: 10px;
    cursor: pointer;
  }
  .delete:hover {
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
    .delete {
      width: 100%;
    }
  }
`;

export default Wrapper;
