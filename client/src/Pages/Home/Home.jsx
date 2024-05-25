import Wrapper from "../../Wrappers/Home/home";
import { useMediaQuery } from "@react-hook/media-query";
import { Navbar } from "../../Components/index";
import {
  HomeHeroImg,
  HeroMessage,
  HomeHeroArticle,
} from "../../Components/index";

const Home = () => {
  const matches = useMediaQuery("only screen and (min-width:800px)");
  return (
    <Wrapper>
      <Navbar header="genocide" register="register" login="login" />
      <div className="hero-section">
        {matches ? <HomeHeroImg className="hero-img" /> : <HeroMessage />}
        <span className="attribution">
          <a href="https://www.vecteezy.com/free-photos" target="_blank">
            Free Stock photos by Vecteezy
          </a>
        </span>
      </div>
      <div className="article-section">
        <div className="title">
          <p className="about-title">
            about<span className="about-span">us</span>
          </p>
        </div>
        <div id="article-container">
          <div className="article">
            <HomeHeroArticle
              title="education"
              message="this organization is huge on education, there are currently over 291 college degrees and we want them all! right now we need students and treasurers for these degrees:
             
            Game Art,
            Game Business & Esports,
            Game Design Undergraduate,
            Game Design Graduate,
            Game Development, Computer Animation
            Digital Arts & Design
            Graphic Design
            Media Design
            User Experience,
            Creative Writing
            Digital Cinematography
            Film
            Film Production
            Show Production
            Audio Production
            Music Production
            Recording Arts
            Computer Science Undergraduate
            Computer Science Graduate
            Cybersecurity
            Information Technology
            Simulation & Visualization
            Web Development
            Business Intelligence
            Digital Marketing Undergraduate
            Digital Marketing Graduate
            Entertainment Business Undergraduate
            Entertainment Business Graduate
            Game Business & Esports
            Innovation & Entrepreneurship
            Music Business. all this is from full sail university there are many more to get and this is called phase one!           
            "
            />
          </div>
          <div className="article">
            <HomeHeroArticle
              title="investments"
              message="In genocide we  invest to start our own business's and we're working towards independence and sustain. We use a hive mind set to accomplish our goals, for example,  we are going to college for game development so it would make sense to own a game studio. We all fund the game studio untill we have one in every location till we all have access to one. Here is a guide to how we do that: {Game-Studio = 1,000,000/USD}, {Organization = 100,000/people}, {1,000,000 / 100,000 = 10/USD}. As you can see, it will only cost 10$/person to build a game studio. We place each studio in or around a two-hour radius for each state that the organization is in, and once each state has one we build more as needed till each person who wants to make games has a studio near them! This is just one example of hundred's  i can make. "
            />
          </div>
          <div className="article">
            <HomeHeroArticle
              title="competition"
              message="A big part of this organization is our competition. There will be 100/people to a team, each team invest $10,000/month, each competition cost will be $1,000/competition. As you can see, each person invest $100/month and the prize money will be split by 1%/person totaling up to 100%! The prize money will be determined by how many teams are competing , {100,000/teams} * ${1,000} = $100,000,000. Since there are 100/people to a team then your cut is $1,000,000! Crazy Right!"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Home;
