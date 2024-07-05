import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .total-groups {
    margin-bottom: 3rem;
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
  }
  .hide-article {
    display: none;
  }
  .article {
    margin: 0 auto;
    background: black;
    margin-bottom: 3rem;
    border-radius: 10px;
  }
  .games {
    color: red;
    text-align: center;
    padding-top: 0.25rem;
    margin-bottom: 0.8rem;
  }
  .groupName {
    text-align: center;
    color: yellow;
    margin-bottom: 0.8rem;
  }
  .players {
    text-align: center;
    color: green;
    margin-bottom: 0.8rem;
  }
  .goals {
    text-align: center;
    color: blue;
    margin-bottom: 0.5rem;
  }
  .discord {
    text-align: center;
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: red;
    cursor: pointer;
  }
  .desc {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 15em;
  }
  .desc p {
    word-wrap: break-word;
    color: white;
    line-height: 1;
    text-transform: capitalize;
    letter-spacing: 0.2rem;
  }
  .btn-container {
    display: grid;
    place-items: center;
    margin-bottom: 2rem;
    background: transparent;
  }
  .btn {
    color: black;
    border: transparent;
    background: red;
    cursor: pointer;
    transition: var(--transition);
  }
  .btn:hover {
    color: red;
    background: none;
    box-shadow: none;
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
