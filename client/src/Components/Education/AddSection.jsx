import PropTypes from "prop-types";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";

const AddSection = ({ course }) => {
  const courseName = course[0].course;
  const courseId = course[0]._id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("courseId", courseId);
      formData.append("courseName", courseName);
      const dataObj = Object.fromEntries(formData);

      const data = await customFetch.post(
        "/education/my-course/add-section",
        dataObj
      );
      if (data.statusText === "Accepted") {
        toast.info(data.data.msg);
      }
      if (data.statusText === "Created") {
        toast.success(data.data.msg);
      }
      setTimeout(() => {
        return window.location.reload();
      }, 4000);
    } catch (error) {
      return toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <div>
      <form method="POST" className="form" onSubmit={handleSubmit}>
        <label htmlFor="section" className="form-label">
          what section do you want to add?
        </label>
        <input
          type="number"
          name="section"
          id="section"
          className="form-input"
          placeholder="1"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
AddSection.propTypes = {
  course: PropTypes.array,
};
export default AddSection;
