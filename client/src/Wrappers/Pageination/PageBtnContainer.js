import styled from "styled-components";

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;

  .btn-container {
    background: red;
    border-radius: 10px;
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    border-radius: 10px;
    color: black;
    cursor: pointer;
  }
  .active {
    background: black;
    color: red;
  }
  .prev-btn,
  .next-btn {
    background: red;
    color: black;
    border-color: transparent;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    text-transform: capitalize;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: black;
    color: red;
    transition: var(--transition);
  }
  .dots {
    display: grid;
    place-items: center;
    cursor: pointer;
  }
`;

export default Wrapper;
