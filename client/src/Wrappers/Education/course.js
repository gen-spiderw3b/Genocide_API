import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  .video-container {
    width: 100%;
    height: 20rem;
  }
  .video-file {
    width: 100%;
    height: 100%;
  }
  .section {
    min-height: 100vh;
  }
  .list-container {
    background: black;
  }
  .course-list {
    visibility: hidden;
  }
  .list {
    margin-bottom: 1rem;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: linear;
  }
  .show-list {
    visibility: visible;
  }
  .list:hover {
    background: white;
  }
  svg {
    font-size: 2rem;
    color: red;
    border-radius: 5px;
    border-color: transparent;
    transition: linear;
  }
  svg:hover {
    color: black;
  }
  .icon {
    background: transparent;
    border: transparent;
    padding-right: 1rem;
  }
  .title {
    color: red;
    padding-left: 1rem;
    text-transform: capitalize;
  }

  .btn-block {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-block,
  svg {
    font-size: 1.2rem;
  }
  @media (min-width: 1700px) {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 0 2rem;
    .video-container {
      width: 100%;
      height: 50%;
    }
    .video-file {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Wrapper;
