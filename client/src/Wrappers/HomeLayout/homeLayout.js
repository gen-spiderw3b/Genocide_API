import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  background: black;

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: red;
  }
  .footer h2 {
    color: black;
    text-align: center;
    margin-top: 2rem;
  }
`;

export default Wrapper;
