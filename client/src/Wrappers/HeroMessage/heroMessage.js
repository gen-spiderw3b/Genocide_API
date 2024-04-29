import styled from "styled-components";

const Wrapper = styled.section`
  /* background: red; */
  width: 100vw;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 5rem;

  .message-article {
    min-height: calc(100vh - 5rem);
    background: red;
  }

  .hero {
    font-size: 1.5rem;
    text-align: center;
    color: black;
    text-transform: capitalize;
    margin-bottom: 5rem;
  }
  .message {
    font-size: 1.5rem;
    text-align: center;
    color: black;
    text-transform: capitalize;
    margin-top: 80%;
  }
  .title-underline {
    background: black;
    margin-top: -4.5rem;
  }
`;

export default Wrapper;
