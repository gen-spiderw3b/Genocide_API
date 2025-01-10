import PropTypes from "prop-types";

const EditDataList = ({ section }) => {
  return (
    <div>
      <div className="title">
        <h3>sections</h3>
      </div>
      <ul>
        <li className="list">{`sections:${section}`}</li>
      </ul>
    </div>
  );
};
EditDataList.propTypes = {
  section: PropTypes.number,
};
export default EditDataList;
