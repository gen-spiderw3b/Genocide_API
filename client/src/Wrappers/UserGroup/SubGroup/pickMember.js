import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .section-center {
    margin: 0 auto;
    max-width: 1170px;
    width: 80vw;
  }
  .article {
    width: 50%;
    background: black;
    margin: 0 auto;
    margin-bottom: 3rem;
    border-radius: 10px;
  }
  .article p {
    padding: 1rem 0;
    color: red;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 0.8rem;
  }
`;

export default Wrapper;
