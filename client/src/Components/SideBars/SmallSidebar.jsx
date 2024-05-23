import { UseDashboardContext } from "../../Pages/Dashboard/DashboardLayout";
import Wrapper from "../../Wrappers/SmallSidebar/smallSidebar";
import { FaTimes } from "react-icons/fa";
import { NavLinks } from "../index";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = UseDashboardContext();

  return (
    <Wrapper>
      <div className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-container">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <div className="sidebar-links">
            <NavLinks />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
