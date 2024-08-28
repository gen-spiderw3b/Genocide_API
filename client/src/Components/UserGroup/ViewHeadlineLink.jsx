import PropTypes from "prop-types";

const ViewHeadlineLink = ({ headline }) => {
  if (headline.length === 0) {
    return (
      <div>
        <h2 className="error-msg">no headline links</h2>
      </div>
    );
  }
  return (
    <div className="center">
      <div className="title">
        <h2>headline links</h2>
      </div>
      <div className="article-section">
        {headline.map((item) => {
          const { _id, headline, link } = item;
          return (
            <article key={_id} className="article">
              <h3>{headline}</h3>
              <a href={link} target="_blank">
                <h5>{link}</h5>
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
};
ViewHeadlineLink.propTypes = {
  headline: PropTypes.array,
};
export default ViewHeadlineLink;
