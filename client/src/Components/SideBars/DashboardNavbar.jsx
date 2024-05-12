import Wrapper from "../../Wrappers/DashNavbar/dashNavbar";
import { UseDashboardContext } from "../../Pages/Dashboard/DashboardLayout";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const DashboardNavbar = () => {
  const { openBigSidebar } = UseDashboardContext();

  return (
    <Wrapper>
      <div className="column-one">
        <h3 className="logo">
          <Link to="/">genocide</Link>
        </h3>
      </div>
      <div className="column-two">
        <button type="submit" className="btn logout-btn">
          logout
        </button>
        <button className=" open-btn" onClick={openBigSidebar}>
          <FaBars />
        </button>
      </div>
      <div className="column-three">payment info</div>
      <div className="column-four">
        <button type="button" className="version-btn">
          <Link to="version-info">version info</Link>
        </button>
      </div>
    </Wrapper>
  );
};
export default DashboardNavbar;
