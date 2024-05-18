import { UseDashboardContext } from "../../Pages/Dashboard/DashboardLayout";
import Wrapper from "../../Wrappers/SmallSidebar/smallSidebar";
import { FaTimes } from "react-icons/fa";
import { NavLinks } from "../index";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = UseDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>genocide</header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
