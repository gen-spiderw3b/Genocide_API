import styled from "styled-components";

const Wrapper = styled.main`
  position: fixed;
  inset: 0;
  background: green;
  @media (min-width: 800px) {
    display: none;
  }
`;

export default Wrapper;
