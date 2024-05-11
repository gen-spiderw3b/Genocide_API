import { Outlet } from "react-router-dom";
import Wrapper from "../../Wrappers/DashboardLayout/dashboardLayout";
import { BigSidebar, DashboardNavbar } from "../../Components/index";
const DashboardLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <BigSidebar />
        <div>
          <DashboardNavbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default DashboardLayout;
