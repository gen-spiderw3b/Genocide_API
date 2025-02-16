import PropTypes from "prop-types";
import { FaPlayCircle } from "react-icons/fa";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
const CourseFiles = ({ files, videoFunc }) => {
  const sendDisk = async (e) => {
    try {
      await customFetch
        .post(
          "/video",
          { path: e.target.dataset.src },
          { responseType: "blob" }
        )
        .then((response) => {
          const blobData = response.data;
          const url = URL.createObjectURL(blobData);
          videoFunc(url);
        });
      return;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div>
      <ul className="list-container">
        {files.map((item) => {
          const { _id, title, src } = item;
          return (
            <li key={_id} className="list">
              <p className="title">{title}</p>
              <button type="button" className="icon" onClick={sendDisk}>
                <FaPlayCircle data-src={src} />
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
