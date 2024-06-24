import PropTypes from "prop-types";
import { Form } from "react-router-dom";

const JoinedMembers = ({ groupId, user }) => {
  return (
    <div>
      <Form
        method="post"
        action={`../delete-self/${groupId}/${user._id}`}
        className="member-form"
      >
        <button type="submit" className="member-btn">
          {user.firstName}
        </button>
      </Form>
    </div>
  );
};
JoinedMembers.propTypes = {
  groupId: PropTypes.string,
  user: PropTypes.object,
};
export default JoinedMembers;
