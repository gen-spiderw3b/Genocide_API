import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .change-btn {
    width: 20rem;
    height: 3rem;
    color: red;
    font-size: 1.5rem;
    text-align: center;
    margin: 0 auto;
    background: black;
  }
  .error {
    margin: 10rem auto;
    color: red;
  }

  .section-center {
    width: 60vw;
    margin: 0 auto;
  }

  table {
    width: 60%;
    margin: 0 auto;
    border-collapse: collapse;
  }
  table,
  caption {
    text-transform: capitalize;
    margin: 2rem 0;
    font-size: 2rem;
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

  @media (max-width: 650px) {
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
  @media (min-width: 650px) {
    a {
      color: black;
      cursor: pointer;
    }
    a:hover {
      color: white;
    }
  }
  @media (min-width: 1000px) {
    .error {
      margin-left: 25%;
    }
    table {
      width: 80%;
    }
    tr:nth-child(odd) {
      font-size: 1rem;
    }
    tr:nth-child(even) {
      font-size: 1rem;
    }
    .btn {
      width: 50%;
      margin: 0 auto;
    }
  }
`;

export default Wrapper;
