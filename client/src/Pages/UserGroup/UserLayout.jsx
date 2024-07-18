import { Outlet } from "react-router-dom";
import Wrapper from "../../Wrappers/UserGroup/userLayout";
import { MyGroupInvestment } from "../../Components/index";

const UserLayout = () => {
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
