import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: black;
    width: 90vw;
    height: 95vh;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  header {
    color: red;
    text-transform: uppercase;
    font-size: 2rem;
    margin-top: 5rem;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: darkred;
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: red;
    padding: 1rem 0;
    text-transform: capitalize;
    text-decoration: none;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: white;
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: white;
  }
`;

export default Wrapper;
