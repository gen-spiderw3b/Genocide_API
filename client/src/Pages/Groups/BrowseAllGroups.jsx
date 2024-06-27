import { InvestmentContainer } from "../../Components";
import { useOutletContext, Form } from "react-router-dom";
import Wrapper from "../../Wrappers/Investments/browseInvestments";
const BrowseAllGroups = () => {
  const {
    data: { groups },
    user,
  } = useOutletContext();

  return (
    <Wrapper>
      <InvestmentContainer />
      <div className="section-center">
        {groups.map((items) => {
          const { _id, groupName, desc, dues, investment, members, associate } =
            items;
          let num = 1 + associate.length;

          return (
            <article key={_id} className="article">
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
    </Wrapper>
  );
};
export default BrowseAllGroups;
