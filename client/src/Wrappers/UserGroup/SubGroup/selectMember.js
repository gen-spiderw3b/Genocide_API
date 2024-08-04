import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .title-underline {
    width: 30%;
  }
  .section-center {
    margin: 0 auto;
  }
  .article {
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    border-radius: 10px;
  }
  h5 {
    margin-top: 0.8rem;
    color: yellow;
  }
  .info {
    margin-bottom: 1rem;
  }
  .info p {
    color: red;
    text-transform: capitalize;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
  .btn:hover {
    color: black;
    background: red;
  }
  @media (min-width: 1500px) {
    .section-center {
      width: 80vw;
      display: grid;
      grid-template-columns: 0.5fr 0.5fr;
      gap: 1rem;
    }
    .article {
      max-width: 800px;
    }
  }
`;

export default Wrapper;
