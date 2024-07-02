import { Outlet } from "react-router-dom";
import { InvestmentSidebar } from "../../Components/index";
import Wrapper from "../../Wrappers/Investments/investmentLayout";
const GroupLayout = () => {
  return (
    <Wrapper>
      <div className="sidebar">
        <InvestmentSidebar />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </Wrapper>
  );
};
export default GroupLayout;
