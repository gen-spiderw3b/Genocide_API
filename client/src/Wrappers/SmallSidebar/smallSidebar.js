import styled from "styled-components";

const Wrapper = styled.aside`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    /* toggle */
    opacity: 0;
    visibility: hidden;
  }
  .show-sidebar {
    opacity: 1;
    visibility: visible;
    transition-property: opacity;
    transition-duration: 1s;
  }
  .sidebar-container {
    padding: 4rem 2rem;
    position: relative;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: red;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  article {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1rem;
    color: red;
  }
  .sidebar-sublinks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.5rem;
  }
  .sidebar-sublinks a {
    display: block;
    color: red;
    text-transform: capitalize;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  svg {
    color: red;
  }

  @media (min-width: 992px) {
    display: none;
  }

  .active {
    color: white;
  }
`;

export default Wrapper;
