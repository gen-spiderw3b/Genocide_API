import { toast } from "react-toastify";
import customFetch from "../../Utils/customFetch";
import { redirect } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ params }) => {
  try {
    await customFetch.patch(`/war/join-group/${params.id}`);
    toast.success("You have joined this group!");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("../joined-groups");
};
