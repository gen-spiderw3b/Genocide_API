import PropTypes from "prop-types";
import { CourseSectionInnerArray } from "../../Components/index";
const CourseSection = ({ section, videoFunc }) => {
  return (
    <div>
      {section.map((innerArray, outerIndex) => {
        return (
          <div key={outerIndex}>
            <CourseSectionInnerArray
              sections={innerArray}
              videoFunc={videoFunc}
            />
          </div>
        );
      })}
    </div>
  );
};
CourseSection.propTypes = {
  section: PropTypes.array,
  videoFunc: PropTypes.func,
};
export default CourseSection;
