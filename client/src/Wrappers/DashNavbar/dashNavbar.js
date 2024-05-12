import styled from "styled-components";

const Wrapper = styled.nav`
  height: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background: red;
  .column-one {
    display: flex;
    align-items: center;
  }
  .column-two {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .column-three {
    display: flex;
    align-items: center;
  }
  .column-four {
    display: flex;
    align-items: center;
  }

  .open-btn {
    border: transparent;
    background: transparent;
    font-size: 1.5rem;
    transition: var(--transition);
  }
  .open-btn:hover {
    transform: rotate(90deg);
  }
  .logout-btn {
    height: 1.2rem;
    width: 6rem;
    padding: 0.2rem 0.5rem;
    background: black;
    color: red;
  }
  .logo {
    margin-left: 0.2rem;
  }
  a:link,
  a:visited {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: white;
  }
  .version-btn {
    background: transparent;
    border: transparent;
    text-align: center;
    text-transform: uppercase;
    transition: var(--transition);
  }
  .version-btn:hover {
    color: white;
  }

  @media (min-width: 768px) {
    .column-two {
      justify-content: end;
    }
    .column-four {
      justify-content: end;
    }
    .version-btn {
      margin-right: 5.5rem;
    }
    .logout-btn {
      margin-right: 4rem;
    }
  }
`;

export default Wrapper;
