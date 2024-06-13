import styled from "styled-components";

const Wrapper = styled.main`
  position: fixed;
  background: black;
  inset: 0;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;
  }
  .title h2 {
    margin-left: 35%;
  }
  .btn-close {
    background: transparent;
    border: transparent;
    font-size: 1.6rem;
  }
  svg {
    color: red;
  }
  .people {
    margin: 0 auto;
    width: 70vw;
    border: 1px solid red;
  }
  .btn-people {
    width: 10rem;
    margin-bottom: 1.2rem;
    background: transparent;
    border: transparent;
    color: red;
    text-transform: capitalize;
    font-size: 1.5rem;
    transition: var(--transition);
  }
  .btn-people:hover {
    color: white;
  }
`;

export default Wrapper;
