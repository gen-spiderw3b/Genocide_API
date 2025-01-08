import PropTypes from "prop-types";
import { FaPlayCircle } from "react-icons/fa";
const CourseFiles = ({ files, videoFunc }) => {
  return (
    <div>
      <ul className="list-container">
        {files.map((item) => {
          const { _id, title, src } = item;
          return (
            <li key={_id} className="list">
              <p className="title">{title}</p>
              <button
                type="button"
                className="icon"
                onClick={() => videoFunc(src)}
              >
                <FaPlayCircle />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
CourseFiles.propTypes = {
  files: PropTypes.array,
  videoFunc: PropTypes.func,
};
export default CourseFiles;
