import { Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../../Wrappers/Register/register";
import { FormInput } from "../../Components/index";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
//Actions
// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/user/register", data);
    toast.success("You have Registered With Genocide!");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
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
          placeholder="State eg:alabama"
          defaultValue="alabama"
        />
        <FormInput
          type="text"
          name="city"
          placeholder="city"
          defaultValue="birmingham"
        />
        <FormInput
          type="text"
          name="phoneNumber"
          placeholder="xxx-xxx-xxxx"
          defaultValue="123-456-7890"
        />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "submit"}
        </button>
      </Form>
    </Wrapper>
  );
};
export default Register;
