import { Form, useNavigation, redirect } from "react-router-dom";
import { FormInput } from "../../Components/index";
import Wrapper from "../../Wrappers/Login/login";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";

//Action
// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/user/login", data);
    toast.success("You Are Logged In!");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
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
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "submit"}
        </button>
      </Form>
    </Wrapper>
  );
};
export default Login;
