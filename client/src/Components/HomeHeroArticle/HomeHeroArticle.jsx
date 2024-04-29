import PropTypes from "prop-types";
const HomeHeroArticle = ({ title }) => {
  return (
    <>
      <h2 className="article-title">{title}</h2>
      <div className="title-underline"></div>
      <p className="article-message">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore officia
        delectus autem doloremque ab provident ut, consequuntur adipisci
        repudiandae explicabo ipsa dolores tempora perferendis asperiores iure
        accusantium, necessitatibus non labore!
      </p>
    </>
  );
};

HomeHeroArticle.propTypes = {
  title: PropTypes.string,
};

export default HomeHeroArticle;
