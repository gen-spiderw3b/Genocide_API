import { Link } from "react-router-dom";
import Wrapper from "../../wrappers/HomeLayout/homeLayoutNavbar";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div>
          <h2 className="header">
            <Link to="/">genocide</Link>
          </h2>
        </div>
        <Link to="/login" className="login">
          login
        </Link>
      </div>
    </Wrapper>
  );
};
export default Navbar;
