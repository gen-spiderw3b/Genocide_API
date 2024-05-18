import { NavLink } from "react-router-dom";
import { UseDashboardContext } from "../../Pages/Dashboard/DashboardLayout";
import links from "../../Utils/Data";
import PropTypes from "prop-types";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = UseDashboardContext();

  return (
    <div className="nav-links">
      {links.map((items) => {
        const { text, path, icon } = items;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
NavLinks.propTypes = {
  isBigSidebar: PropTypes.bool,
};
export default NavLinks;
