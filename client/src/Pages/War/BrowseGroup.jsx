import { useOutletContext } from "react-router-dom";
import Wrapper from "../../Wrappers/War/browseGroup";

const BrowseGroup = () => {
  const { groups } = useOutletContext();

  return (
    <Wrapper>
      <div className="section-center">
        {groups.map((item) => {
          const { _id, desc, games, goals, groupName, players, joinedBy } =
            item;

          return (
            <article
              className={
                joinedBy.length === players ? "hide-full-game" : "article"
              }
              key={_id}
            >
              <header>{groupName}</header>
              <div className="article-desc">
                <h3 className="game-title">{games}</h3>
                <h4 className="num-of-players">
                  Num Of Players Needed:{players}
                </h4>
                {joinedBy.map((people) => {
                  const { firstName, _id } = people;
                  return (
                    <div key={_id} className="people-container">
                      <h4 className="players-name">
                        Group Members:{firstName}
                      </h4>
                    </div>
                  );
                })}
                <h4 className="goals">{goals}</h4>
                <h5 className="desc">{desc}</h5>
              </div>
              <div className="btn-container">
                <button className="btn">join</button>
                <button className="btn">leave</button>
                <button className="btn">kick out</button>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default BrowseGroup;
