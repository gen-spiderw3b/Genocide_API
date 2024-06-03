import { useLoaderData } from "react-router-dom";
import customFetch from "../../Utils/customFetch";
import Wrapper from "../../Wrappers/War/browseGroups";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/war/browse-groups");
    return data;
  } catch (error) {
    return error;
  }
};

const BrowseGroups = () => {
  const { groups, totalGroups, currentPage, numOfPages } = useLoaderData();

  return (
    <Wrapper>
      <h4 className="total-groups">{totalGroups} groups available</h4>
      <div className="section-center">
        {groups.map((items) => {
          const { _id, groupName, players, desc, games, joinedBy } = items;
          return (
            <article key={_id} className="article">
              <h3>{games}</h3>
              <h4>{groupName}</h4>
              <h5>
                {joinedBy.length} / {players}
              </h5>
              <div className="desc">
                <p>{desc ? desc : "none"}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default BrowseGroups;
