import { useLoaderData, Form } from "react-router-dom";
import Wrapper from "../../Wrappers/War/myGroups";
import customFetch from "../../Utils/customFetch";
import { Members, MyGroupPagination } from "../../Components/index";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch.get("/war/my-group", { params });
    return { data, searchParams: { ...params } };
  } catch (error) {
    return error;
  }
};

const MyGroups = () => {
  const {
    data: { people, currentPage, numOfPages },
  } = useLoaderData();
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
          const { _id, games, members, groupName } = items;
          return (
            <article className="article" key={_id}>
              <h3 className="games">{games}</h3>
              <h4 className="groupName">{groupName}</h4>
              <p className="text">delete members</p>
              <Members members={members} groupId={_id} />
              <Form method="post" action={`../delete-group/${_id}`}>
                <button type="submit" className="btn-block">
                  delete group
                </button>
              </Form>
            </article>
          );
        })}
      </div>
      {numOfPages > 1 && (
        <MyGroupPagination currentPage={currentPage} numOfPages={numOfPages} />
      )}
    </Wrapper>
  );
};
export default MyGroups;
