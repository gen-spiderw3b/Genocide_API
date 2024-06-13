import { Outlet, useLoaderData, useOutletContext } from "react-router-dom";
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
  const { user } = useOutletContext();

  return (
    <>
      <Outlet context={{ data, searchValues, user }} />
    </>
  );
};
export default WarLayout;
