import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;

  /*
 =======
 IMAGES
========
*/
  .images {
    background: black;
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  .img-container {
    position: relative;
    width: 20rem;
    height: 20rem;
    margin: 0 auto;
  }
  .img {
    position: relative;
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .img-container::before {
    content: "";
    width: 100%;
    height: 100%;
    background: red;
    position: absolute;
    border-radius: 50%;
    top: -0.25rem;
    right: -0.8rem;
  }
  .btn {
    padding: 0.5rem 1.25rem;
  }

  input::file-selector-button {
    color: red;
    background: black;
    margin-right: 1rem;
  }

  /*
 =======
 Profile
========
*/
  .profile {
    background: black;
  }
  .form {
    min-height: 100vh;
    background: red;
  }

  .form-input {
    background: black;
    color: white;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  .form-input::placeholder {
    color: red;
    text-transform: capitalize;
    text-align: center;
  }
  .form-select {
    width: 100%;
    padding: 0.5rem 0;
    background: black;
    color: white;
  }
  .btn {
    background: black;
    border: none;
    color: white;
    padding: 0.5rem 0;
    transition: var(--transition);
  }
  .btn:hover {
    background: black;
    color: red;
  }

  /*
==================
INVESTMENT PROFILE
==================
*/
  .error-msg {
    margin: 10rem auto;
    max-width: 400px;
  }
  .investment-profile {
    min-height: 100vh;
    background: black;
  }
  .investment-article {
    min-height: 100vh;
  }
  .investment-article,
  .title {
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
  h2 {
    color: red;
    text-align: center;
    margin-bottom: 2rem;
  }
  .lists,
  li {
    font-size: 2rem;
    text-align: center;
    color: red;
  }
  .investment-btn-container {
    margin: 0 auto;
    margin-top: -50rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .prev,
  .next {
    background: none;
    border: none;
    font-size: 2rem;
    color: red;
  }
  /*
 =========
 EDUCATION
==========
*/
  .education {
    min-height: 100vh;
    background: black;
  }
  /*
 ===========
 MEDIA QUERY
============
*/
  @media (min-width: 1900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Wrapper;
