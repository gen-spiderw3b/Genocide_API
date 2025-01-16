import PropTypes from "prop-types";

const EditDataList = ({ section }) => {
  return (
    <div className="section-div">
      <h3>{`section ${section}`}</h3>
      <div className="title-underline"></div>
    </div>
  );
};
EditDataList.propTypes = {
  section: PropTypes.number,
};
export default EditDataList;
