import PropTypes from "prop-types";

const EditDataFiles = ({ files }) => {
  return (
    <div className="files">
      {files.map((item) => {
        const { _id, title, src } = item;
        return (
          <div key={_id}>
            <div className="title">
              <h3>files</h3>
              <p>title:{title}</p>
              <p>src:{src}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
EditDataFiles.propTypes = {
  files: PropTypes.array,
};
export default EditDataFiles;
