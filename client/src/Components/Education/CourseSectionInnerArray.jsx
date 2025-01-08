import PropTypes from "prop-types";
import { CourseFiles } from "../../Components/index";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
const CourseSectionInnerArray = ({ sections, videoFunc }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      {sections.map((item) => {
        const { _id, section, newFile } = item;
        return (
          <div className="course-section" key={_id}>
            <button
              type="button"
              onClick={() => setIsVisible(!isVisible)}
              className="btn-block"
            >
              {`section ${section}`}
              <FaAngleDown />
            </button>
            <div
              className={isVisible ? "course-list show-list" : "course-list"}
            >
              <CourseFiles files={newFile} videoFunc={videoFunc} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
CourseSectionInnerArray.propTypes = {
  sections: PropTypes.array,
  videoFunc: PropTypes.func,
};
export default CourseSectionInnerArray;
