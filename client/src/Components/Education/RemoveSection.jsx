import PropTypes from "prop-types";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
import { useState } from "react";

const RemoveSection = ({ course }) => {
  const findSections = course.find((item) => item.sections);
  const getSections = findSections.sections;
  const courseName = course[0].course;
  const courseId = course[0]._id;
  const [selectedOptions, setSelectedOption] = useState({
    id: getSections[0]._id,
    value: "1",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("courseId", courseId);
      formData.append("courseName", courseName);
      formData.append("sectionId", selectedOptions.id);
      formData.append("section", selectedOptions.value);
      const dataObj = Object.fromEntries(formData);

      const data = await customFetch.post(
        "/education/my-course/remove-section",
        dataObj
      );
      if (data.statusText === "Accepted") {
        toast.info(data.data.msg);
      }
      if (data.statusText === "Created") {
        toast.success(data.data.msg);
      }
      if (data.statusText === "OK") {
        toast.success(data.data.msg);
      }
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      return toast.error(error?.response?.data?.msg);
    }
  };

  //HandleChange
  const handleChange = (e) => {
    const selectedOption = e.target.value;
    const selectedId = e.target.selectedOptions[0].dataset.id;
    setSelectedOption({ id: selectedId, value: selectedOption });
  };

  return (
    <div>
      <form method="POST" className="form">
        <label htmlFor="section" className="label">
          which section do you want to remove?
        </label>
        <select
          name="section"
          id="section"
          defaultValue={selectedOptions.value}
          onChange={handleChange}
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
        <button type="button" onClick={handleSubmit} className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
RemoveSection.propTypes = {
  course: PropTypes.array,
};
export default RemoveSection;
