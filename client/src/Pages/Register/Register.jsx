import Wrapper from "../../Wrappers/Register/register";
import { FormInput } from "../../Components/index";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <div className="header">
          <h3>register</h3>
        </div>
        <FormInput
          type="text"
          name="firstName"
          placeholder="FirstName"
          defaultValue="test1"
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="LastName"
          defaultValue="test1"
        />
        <FormInput
          type="email"
          name="email"
          placeholder="email"
          defaultValue="test1@gmail.com"
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          defaultValue="123456"
        />
        <FormInput
          type="text"
          name="state"
          placeholder="State"
          defaultValue="alabama"
        />
        <FormInput
          type="text"
          name="city"
          placeholder="city"
          defaultValue="birmingham"
        />
        <FormInput
          type="number"
          name="phoneNumber"
          placeholder="xxx-xxx-xxxx"
          defaultValue="123-456-7890"
        />
        <button type="button" className="btn btn-block">
          register
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;
