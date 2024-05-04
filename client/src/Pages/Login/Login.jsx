import { FormInput } from "../../Components/index";
import Wrapper from "../../Wrappers/Login/login";
const Login = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <div className="header">
          <h3>login</h3>
        </div>
        <FormInput type="email" name="email" id="email" placeholder="Email" />
        <FormInput
          type="password"
          name="password"
          id="password"
          placeholder="Password..."
        />
        <button type="button" className="btn btn-block">
          login
        </button>
      </form>
    </Wrapper>
  );
};
export default Login;
