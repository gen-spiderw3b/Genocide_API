import { InvestmentContainer, InvestmentPagination } from "../../Components";
import { useOutletContext, Link } from "react-router-dom";
import { useState } from "react";
import { TiArrowSyncOutline } from "react-icons/ti";
import Wrapper from "../../Wrappers/Investments/browseInvestments";

const BrowseAllGroups = () => {
  const {
    data: { groups, numOfPages },
  } = useOutletContext();

  const [isInfo, setIsInfo] = useState(false);
  const handleInfo = () => {
    setIsInfo(!isInfo);
  };
  return (
    <Wrapper>
      <InvestmentContainer />
      <div className="section-center">
        {groups.map((items) => {
          const { _id, groupName, desc, dues, investment, members, joinedBy } =
            items;

          return (
            <article key={_id} className="article">
              <div className="groupInfo">
                <h5 className="info-text">groupInfo</h5>
                <Link
                  className="btn-group"
                  to={`../group-info/${_id}`}
                  onClick={handleInfo}
                >
                  <TiArrowSyncOutline />
                </Link>
              </div>
              <h3 className="groupName">{groupName}</h3>
              <p>type of group:</p>
              <h4 className="investment">{investment}</h4>
              <p>how much $$$/month:</p>
              <h4 className="dues">${dues}</h4>
              <p>how many members are needed:</p>
              <h4 className="members">{`${joinedBy.length}  / ${members}`}</h4>
              <div className="desc">
                <p>desc:</p>
                <q>{desc}</q>
              </div>

              <Link to={`../create-member/${_id}`} className="btn btn-block">
                join group
              </Link>
            </article>
          );
        })}
      </div>
      <div className="pagination">
        {numOfPages > 1 ? <InvestmentPagination /> : null}
      </div>
    </Wrapper>
  );
};
export default BrowseAllGroups;
