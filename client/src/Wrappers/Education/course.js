import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 200px;
  .video {
    background: white;
  }
  .section {
    background: white;
  }
  .btn-test {
    background: red;
  }
`;

export default Wrapper;
