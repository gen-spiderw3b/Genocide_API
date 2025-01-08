import PropTypes from "prop-types";
import { CourseFiles } from "../../Components/index";
const CourseSectionInnerArray = ({ sections, videoFunc }) => {
  return (
    <div>
      {sections.map((item) => {
        const { _id, section, newFile } = item;
        return (
          <div className="course-section" key={_id}>
            <button className="btn-block">{`section ${section}`}</button>
            <div className="course-list">
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
