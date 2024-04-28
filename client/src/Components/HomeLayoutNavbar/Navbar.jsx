import { Link } from "react-router-dom";
import Wrapper from "../../Wrappers/Navbar/navbar";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="header">
        <Link to="/">genocide</Link>
      </div>
      <div className="login">
        <Link to="/login">login</Link>
      </div>
    </Wrapper>
  );
};
export default Navbar;
