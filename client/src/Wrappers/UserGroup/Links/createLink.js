import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .article {
    background: black;
    border-radius: 10px;
    margin: 15rem auto;
  }
  .groupName {
    text-align: center;
    padding: 1rem 0;
    color: red;
  }
  ul li {
    text-align: center;
    color: red;
    margin-right: 1rem;
  }
  .input {
    width: 100%;
    padding: 0.5rem 0;
  }
`;

export default Wrapper;
