import Wrapper from "../../Wrappers/DashNavbar/dashNavbar";
import { FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UseDashboardContext } from "../../Pages/Dashboard/DashboardLayout";
const DashboardNavbar = () => {
  const { toggleSidebar } = UseDashboardContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <h2>
            <Link to="/" className="logo">
              genocide
            </Link>
          </h2>
        </div>
        <div className="btn-container">toggle/logout</div>
        <h3>payment</h3>
        <Link to="version-info" className="logo info">
          developer info
        </Link>
      </div>
    </Wrapper>
  );
};
export default DashboardNavbar;
