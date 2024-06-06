import { Outlet, useLoaderData } from "react-router-dom";
import customFetch from "../../Utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get("/war/browse-groups", {
      params,
    });

    return { data, searchValues: { ...params } };
  } catch (error) {
    return error;
  }
};

const WarLayout = () => {
  const { searchValues, data } = useLoaderData();

  return (
    <>
      <Outlet context={{ data, searchValues }} />
    </>
  );
};
export default WarLayout;
