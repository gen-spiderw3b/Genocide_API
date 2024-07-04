import Wrapper from "../../Wrappers/GroupInfo/groupInfo";
import customFetch from "../../Utils/customFetch";
import { useLoaderData, Link } from "react-router-dom";
import { BiSolidLeftArrowSquare } from "react-icons/bi";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/investment/group-info/${params.id}`
    );
    return data;
  } catch (error) {
    return error;
  }
};
const GroupInfo = () => {
  const data = useLoaderData();
  const { groupInfo } = data;

  return (
    <Wrapper>
      {groupInfo.map((item) => {
        const { president, createdBy } = item;
        return (
          <article key={createdBy}>
            <div className="title">
              <h2>group info</h2>
            </div>
            {president.map((item) => {
              const { _id, state, city, firstName, role } = item;
              return (
                <ul key={_id}>
                  <p>firstName</p>
                  <li>{firstName}</li>
                  <p>state</p>
                  <li>{state}</li>
                  <p>city</p>
                  <li>{city}</li>
                  <p>organization role</p>
                  <li>{role}</li>
                </ul>
              );
            })}
          </article>
        );
      })}
      <Link className="btn-group" to={`../browse-all-groups`}>
        <BiSolidLeftArrowSquare />
      </Link>
    </Wrapper>
  );
};

export default GroupInfo;
