import { Form, Link, redirect } from "react-router-dom";
import Wrapper from "../../../Wrappers/UserGroup/Views/contact";
import { FormInput } from "../../../Components/index";
import customFetch from "../../../Utils/customFetch";
import { toast } from "react-toastify";
// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post(
      `/investment/user-group/contact/create-message/${params.groupMemberId}`,
      data
    );
    toast.success("you have sent a message!");
    return redirect("../views/view-subgroup");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Contact = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>contact</h2>
      </div>
      <div className="title-underline"></div>
      <Form method="post" className="form">
        <FormInput
          type="text"
          name="greeting"
          placeholder="hey man what ya doing!"
        />
        <label className="form-label" htmlFor="desc">
          description
        </label>
        <textarea
          className="desc"
          name="desc"
          id="desc"
          placeholder="write here"
        ></textarea>
        <button type="submit" className="btn btn-block">
          send msg
        </button>
      </Form>
      <Link to="../views/view-subgroup" className="cancel btn-block">
        cancel
      </Link>
    </Wrapper>
  );
};
export default Contact;
