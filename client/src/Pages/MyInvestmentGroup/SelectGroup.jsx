import Wrapper from "../../Wrappers/Investments/investmentHome";
import { useOutletContext, Link } from "react-router-dom";
const SelectGroup = () => {
  const { group } = useOutletContext();
  return (
    <Wrapper>
      <div className="section-center">
        {group.map((items) => {
          const { _id, groupName, investment } = items;
          return (
            <article key={_id} className="article">
              <h2>{groupName}</h2>
              <h4>{investment}</h4>
              <Link to={`my-group/${_id}`}>go to group</Link>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default SelectGroup;
