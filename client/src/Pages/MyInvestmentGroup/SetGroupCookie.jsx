import customFetch from "../../Utils/customFetch";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ params }) => {
  try {
    await customFetch.post(`investment/select-group/user-group/${params.id}`);
    toast.success("initalizing group info");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect(`/dashboard/investment/user-group`);
};
