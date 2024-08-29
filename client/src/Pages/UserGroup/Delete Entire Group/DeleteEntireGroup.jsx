import Wrapper from "../../../Wrappers/UserGroup/Delete Investment Group/deleteInvestmentGroup";
import { useNavigate, useParams } from "react-router-dom";
import customFetch from "../../../Utils/customFetch";
import { toast } from "react-toastify";
const DeleteEntireGroup = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  //CancelBtn
  const handleCancel = () => {
    navigate("../");
  };
  //DeleteBtn
  const handleDelete = async () => {
    try {
      await customFetch.delete(
        `/investment/user-group/delete-group/${groupId}`
      );
      toast.success("you have deleted this investment group");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

  return (
    <Wrapper>
      <article className="article">
        <h3 className="title">delete investment group</h3>
        <p className="question">do you want to delete this entire group?</p>
        <div className="btn-container">
          <button type="button" className="cancel" onClick={handleCancel}>
            cancel
          </button>
          <button type="button" className="delete" onClick={handleDelete}>
            delete group
          </button>
        </div>
      </article>
    </Wrapper>
  );
};
export default DeleteEntireGroup;
