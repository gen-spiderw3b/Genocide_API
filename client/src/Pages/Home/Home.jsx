import Wrapper from "../../Wrappers/Home/home";
import { useMediaQuery } from "@react-hook/media-query";
import {
  HomeHeroImg,
  HeroMessage,
  HomeHeroArticle,
} from "../../Components/index";

const Home = () => {
  const matches = useMediaQuery("only screen and (min-width:800px)");
  return (
    <Wrapper>
      <div className="hero-container">
        {matches ? <HomeHeroImg /> : <HeroMessage />}
      </div>
      <div className="article-section">
        <div className="title">
          <p className="about-title">
            about<span className="about-span">us</span>
          </p>
        </div>
        <div className="article">
          <HomeHeroArticle title="education" />
        </div>
        <div className="article">
          <HomeHeroArticle title="investments" />
        </div>
        <div className="article">
          <HomeHeroArticle title="competition" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Home;
