import { NavLink } from "react-router-dom";
import { UseDashboardContext } from "../../Pages/Dashboard/DashboardLayout";
import subLinks from "../../Utils/Data";
import PropTypes from "prop-types";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar } = UseDashboardContext();

  return (
    <div className="sidebar-links">
      {subLinks.map((items) => {
        const { pageId, page, links } = items;
        return (
          <article key={pageId}>
            <h2>{page}</h2>
            <div className="sidebar-sublinks">
              {links.map((link) => {
                const { id, label, icon, url } = link;
                return (
                  <NavLink
                    key={id}
                    to={url}
                    onClick={isBigSidebar ? null : toggleSidebar}
                    end
                  >
                    {icon}
                    {label}
                  </NavLink>
                );
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
};
NavLinks.propTypes = {
  isBigSidebar: PropTypes.bool,
};
export default NavLinks;
