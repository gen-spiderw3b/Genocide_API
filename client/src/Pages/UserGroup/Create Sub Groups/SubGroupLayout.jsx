import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Wrapper from "../../../Wrappers/UserGroup/SubGroup/SubLayout";
const SubGroupLayout = () => {
  return (
    <Wrapper>
      <div className="nav">
        <NavLink className="link" to="../">
          Home
        </NavLink>
        <NavLink className="link" to="create-subgroup">
          create subGroup
        </NavLink>
        <NavLink className="link" to="view-subgroups">
          view subGroups
        </NavLink>
      </div>
      <Outlet />
    </Wrapper>
  );
};
export default SubGroupLayout;
