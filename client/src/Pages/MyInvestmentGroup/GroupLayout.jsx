import { Outlet, useLoaderData } from "react-router-dom";
import Wrapper from "../../Wrappers/Investments/investmentLayout";
import customFetch from "../../Utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get(
      "/investment/group/get-all-user-groups"
    );
    return data;
  } catch (error) {
    return error;
  }
};

const GroupLayout = () => {
  const { group } = useLoaderData();
  return (
    <Wrapper>
      <div className="main">
        <Outlet context={{ group }} />
      </div>
    </Wrapper>
  );
};
export default GroupLayout;
