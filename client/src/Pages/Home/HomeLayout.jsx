import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../Components/index";
import Wrapper from "../../Wrappers/HomeLayout/homeLayout";
const HomeLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
      <Footer className="footer" />
    </Wrapper>
  );
};
export default HomeLayout;
