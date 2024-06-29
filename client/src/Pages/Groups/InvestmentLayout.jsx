import { Outlet, useLoaderData, useOutletContext } from "react-router-dom";
import customFetch from "../../Utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch.get(
      "/investment/browse-investment-group",
      { params }
    );

    return { data };
  } catch (error) {
    return error;
  }
};

const InvestmentLayout = () => {
  const { data } = useLoaderData();
  const { user } = useOutletContext();

  return (
    <div>
      <Outlet context={{ data, user }} />
    </div>
  );
};
export default InvestmentLayout;
