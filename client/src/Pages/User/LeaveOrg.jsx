import Wrapper from "../../Wrappers/UserProfile/leaveOrg.js";
import { useNavigate } from "react-router-dom";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
const LeaveOrg = () => {
  const navigate = useNavigate();

  //CancelBtn
  const handleCancel = () => {
    navigate("../");
  };

  //DeleteBtn
  const handleDelete = async () => {
    try {
      await customFetch.delete("/users/leave-org");
      toast.success("you have left this organization!");
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

  return (
    <Wrapper>
      <article className="article">
        <p className="question">
          sorry to see you go... but if you must i will explain a few things
          before you leave!
        </p>
        <div className="list-container">
          <ol className="lists">
            <li>you have to leave all investment groups first</li>
            <li>
              you have access to the github repository for your all the degrees
              you contributed to. make sure you get them before you leave!
            </li>
            <li>
              you wont have access to any of your investment groups on this
              site, but whatever arrangements you made outside this network is
              totally fine!
            </li>
            <li>you can still hang out with us!</li>
            <li>you can come back anytime!</li>
          </ol>
        </div>
        <div className="btn-container">
          <button type="button" className="cancel" onClick={handleCancel}>
            cancel
          </button>
          <button type="button" className="delete" onClick={handleDelete}>
            leave group
          </button>
        </div>
      </article>
    </Wrapper>
  );
};
export default LeaveOrg;
