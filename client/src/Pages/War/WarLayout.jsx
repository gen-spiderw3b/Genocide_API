import { Outlet, useLoaderData } from "react-router-dom";
import customFetch from "../../Utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/war/wow/browse-wow-groups");
    return data;
  } catch (error) {
    return error;
  }
};

const WarLayout = () => {
  return (
    <>
      <Outlet context={{}} />
    </>
  );
};
export default WarLayout;
