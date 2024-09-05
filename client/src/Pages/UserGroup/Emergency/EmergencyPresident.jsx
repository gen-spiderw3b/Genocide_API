import PropTypes from "prop-types";
import Wrapper from "../../../Wrappers/UserGroup/Treasurer/treasurer";
import {
  useParams,
  Form,
  useNavigation,
  useOutletContext,
} from "react-router-dom";

const EmergencyPresident = () => {
  const { members } = useOutletContext();
  const { groupId } = useParams();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <div className="section-center">
        <table>
          <caption>Investment Groups Must Have A President</caption>
          <thead>
            <tr>
              <th>firstName</th>
              <th>lastName</th>
              <th>state</th>
              <th>city</th>
              <th>role</th>
              <th>president</th>
            </tr>
          </thead>
          <tbody>
            {members.map((item) => {
              const { _id, firstName, lastName, state, city, permission } =
                item;
              return (
                <tr key={_id}>
                  <td data-cell="firstName">{firstName}</td>
                  <td data-cell="lastName">{lastName}</td>
                  <td data-cell="state">{state}</td>
                  <td data-cell="city">{city}</td>
                  <td data-cell="role">{permission.role}</td>
                  <td data-cell="select president">
                    <Form
                      method="post"
                      action={`../president/${groupId}/${_id}`}
                    >
                      <button
                        type="submit"
                        className="btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "submitting..." : "select president"}
                      </button>
                    </Form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};
EmergencyPresident.propTypes = {
  members: PropTypes.array,
};
export default EmergencyPresident;
