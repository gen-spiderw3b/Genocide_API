import customFetch from "../../../Utils/customFetch";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ params }) => {
  try {
    await customFetch.patch(
      `/investment/user-group/process-member/${params.memberId}/${params.subgroupId}`
    );
    toast.success("You have assigned this member to this group!");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("../");
};
