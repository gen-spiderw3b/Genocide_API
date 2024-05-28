import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  /* background: green; */

  .section-center {
    width: 70vw;
    max-width: 1170px;
    margin: 0 auto;
  }

  .article {
    border-radius: 10px;
    background: red;
    margin: 0 auto;
    margin-bottom: 3rem;
    width: auto;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
  header {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .article-desc {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .game-title {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .num-of-players {
    margin-bottom: 0.5rem;
  }
  .players-name {
    margin-bottom: 0.5rem;
  }
  .goals {
    margin-bottom: 0.5rem;
  }
  .desc {
    margin-bottom: 0.5rem;
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
  .btn {
    width: 75%;
    margin-bottom: 0.5rem;
    color: red;
    background: black;
  }

  /* 
  ================
  Hide Full Games
  ================
  */
  .hide-full-game {
    display: none;
  }
`;

export default Wrapper;
