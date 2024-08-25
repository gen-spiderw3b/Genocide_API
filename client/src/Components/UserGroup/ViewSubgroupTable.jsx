import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
const ViewSubgroupTable = ({ subgroups }) => {
  const [contacts] = useState(subgroups);

  //Error Msg
  if (contacts.length === 0) {
    return (
      <div>
        <h3 className="error-msg">your not in a subgroup</h3>
      </div>
    );
  }

  return (
    <div className="table-container">
      {contacts.map((contact) => {
        const { _id, subgroupName, members } = contact;

        return (
          <table key={_id}>
            <caption>{subgroupName}</caption>
            <thead>
              <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>state</th>
                <th>city</th>
                <th>contact</th>
              </tr>
            </thead>
            <tbody>
              {members.map((item) => {
                const { _id, firstName, lastName, city, state } = item;
                return (
                  <tr key={_id}>
                    <td data-cell="firstName">{firstName}</td>
                    <td data-cell="lastName">{lastName}</td>
                    <td data-cell="state">{state}</td>
                    <td data-cell="city">{city}</td>
                    <td data-cell="contact">
                      <button className="link-btn">
                        <Link to={`../contact/${_id}`}>contact me</Link>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      })}
    </div>
  );
};
ViewSubgroupTable.propTypes = {
  member: PropTypes.object,
  subgroups: PropTypes.array,
};
export default ViewSubgroupTable;
