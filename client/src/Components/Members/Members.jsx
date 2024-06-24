import PropTypes from "prop-types";
import { Form } from "react-router-dom";
const Members = ({ members, groupId }) => {
  return (
    <div>
      {members.map((item) => {
        const { _id, firstName } = item;
        return (
          <Form
            key={_id}
            method="post"
            className="links"
            action={`../delete-member/${groupId}/${_id}`}
          >
            <button type="submit" className="btn btn-links">
              {firstName}
            </button>
          </Form>
        );
      })}
    </div>
  );
};
Members.propTypes = {
  members: PropTypes.array,
  groupId: PropTypes.string,
};
export default Members;
