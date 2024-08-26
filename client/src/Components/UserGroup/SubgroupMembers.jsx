import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";
import customFetch from "../../Utils/customFetch";

const SubgroupMembers = ({ members, subId, teamLeader }) => {
  const [isName, setIsName] = useState(false);
  const [useName, setUseName] = useState("");
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
    const formData = { memberId: data, groupId: subId };

    try {
      await customFetch.patch(
        "/investment/user-group/update-teamleader",
        formData
      );
      toast.success(`${useName} is now a team leader!`);
      setUseName("");
      setId("");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };
  const removeMember = async () => {
    const data = id;
    const formData = { memberId: data, groupId: subId };

    try {
      await customFetch.patch("/investment/user-group/remove-member", formData);
      toast.success(`${useName} has been removed!`);
      setUseName("");
      setId("");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };
  return (
    <div>
      <ul className="list">
        {members.map((item) => {
          const { _id, firstName } = item;
          return (
            <li
              key={_id}
              id={_id}
              className={_id === teamLeader ? "teamleader" : "lists"}
              onClick={handleName}
            >
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
            <button type="button" onClick={removeMember} className="update-btn">
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
  teamLeader: PropTypes.string,
};
export default SubgroupMembers;
