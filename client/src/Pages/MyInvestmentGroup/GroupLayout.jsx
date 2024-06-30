import { Outlet } from "react-router-dom";
import { InvestmentSidebar, InvestmentNavbar } from "../../Components/index";
import Wrapper from "../../Wrappers/Investments/investmentLayout";
const GroupLayout = () => {
  return (
    <Wrapper>
      <div className="sidebar">
        <InvestmentSidebar />
      </div>
      <div className="main">
        <InvestmentNavbar />
        <Outlet />
      </div>
    </Wrapper>
  );
};
export default GroupLayout;
