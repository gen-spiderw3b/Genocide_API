import PropTypes from "prop-types";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
import { useState } from "react";

const RemoveFile = ({ course }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const courseName = course[0].course;
  const findSections = course.find((item) => item.sections);
  const getSections = findSections.sections;
  const upload = "/upload";
  const courseText = `/${courseName}`;
  const sectionText = `/${selectedOptions.section}/`;

  //HandleFileChange
  const handleSelectChange = (e) => {
    setSelectedOptions({
      id: e.target.selectedOptions[0].value,
      section: e.target.selectedOptions[0].dataset.section,
      title: e.target.selectedOptions[0].dataset.title,
      src: e.target.selectedOptions[0].dataset.src,
    });
  };

  //Submit
  const submit = async () => {
    try {
      const formData = {
        file: selectedOptions.id,
        section: selectedOptions.section,
        title: selectedOptions.title,
        src: selectedOptions.src,
        courseName: courseName,
        upload: upload,
        courseText: courseText,
        sectionText: sectionText,
      };
      const data = await customFetch.post(
        "education/my-course/remove-file",
        formData
      );

      if (data.statusText === "OK") {
        toast.success(data.data.msg);
      }
      if (data.statusText === "ACCEPTED") {
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
    <div className="remove-file-container">
      {getSections.map((outerArray, index) => {
        const { files } = outerArray;
        return (
          <div key={index} className="select-box">
            <h3>{`section:${outerArray.section}`}</h3>
            <select
              onChange={handleSelectChange}
              multiple
              value={selectedOptions}
              className="form-select"
            >
              {files.map((item) => {
                const { _id, title, section, src } = item;
                return (
                  <option
                    key={_id}
                    data-section={section}
                    data-title={title}
                    data-src={src}
                    value={_id}
                  >
                    {title}
                  </option>
                );
              })}
            </select>
          </div>
        );
      })}

      <div className="file-info">
        <h3>file to be deleted:</h3>
        <button type="button" onClick={submit} className="delete-file">
          {selectedOptions.title}
        </button>
      </div>
    </div>
  );
};
RemoveFile.propTypes = {
  course: PropTypes.array,
};
export default RemoveFile;
