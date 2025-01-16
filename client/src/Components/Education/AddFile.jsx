import PropTypes from "prop-types";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
import { useState } from "react";

const AddFile = ({ course }) => {
  const courseName = course[0].course;
  const findSections = course.find((item) => item.sections);
  const getSections = findSections.sections;
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [isTitle, setIsTitle] = useState(true);
  const [isSection, setIsSection] = useState(false);
  const [isFile, setIsFile] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedOptions, setSelectedOption] = useState({
    id: getSections[0]._id,
    value: 1,
  });

  const handleFile = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("courseName", courseName);
      formData.append("section", selectedOptions.value);

      const data = await customFetch.post(
        "education/my-course/add-file",
        formData
      );
      if (data.statusText === "Accepted") {
        toast.info(data.data.msg);
      }
      if (data.statusText === "Created") {
        setSrc(data.data.file.src);
        toast.success(data.data.file.msg);
      }
      setIsFile(false);
      setIsComplete(true);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  //HandleChange
  const handleSectionChange = (e) => {
    const selectedSection = e.target.value;
    const selectedId = e.target.selectedOptions[0].dataset.id;
    setSelectedOption({ id: selectedId, value: selectedSection });
    setIsSection(false);
    setIsFile(true);
  };

  //Recommended Selection
  const handleRecommendedSelection = () => {
    setIsSection(false);
    setIsFile(true);
  };
  //Recommended Selection
  const handleTitle = () => {
    setIsTitle(false);
    setIsSection(true);
  };

  //Submit
  const handleSubmit = async () => {
    const formData = {
      courseName: courseName,
      title: title,
      src: src,
      sectionId: selectedOptions.id,
      section: selectedOptions.value,
    };
    try {
      const data = await customFetch.post(
        "education/my-course/submit-file",
        formData
      );

      if (data.statusText === "Created") {
        toast.success(data.data.msg);
      }
      setTimeout(() => {
        return window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <div>
      <form method="POST" className="form">
        {/* Title Selector */}
        {isTitle ? (
          <div>
            <label htmlFor="title" className="form-label">
              what is the name of the video?
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
            />
          </div>
        ) : null}

        {/* Section Selector */}
        {isSection ? (
          <div>
            <label htmlFor="section" className="label">
              what section do you want to add it too?
            </label>
            <select
              name="section"
              id="section"
              defaultValue={selectedOptions}
              onChange={handleSectionChange}
              className="form-select"
            >
              {getSections.map((item) => {
                const { _id, section } = item;
                return (
                  <option key={_id} data-id={_id} value={section}>
                    {`Section ${section}`}
                  </option>
                );
              })}
            </select>
          </div>
        ) : null}

        {isFile ? (
          <div>
            <label htmlFor="file" className="form-label">
              what file do you want to add?
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleFile}
              className="form-input"
            />
          </div>
        ) : null}

        {/* Btn Selectors */}
        {isTitle ? (
          <button type="button" onClick={handleTitle} className="btn btn-block">
            submit title
          </button>
        ) : null}
        {isSection ? (
          <button
            type="button"
            onClick={handleRecommendedSelection}
            className="btn btn-block"
          >
            keep recommended selection
          </button>
        ) : null}
        {isComplete ? (
          <div className="submitFile">
            <p>please submit file</p>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-block"
            >
              submit
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};
AddFile.propTypes = {
  course: PropTypes.array,
};
export default AddFile;
