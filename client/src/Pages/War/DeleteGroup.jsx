import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/war/delete-group/${params.id}`);
    toast.success("Group Has Been Disbanded");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("/dashboard/war/my-groups");
};
