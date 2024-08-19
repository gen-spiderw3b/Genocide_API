import customFetch from "../../../Utils/customFetch";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  try {
    await customFetch.delete(
      `/investment/user-group/delete-headlines/${params.id}`
    );
    toast.success("you have deleted a headline");
    window.location.reload();
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("../delete/delete-headline");
};
