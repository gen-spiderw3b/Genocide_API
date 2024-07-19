import { Outlet, useLoaderData } from "react-router-dom";
import Wrapper from "../../Wrappers/UserGroup/userLayout";
import { MyGroupInvestment } from "../../Components/index";
import customFetch from "../../Utils/customFetch";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/investment/user-group/get-member/${params.groupId}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

const UserLayout = () => {
  const { test } = useLoaderData();
  console.log(test);
  return (
    <Wrapper>
      <MyGroupInvestment />
      <div className="main">
        <Outlet />
      </div>
    </Wrapper>
  );
};
export default UserLayout;
