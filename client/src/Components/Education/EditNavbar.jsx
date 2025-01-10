import { useMediaQuery } from "@react-hook/media-query";
import PropTypes from "prop-types";
const EditNavbar = ({
  section,
  setSection,
  removeSection,
  setRemoveSection,
  file,
  setFile,
  removeFile,
  setRemoveFile,
}) => {
  const match = useMediaQuery("only screen and (min-width:800px)");

  const handleAddSection = () => {
    setRemoveSection(false);
    setFile(false);
    setRemoveFile(false);
    setSection(!section);
  };
  const handleRemoveSection = () => {
    setFile(false);
    setRemoveFile(false);
    setSection(false);
    setRemoveSection(!removeSection);
  };
  const handleFile = () => {
    setRemoveFile(false);
    setSection(false);
    setRemoveSection(false);
    setFile(!file);
  };
  const handleRemoveFile = () => {
    setSection(false);
    setRemoveSection(false);
    setFile(false);
    setRemoveFile(!removeFile);
  };

  return (
    <div>
      {/* Media Query */}
      {match ? (
        <div className="large-container">
          <button
            type="button"
            className="btn add-section"
            onClick={handleAddSection}
          >
            add section
          </button>
          <button
            type="button"
            className="btn remove-section"
            onClick={handleRemoveSection}
          >
            remove section
          </button>

          <button type="button" className="btn add-files" onClick={handleFile}>
            add files
          </button>
          <button
            type="button"
            className="btn remove-files"
            onClick={handleRemoveFile}
          >
            remove files
          </button>
        </div>
      ) : (
        <div className="small-container">
          <button
            type="button"
            className="btn add-section"
            onClick={handleAddSection}
          >
            add section
          </button>
          <button
            type="button"
            className="btn remove-section"
            onClick={handleRemoveSection}
          >
            remove section
          </button>
          <button type="button" className="btn add-files" onClick={handleFile}>
            add files
          </button>
          <button
            type="button"
            className="btn remove-files"
            onClick={handleRemoveFile}
          >
            remove files
          </button>
        </div>
      )}
      {/* End Of Media Query */}
    </div>
  );
};
EditNavbar.propTypes = {
  section: PropTypes.bool,
  setSection: PropTypes.func,
  removeSection: PropTypes.bool,
  setRemoveSection: PropTypes.func,
  file: PropTypes.bool,
  setFile: PropTypes.func,
  removeFile: PropTypes.bool,
  setRemoveFile: PropTypes.func,
};
export default EditNavbar;
