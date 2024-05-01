import styled from "styled-components";

const Wrapper = styled.main`
  background: red;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 70vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  .attribution {
    font-size: 0.6rem;
    margin-top: -2rem;
    margin-bottom: 3rem;
  }
  .attribution:hover {
    color: white;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: black;
  }
  a {
    text-decoration: none;
    color: blue;
    text-transform: capitalize;
  }
  a:hover {
    color: white;
  }
  /* Medai Queries */
  @media (min-width: 800px) {
    .attribution {
      font-size: 1rem;
    }
  }
  /* End Of Medai Queries */
`;

export default Wrapper;
