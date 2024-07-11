import { Outlet, useLoaderData, useOutletContext } from "react-router-dom";
import customFetch from "../../Utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get(
      "/investment/my-investment-group/get-all-user-groups"
    );
    return data;
  } catch (error) {
    return error;
  }
};

const GroupLayout = () => {
  const { user } = useOutletContext();
  const { group } = useLoaderData();

  return (
    <>
      <Outlet context={{ group, user }} />
    </>
  );
};
export default GroupLayout;
