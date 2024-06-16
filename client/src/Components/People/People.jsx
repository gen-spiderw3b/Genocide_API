import PropTypes from "prop-types";
import { Form } from "react-router-dom";
const People = ({ people, groupId, createdBy }) => {
  return (
    <div>
      {people.map((items) => {
        const { _id, firstName } = items;
        return (
          <Form
            key={_id}
            method="post"
            action={`../delete-member/${groupId}/${_id}`}
          >
            <button type="submit" className="btn">
              {createdBy === _id ? null : firstName}
            </button>
          </Form>
        );
      })}
    </div>
  );
};
People.propTypes = {
  people: PropTypes.array,
  groupId: PropTypes.string,
  createdBy: PropTypes.string,
};
export default People;
