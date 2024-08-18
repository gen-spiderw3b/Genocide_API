import Wrapper from "../../../Wrappers/UserGroup/Treasurer/treasurer";
import customFetch from "../../../Utils/customFetch";
import {
  useLoaderData,
  useParams,
  Form,
  useNavigation,
} from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components,
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `investment/user-group/get-all-members/${params.groupId}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

const Promotion = () => {
  const { groupMembers } = useLoaderData();
  const { groupId } = useParams();
  const { members } = groupMembers[0];
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <div className="section-center">
        <table>
          <caption>choose who to promote</caption>
          <thead>
            <tr>
              <th>firstName</th>
              <th>lastName</th>
              <th>state</th>
              <th>city</th>
              <th>role</th>
              <th>president</th>
              <th>vice president</th>
              <th>treasurer</th>
              <th>associate</th>
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
                  <td data-cell="select vice president">
                    <Form
                      method="post"
                      action={`../vicepresident/${groupId}/${_id}`}
                    >
                      <button
                        type="submit"
                        className="btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? "submitting..."
                          : "select vice president"}
                      </button>
                    </Form>
                  </td>
                  <td data-cell="select treasurer">
                    <Form
                      method="post"
                      action={`../treasurer/${groupId}/${_id}`}
                    >
                      <button
                        type="submit"
                        className="btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "submitting..." : "select treasurer"}
                      </button>
                    </Form>
                  </td>
                  <td data-cell="select associate">
                    <Form
                      method="post"
                      action={`../associate/${groupId}/${_id}`}
                    >
                      <button
                        type="submit"
                        className="btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "submitting..." : "select associate"}
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
export default Promotion;
