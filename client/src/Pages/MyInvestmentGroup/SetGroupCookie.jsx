import customFetch from "../../Utils/customFetch";
import { redirect, Form } from "react-router-dom";
import { toast } from "react-toastify";
import { FormInput } from "../../Components/index";
import Wrapper from "../../Wrappers/Investments/MyGroup/setGroupCookie";
// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ params, request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post(
      `investment/select-group/user-group/${params.id}`,
      data
    );

    toast.success("initalizing group ");
    return redirect(`/dashboard/investment/user-group/${params.id}`);
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const SetGroupCookie = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <Form method="post" className="form">
          <div className="title">
            <h3>Initalize group</h3>
          </div>
          <FormInput type="text" name="uniqueName" placeholder="Special Name" />
          <FormInput type="email" name="email" placeholder="login email" />
          <button type="submit" className="btn btn-block">
            initalize group
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default SetGroupCookie;
