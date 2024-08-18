import { toast } from "react-toastify";
import customFetch from "../../../Utils/customFetch";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  try {
    await customFetch.patch(
      `/investment/user-group/create-president/${params.groupId}/${params.memberId}`
    );
    toast.success("you have created a president");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
  }
  return redirect("../create/promotion");
};
