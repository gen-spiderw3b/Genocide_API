import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../../Wrappers/Education/update";
import { Link } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/education/my-course");
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Update = () => {
  const { course } = useLoaderData();

  return (
    <Wrapper>
      <div className="section-center">
        {course.map((items) => {
          const { _id, course, section } = items;
          return (
            <article key={_id} className="article">
              <div className="title">
                <h2>{course}</h2>
              </div>
              <p className="section-length">{`${section.length} sections`}</p>
              <Link to={`../edit/${_id}`}>{`edit ${course} `}</Link>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Update;
