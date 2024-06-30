import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5.5fr;
  .sidebar {
    border: 1px solid red;
    min-height: 100vh;
    width: 5rem;
  }
  .main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  @media (min-width: 800px) {
    .sidebar {
      width: 10rem;
    }
  }
`;

export default Wrapper;
