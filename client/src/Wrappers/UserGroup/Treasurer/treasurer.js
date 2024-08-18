import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .section-center {
    width: 90vw;
    margin: 0 auto;
  }

  table {
    width: 80%;
    margin: 0 auto;
    border-collapse: collapse;
  }
  table,
  caption {
    text-transform: capitalize;
    margin: 2rem 0;
    font-size: 2rem;
    color: red;
  }
  th,
  td {
    text-align: center;
    padding: 1rem;
  }
  th {
    background: black;
    color: red;
    text-transform: capitalize;
  }
  tr:nth-child(odd) {
    text-transform: capitalize;
    background: grey;
    color: black;
    font-size: 0.9rem;
  }
  tr:nth-child(even) {
    text-transform: capitalize;
    background: red;
    color: black;
    font-size: 0.9rem;
  }

  tr:hover {
    background: whitesmoke;
    color: red;
    cursor: pointer;
    font-size: 1rem;
  }
  .btn {
    background: white;
    color: black;
  }
  @media (max-width: 715px) {
    th {
      display: none;
    }
    td {
      display: grid;
      grid-template-columns: 15ch auto;
      padding: 0.5rem 1rem;
    }
    td:first-child {
      padding-top: 2rem;
    }
    td:last-child {
      padding-bottom: 2rem;
    }
    td::before {
      content: attr(data-cell) ": ";
      color: black;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;

export default Wrapper;
