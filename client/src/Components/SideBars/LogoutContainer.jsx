import { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { UseDashboardContext } from "../../Pages/Dashboard/DashboardLayout";
import Wrapper from "../../Wrappers/LogoutContainer/logoutContainer";
const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = UseDashboardContext();

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
