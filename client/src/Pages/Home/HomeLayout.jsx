import { Outlet } from "react-router-dom";
import { Footer } from "../../Components/index";
import Wrapper from "../../Wrappers/HomeLayout/homeLayout";
const HomeLayout = () => {
  return (
    <Wrapper>
      <Outlet />
      <Footer className="footer" />
    </Wrapper>
  );
};
export default HomeLayout;
