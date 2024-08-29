import PropTypes from "prop-types";
const ViewSubgroupLink = ({ subgroup }) => {
  if (subgroup.length === 0) {
    return (
      <div>
        <h2 className="error-msg">no subgroup links</h2>
      </div>
    );
  }
  return (
    <div className="center">
      <div className="title">
        <h2>subgroup links</h2>
      </div>
      <div className="article-section">
        {subgroup.map((item) => {
          const { _id, subgroupName, link } = item;
          return (
            <article key={_id} className="article">
              <h3>{subgroupName}</h3>
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
ViewSubgroupLink.propTypes = {
  subgroup: PropTypes.array,
};
export default ViewSubgroupLink;
