import Wrapper from "../../Wrappers/Education/viewCourse";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const ViewCourse = () => {
  const { courses } = useOutletContext();
  useEffect(() => {
    window.location.reload();
  }, []);
  return (
    <Wrapper>
      <div className="section-center">
        {courses.map((items) => {
          const { _id, course, section } = items;
          return (
            <article key={_id} className="article">
              <div className="title">
                <h2>{course}</h2>
              </div>
              <p className="section-length">{`${section.length} sections`}</p>
              <Link to={`course/${_id}`}>{`go to ${course}`}</Link>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default ViewCourse;
