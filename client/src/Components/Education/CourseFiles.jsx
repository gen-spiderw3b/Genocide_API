import PropTypes from "prop-types";
import { FaRegPlayCircle } from "react-icons/fa";
const CourseFiles = ({ files, videoFunc }) => {
  return (
    <div>
      <ul>
        {files.map((item) => {
          const { _id, title, src } = item;
          return (
            <li key={_id}>
              <p>{title}</p>
              <button type="button" onClick={() => videoFunc(src)}>
                <FaRegPlayCircle />
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
