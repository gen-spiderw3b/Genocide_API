import PropTypes from "prop-types";
import { Form } from "react-router-dom";
import { useState } from "react";
const SubgroupMembers = ({ members }) => {
  const [isName, setIsName] = useState(false);
  const handleName = () => {
    setIsName(!isName);
  };
  return (
    <div>
      <ul className="lists">
        {members.map((item) => {
          const { _id, firstName } = item;
          return (
            <li className="list" onClick={handleName} key={_id}>
              {firstName}
              {isName ? (
                <div className="btn-container">
                  <Form method="post" action={``}>
                    <button type="submit">clickme</button>
                  </Form>
                  <Form method="post" action={``}>
                    <button type="submit">clickme</button>
                  </Form>
                  <Form method="post" action={``}>
                    <button type="submit">clickme</button>
                  </Form>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
SubgroupMembers.propTypes = {
  members: PropTypes.array,
};
export default SubgroupMembers;
