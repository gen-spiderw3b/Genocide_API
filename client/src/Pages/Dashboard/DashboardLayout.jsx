import { Outlet, useLoaderData, redirect, useNavigate } from "react-router-dom";
import Wrapper from "../../Wrappers/DashboardLayout/dashboardLayout";
import { useState, useContext, createContext } from "react";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
import {
  BigSidebar,
  SmallSidebar,
  DashboardNavbar,
} from "../../Components/index";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();
const DashboardLayout = () => {
  const { user, member } = useLoaderData();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("user/logut");
    toast.success("Logging out...");
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
              <Outlet context={{ user, member }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const UseDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
