import { Outlet } from "react-router-dom";
import Wrapper from "../../wrappers/HomeLayout/homeLayout";
import { HomeLayoutNavbar } from "../../components/index";
const HomeLayout = () => {
  return (
    <Wrapper>
      <HomeLayoutNavbar />
      <Outlet />
    </Wrapper>
  );
};
export default HomeLayout;
