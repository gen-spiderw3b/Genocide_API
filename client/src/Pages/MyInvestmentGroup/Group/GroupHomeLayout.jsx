import { Outlet } from "react-router-dom";
import Wrapper from "../../../Wrappers/Investments/MyGroup/groupLayout";
import { MyGroupInvestment } from "../../../Components/index";
const GroupHomeLayout = () => {
  return (
    <Wrapper>
      <MyGroupInvestment />
      <div className="main">
        <Outlet />
      </div>
    </Wrapper>
  );
};
export default GroupHomeLayout;
