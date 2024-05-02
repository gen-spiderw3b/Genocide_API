import { Link } from "react-router-dom";
import Wrapper from "../../Wrappers/Navbar/navbar";
const Navbar = () => {
  return (
    <Wrapper>
      <div id="nav-container">
        <div className="header">
          <Link to="/">genocide</Link>
        </div>
        <div className="login">
          <Link to="/register">register</Link>
          <Link to="/login">login</Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
