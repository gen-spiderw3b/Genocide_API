import styled from "styled-components";

const Wrapper = styled.nav`
  width: 100%;
  /* Header */
  .nav-center {
    height: 3rem;
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1.8rem;
  }
  .login {
    text-decoration: none;
    font-size: 1.5rem;
    color: red;
    text-transform: capitalize;
    margin-right: 5rem;
  }
  .login:hover {
    color: grey;
  }
  .header {
    color: red;
  }
  a {
    text-decoration: none;
    color: red;
  }
  h2 {
    text-transform: capitalize;
  }
  /* End Of Header */
`;

export default Wrapper;
