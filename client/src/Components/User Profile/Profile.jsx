import { FormInput, SelectOption } from "../../Components/index.js";
import { STATES } from "../../../../Utils/Constants/constants.js";
import { Form } from "react-router-dom";
import PropTypes from "prop-types";

const UserProfile = ({ user }) => {
  const { firstName, lastName, city, state, email, phoneNumber } = user;

  return (
    <div>
      <Form method="post" className="form">
        <div className="title">
          <h3>Update Profile</h3>
        </div>
        <FormInput type="text" name="firstName" defaultValue={firstName} />
        <FormInput type="text" name="lastName" defaultValue={lastName} />
        <SelectOption
          type="text"
          name="state"
          list={Object.values(STATES)}
          defaultValue={state}
        />
        <FormInput type="text" name="city" defaultValue={city} />
        <FormInput type="email" name="email" defaultValue={email} />
        <FormInput type="text" name="phoneNumber" defaultValue={phoneNumber} />
        <button type="submit" className="btn btn-block">
          submit update
        </button>
      </Form>
    </div>
  );
};
UserProfile.propTypes = {
  user: PropTypes.object,
};
export default UserProfile;
