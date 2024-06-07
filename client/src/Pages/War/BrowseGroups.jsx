import Wrapper from "../../Wrappers/War/browseGroups";
import { useOutletContext } from "react-router-dom";
import { SearchContainer, PageBtnContainer } from "../../Components";
const BrowseGroups = () => {
  const {
    data: { groups, totalGroups },
  } = useOutletContext();

  return (
    <Wrapper>
      <h4 className="total-groups">{totalGroups} groups available</h4>
      <SearchContainer />
      <div className="section-center">
        {groups.map((items) => {
          const { _id, groupName, players, desc, games, joinedBy, goals, url } =
            items;
          return (
            <article key={_id} className="article">
              <h3 className="games">{games}</h3>
              <h4 className="groupName">{groupName}</h4>
              <h5 className="players">
                {joinedBy.length} / {players}
              </h5>
              <h5 className="goals">{goals}</h5>
              <div className="discord">
                <a href={url} target="_blank">
                  {url}
                </a>
              </div>

              <div className="desc">
                <p>{desc ? desc : "none"}</p>
              </div>
            </article>
          );
        })}
      </div>
      {totalGroups <= 9 ? null : <PageBtnContainer />}
    </Wrapper>
  );
};
export default BrowseGroups;
