import PropTypes from "prop-types";
const HomeHeroArticle = ({ title, message }) => {
  return (
    <>
      <h2 className="article-title">{title}</h2>
      <div className="title-underline"></div>
      <p className="article-message">{message}</p>
    </>
  );
};

HomeHeroArticle.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

export default HomeHeroArticle;
