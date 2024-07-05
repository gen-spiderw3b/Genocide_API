import Wrapper from "../../Wrappers/War/browseGroups";
import { useOutletContext, Form } from "react-router-dom";
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
          let num = 1;

          return (
            <article
              key={_id}
              className={
                joinedBy.length + num >= players ? "hide-article" : "article"
              }
            >
              <h3 className="games">{games}</h3>
              <h4 className="groupName">{groupName}</h4>
              <h5 className="players">
                {joinedBy.length + num} / {players}
              </h5>
              <h5 className="goals">{goals}</h5>
              <div className="discord">
                <a href={url} target="_blank">
                  {url}
                </a>
              </div>
              <div className="btn-container">
                <Form method="post" action={`../join-group/${_id}`}>
                  <button type="submit" className="btn join-btn">
                    join group
                  </button>
                </Form>
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
