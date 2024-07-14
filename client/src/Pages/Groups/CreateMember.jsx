import { Form, redirect, Link } from "react-router-dom";
import customFetch from "../../Utils/customFetch";
import Wrapper from "../../Wrappers/Investments/createMember";
import { FormInput } from "../../Components/index";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post(`/investment/create-member/${params.groupId}`, data);
    toast.success("You Have Joined This Group!");
    return redirect("../../../dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const CreateMember = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <div className="title">
          <h3>create member</h3>
        </div>
        <FormInput type="text" name="name" placeholder="username" />
        <FormInput type="text" name="phoneNumber" placeholder="123-456-7890" />
        <button type="submit" className="btn btn-block">
          create member
        </button>
      </Form>
      <div className="link-container">
        <Link className="btn btn-block" to="../browse-all-groups">
          change mind
        </Link>
      </div>
    </Wrapper>
  );
};
export default CreateMember;
