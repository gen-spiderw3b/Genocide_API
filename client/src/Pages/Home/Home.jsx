import Wrapper from "../../Wrappers/Home/home";
import { useMediaQuery } from "@react-hook/media-query";
import { HomeHeroImg, HeroMessage } from "../../Components/index";

const Home = () => {
  const matches = useMediaQuery("only screen and (min-width:800px)");
  return (
    <Wrapper>
      <div className="hero-container">
        {matches ? <HomeHeroImg /> : <HeroMessage />}
      </div>
      <div className="article">3</div>
    </Wrapper>
  );
};
export default Home;
