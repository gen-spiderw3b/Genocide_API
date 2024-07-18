import Wrapper from "../../Wrappers/Investments/MyGroup/selectGroup";
import { useOutletContext, Form } from "react-router-dom";

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
              <Form method="post" action={`../select-group/user-group/${_id}`}>
                <button type="submit" className="btn btn-block">
                  initalize group
                </button>
              </Form>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default SelectGroup;
