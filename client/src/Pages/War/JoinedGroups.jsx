import Wrapper from "../../Wrappers/War/myGroups";
import customFetch from "../../Utils/customFetch";
import { JoinedMembers, MyGroupPagination } from "../../Components/index";
import { useLoaderData, useOutletContext } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch.get("/war/joined-group", { params });
    return { data };
  } catch (error) {
    return error;
  }
};

const JoinedGroups = () => {
  const { user } = useOutletContext();
  const {
    data: { joinedGroups, currentPage, numOfPages },
  } = useLoaderData();
  const [data] = joinedGroups;
  const { docs } = data;

  return (
    <Wrapper>
      <div className="title">
        <h2>
          joined <span>groups</span>
        </h2>
      </div>
      <div className="title-underline"></div>
      <div className="section-center">
        {docs.map((items) => {
          const { _id, games, groupName } = items;
          return (
            <article className="article" key={_id}>
              <h3 className="games">{games}</h3>
              <h4 className="groupName">{groupName}</h4>
              <p className="text">delete members</p>
              <JoinedMembers groupId={_id} user={user} />
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
export default JoinedGroups;
