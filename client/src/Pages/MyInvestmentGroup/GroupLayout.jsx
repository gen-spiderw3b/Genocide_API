import { Outlet, useLoaderData } from "react-router-dom";
import customFetch from "../../Utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get(
      "/investment/select-group/get-all-user-groups"
    );
    return data;
  } catch (error) {
    return error;
  }
};

const GroupLayout = () => {
  const { group } = useLoaderData();

  return (
    <>
      <Outlet context={{ group }} />
    </>
  );
};
export default GroupLayout;
