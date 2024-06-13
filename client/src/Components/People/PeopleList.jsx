import PropTypes from "prop-types";
import Wrapper from "../../Wrappers/People/people";
import { FaTimes } from "react-icons/fa";
import { Form } from "react-router-dom";
// import { useOutletContext } from "react-router-dom";
const PeopleList = ({ people, createdBy }) => {
  // const {
  //   user: { _id },
  // } = useOutletContext();

  return (
    <Wrapper>
      <div className="title">
        <h2>Members</h2>
        <button type="button" className="btn-close">
          <FaTimes />
        </button>
      </div>
      <div className="people">
        <ul className="lists">
          {people.map((items) => {
            const { _id, firstName } = items;
            return (
              <Form key={_id}>
                {createdBy === _id ? null : <li>{firstName}</li>}
              </Form>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};
PeopleList.propTypes = {
  people: PropTypes.array,
  createdBy: PropTypes.string,
};
export default PeopleList;
