import PropTypes from "prop-types";
import Img from "../../../src/public/hero-img-AyzDgOp1.jpg";

const HomeHeroImg = ({ className }) => {
  return <img src={Img} alt="Home-Photo" className={className} />;
};

HomeHeroImg.propTypes = {
  className: PropTypes.string,
};

export default HomeHeroImg;
