import customFetch from "../../../Utils/customFetch";
import { useLoaderData, Form, useParams } from "react-router-dom";
import Wrapper from "../../../Wrappers/UserGroup/SubGroup/selectMember";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/investment/user-group/get-all-members/${params.groupId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const SelectMembers = () => {
  const { subgroupId } = useParams();

  const { groupMembers } = useLoaderData();
  const { members } = groupMembers[0];

  return (
    <Wrapper>
      <div className="title">
        <h3>
          select <span>members</span>
        </h3>
      </div>
      <div className="title-underline"></div>
      <div className="section-center">
        {members.map((item) => {
          const { _id, state, city, firstName } = item;

          return (
            <article key={_id} className="article">
              <div className="info">
                <h5>firstname:</h5>
                <p>{firstName}</p>
                <h5>state:</h5>
                <p>{state}</p>
                <h5>city:</h5>
                <p>{city}</p>
              </div>
              <Form
                method="post"
                action={`../process-member/${_id}/${subgroupId}`}
              >
                <button type="submit" className="btn btn-block">
                  assign member
                </button>
              </Form>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default SelectMembers;
