import { Outlet } from "react-router-dom";
import Wrapper from "../../Wrappers/DashboardLayout/dashboardLayout";
import { BigSidebar, DashboardNavbar } from "../../Components/index";
import { useState, useContext, createContext } from "react";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const [isBigSidebar, setIsBigSidebar] = useState(false);

  const openBigSidebar = () => {
    setIsBigSidebar(true);
  };
  const closeBigSidebar = () => {
    setIsBigSidebar(false);
  };

  return (
    <DashboardContext.Provider
      value={{ isBigSidebar, openBigSidebar, closeBigSidebar }}
    >
      <Wrapper>
        <div className="sidebar">
          <BigSidebar />
        </div>
        <div className="navbar">
          <DashboardNavbar />
        </div>
        <Outlet />
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const UseDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
