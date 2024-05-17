import Wrapper from "../../Wrappers/SmallSidebar/smallSidebar";
import { UseDashboardContext } from "../../Pages/Dashboard/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import links from "../../Utils/Data";
import { NavLink } from "react-router-dom";
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
          <div className="nav-links">
            {links.map((items) => {
              const { text, path, icon } = items;
              return (
                <NavLink
                  to={path}
                  key={text}
                  onClick={toggleSidebar}
                  className="nav-link"
                  end
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
