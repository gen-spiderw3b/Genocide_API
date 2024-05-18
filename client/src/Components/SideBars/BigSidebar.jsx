import Wrapper from "../../Wrappers/BigSidebar/bigSidebar";
import { NavLinks } from "../index";
import { UseDashboardContext } from "../../Pages/Dashboard/DashboardLayout";
const BigSidebar = () => {
  const { showSidebar } = UseDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>genocide</header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
