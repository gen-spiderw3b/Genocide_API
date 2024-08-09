import PropTypes from "prop-types";
import { useState } from "react";
import { redirect } from "react-router-dom";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";

// eslint-disable-next-line no-unused-vars
const SubgroupMembers = ({ members, subId }) => {
  const [isName, setIsName] = useState(false);
  const [useName, setUseName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState("");

  const handleName = (e) => {
    if (isName === false) {
      setIsName(!isName);
      setUseName(e.target.firstChild.data);
      setId(e.target.id);
    } else {
      setIsName(!isName);
      setUseName("");
      setId("");
    }
  };
  const handleNameSet = (e) => {
    if (isName === true) {
      setUseName(e.target.firstChild.data);
    }
  };
  const createTeamLeader = async () => {
    const data = id;
    const formData = { teamLeader: data, groupId: subId };

    try {
      await customFetch.patch(
        "/investment/user-group/update-teamleader",
        formData
      );
      toast.success(`${useName} is now a team leader!`);
      return redirect("../");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <div>
      <ul className="list">
        {members.map((item) => {
          const { _id, firstName } = item;
          return (
            <li key={_id} id={_id} className="lists" onClick={handleName}>
              {firstName}
            </li>
          );
        })}
      </ul>
      {isName ? (
        <div className="btn-container">
          <p onClick={handleNameSet} className="useName">
            {useName}
          </p>
          <div className="btns">
            <button
              type="button"
              onClick={createTeamLeader}
              className="update-btn"
            >
              make team leader
            </button>

            <button type="button" className="update-btn">
              make associate
            </button>

            <button type="button" className="update-btn">
              remove member
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
SubgroupMembers.propTypes = {
  members: PropTypes.array,
  subId: PropTypes.string,
};
export default SubgroupMembers;
