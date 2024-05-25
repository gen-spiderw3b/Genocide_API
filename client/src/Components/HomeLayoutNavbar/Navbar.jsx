import { Link } from "react-router-dom";
import Wrapper from "../../Wrappers/Navbar/navbar";
import PropTypes from "prop-types";

const Navbar = ({ header, register, login }) => {
  return (
    <Wrapper>
      <div className="nav-container">
        <div className="header">
          <header>
            <Link to="/">{header}</Link>
          </header>
        </div>
        <div className="login">
          <Link to="/register">{register}</Link>
          <Link to="/login">{login}</Link>
        </div>
      </div>
    </Wrapper>
  );
};
Navbar.propTypes = {
  header: PropTypes.string,
  register: PropTypes.string,
  login: PropTypes.string,
};
export default Navbar;
