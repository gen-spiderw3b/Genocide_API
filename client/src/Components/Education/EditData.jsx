import PropTypes from "prop-types";
import { EditDataFiles, EditDataList } from "../../Components/index";
const EditData = ({ course }) => {
  const newSection = course.map((item) => item.sections);

  return (
    <div>
      {newSection.map((outerArray, index) => {
        return (
          <div key={index}>
            {outerArray.map((item) => {
              const { _id, section, files } = item;
              return (
                <article className="article" key={_id}>
                  <EditDataList section={section} />
                  <EditDataFiles files={files} />
                </article>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
EditData.propTypes = {
  course: PropTypes.array,
};
export default EditData;
