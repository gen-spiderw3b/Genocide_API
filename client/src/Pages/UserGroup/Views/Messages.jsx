import Wrapper from "../../../Wrappers/UserGroup/Views/messages";
import { Form, useLoaderData, Link } from "react-router-dom";
import customFetch from "../../../Utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get(
      `/investment/user-group/contact/get-messages`
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Messages = () => {
  const { messages } = useLoaderData();
  const { messenger } = messages[0];

  if (messenger.length === 0) {
    return (
      <Wrapper>
        <h2 className="error-msg">no messages!</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="title">
        <h3>mail</h3>
      </div>
      <div className="title-underline"></div>
      <table>
        <thead>
          <tr>
            <th>greeting</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>read</th>
            <th>contact</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {messenger.map((item) => {
            const { _id, greeting, desc, firstName, lastName, sentBy } = item;

            return (
              <tr key={_id}>
                <td data-cell="greeting">{greeting}</td>
                <td data-cell="firstName">{firstName}</td>
                <td data-cell="lastName">{lastName}</td>
                <td data-cell="read">
                  <Link
                    to={`../read-messages/${sentBy}`}
                    state={{ msg: desc }}
                    className="link-btn"
                  >
                    read
                  </Link>
                </td>
                <td data-cell="contact">
                  <Link to={`../reply/${sentBy}`} className="link-btn">
                    contact
                  </Link>
                </td>
                <td data-cell="delete">
                  <Form method="post" action={`../delete-message/${_id}`}>
                    <button type="submit" className="btn">
                      delete
                    </button>
                  </Form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};
export default Messages;
