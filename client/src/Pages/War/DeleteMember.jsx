import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ params }) => {
  try {
    await customFetch.patch(`/war/delete-member/${params.id}/${params.user}`);
    toast.success("Member has been deleted");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("/dashboard/war/my-groups");
};
