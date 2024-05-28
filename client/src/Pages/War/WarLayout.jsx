import { Outlet, useLoaderData } from "react-router-dom";
import customFetch from "../../Utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/war/browse-group");
    return data;
  } catch (error) {
    return error;
  }
};

const WarLayout = () => {
  const { groups } = useLoaderData();
  return (
    <>
      <Outlet context={{ groups }} />
    </>
  );
};
export default WarLayout;
