import { InvestmentContainer, InvestmentPagination } from "../../Components";
import { useOutletContext, Form, Link } from "react-router-dom";
import { useState } from "react";
import { TiArrowSyncOutline } from "react-icons/ti";
import Wrapper from "../../Wrappers/Investments/browseInvestments";

const BrowseAllGroups = () => {
  const {
    data: { groups, numOfPages },
    user,
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
          let num = joinedBy.length;

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
              <h4 className="members">{`${num} / ${members}`}</h4>
              <div className="desc">
                <p>desc:</p>
                <q>{desc}</q>
              </div>

              <Form method="post" action={`../join-group/${_id}/${user._id}`}>
                <button type="submit" className="btn btn-block">
                  join group
                </button>
              </Form>
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
