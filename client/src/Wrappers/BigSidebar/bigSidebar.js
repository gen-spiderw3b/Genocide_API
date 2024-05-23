import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: black;
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      font-size: 2rem;
      text-transform: uppercase;
      color: red;
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .sidebar-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .sidebar-sublinks {
      margin-bottom: 1rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
    }
    h2 {
      color: red;
      margin-bottom: 1rem;
    }
    a {
      text-decoration: none;
      color: white;
    }
    svg {
      margin-right: 0.3rem;
      color: red;
    }
    .active {
      color: red;
    }
  }
`;

export default Wrapper;
