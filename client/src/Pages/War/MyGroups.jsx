import { useLoaderData, Form } from "react-router-dom";
import Wrapper from "../../Wrappers/War/myGroups";
import customFetch from "../../Utils/customFetch";
import { Members } from "../../Components/index";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/war/my-group");
    return data;
  } catch (error) {
    return error;
  }
};

const MyGroups = () => {
  const { people } = useLoaderData();
  const [data] = people;
  const { docs } = data;

  return (
    <Wrapper>
      <div className="title">
        <h2>
          my <span>groups</span>
        </h2>
      </div>
      <div className="title-underline"></div>
      <div className="section-center">
        {docs.map((items) => {
          const { _id, games, members } = items;
          return (
            <article className="article" key={_id}>
              <h3 className="games">{games}</h3>
              <p className="text">delete members</p>
              <Members members={members} groupId={_id} />
              <p className="text">delete group</p>
              <Form method="post" action={`../delete-group/${_id}`}>
                <button type="submit" className="btn-block">
                  delete group
                </button>
              </Form>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default MyGroups;
