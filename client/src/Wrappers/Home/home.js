import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  background: black;
  /* img */
  .hero-container {
    height: calc(100vh - 5rem);
    background: white;
  }

  /* article */
  .article {
    height: 100vh;
  }
`;

export default Wrapper;
