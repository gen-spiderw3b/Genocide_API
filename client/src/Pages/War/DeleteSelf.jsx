import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ params }) => {
  try {
    await customFetch.patch(`/war/delete-self/${params.id}/${params.user}`);
    toast.success("You have left the group!");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("/dashboard/war/my-groups");
};
