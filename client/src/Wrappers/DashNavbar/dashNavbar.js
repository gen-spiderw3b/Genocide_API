import styled from "styled-components";

const Wrapper = styled.nav`
  background: red;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  .logo {
    text-decoration: none;
    color: black;
    text-transform: capitalize;
  }
  .info {
    padding: 0.5rem 0.5rem;
    background: black;
    color: white;
    border-radius: 10px;
  }
  .info:hover {
    background: grey;
    color: red;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
  }
`;

export default Wrapper;
