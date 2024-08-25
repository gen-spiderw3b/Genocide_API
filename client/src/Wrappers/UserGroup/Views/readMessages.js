import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  .article {
    width: 50%;
    margin: 5rem auto;
    background: black;
    border-radius: 10px;
    padding: 1rem 2rem;
  }
  .article p {
    color: white;
    text-transform: capitalize;
    text-align: center;
    margin: 0 auto;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
  }
  .back,
  .reply {
    border: none;
    background: black;
    color: red;
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    border-radius: 10px;
    transition: var(--transition);
  }
  .back:hover,
  .reply:hover {
    background: red;
    color: black;
  }
`;

export default Wrapper;
