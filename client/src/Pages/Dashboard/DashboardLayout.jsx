import { Outlet } from "react-router-dom";
import Wrapper from "../../Wrappers/DashboardLayout/dashboardLayout";
import { useState, useContext, createContext } from "react";
import {
  BigSidebar,
  SmallSidebar,
  DashboardNavbar,
} from "../../Components/index";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: "ghost" };
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logoutUser = async () => {
    console.log("logout user");
  };
  return (
    <DashboardContext.Provider
      value={{ showSidebar, toggleSidebar, logoutUser, user }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div className="navbar">
            <DashboardNavbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const UseDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
