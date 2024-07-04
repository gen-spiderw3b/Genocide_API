import { Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../../Wrappers/Register/register";
import { FormInput, SelectOption } from "../../Components/index";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
import { Navbar } from "../../Components/index";
import { STATES } from "../../../../Utils/Constants/constants";
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
      <Navbar header="genocide" register="register" login="login" />
      <Form method="post" className="form">
        <div className="header">
          <h3>register</h3>
        </div>
        <FormInput type="text" name="firstName" placeholder="FirstName" />
        <FormInput type="text" name="lastName" placeholder="LastName" />
        <FormInput type="email" name="email" placeholder="email" />
        <FormInput type="password" name="password" placeholder="Password" />
        <SelectOption name="state" list={Object.values(STATES)} />
        <FormInput type="text" name="city" placeholder="city" />
        <FormInput type="text" name="phoneNumber" placeholder="xxx-xxx-xxxx" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "submit"}
        </button>
      </Form>
    </Wrapper>
  );
};
export default Register;
