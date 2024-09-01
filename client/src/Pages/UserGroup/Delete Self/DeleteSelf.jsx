import Wrapper from "../../../Wrappers/UserGroup/Delete Investment Group/deleteSelf.js";
import { useNavigate, useParams } from "react-router-dom";
import customFetch from "../../../Utils/customFetch";
import { toast } from "react-toastify";
const DeleteSelf = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  //CancelBtn
  const handleCancel = () => {
    navigate("../");
  };
  //DeleteBtn
  const handleDelete = async () => {
    try {
      await customFetch.delete(`/investment/user-group/leave-group/${groupId}`);
      toast.success("you have left this group!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

  return (
    <Wrapper>
      <article className="article">
        <h3 className="title">leave group</h3>
        <p className="question">do you want to leave this investment group?</p>
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
export default DeleteSelf;
