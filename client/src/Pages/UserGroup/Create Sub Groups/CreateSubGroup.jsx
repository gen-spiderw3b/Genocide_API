import { Form } from "react-router-dom";
import { FormInput } from "../../../Components";
import Wrapper from "../../../Wrappers/UserGroup/SubGroup/createSubGroup";
import { toast } from "react-toastify";
import customFetch from "../../../Utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/investment/user-group/create-subgroup", data);
    toast.success("SubGroup has been created!");
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const CreateSubGroup = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <FormInput type="text" name="subgroupName" placeholder="team1" />
        <button type="submit" className="btn btn-block">
          create subGroup
        </button>
      </Form>
    </Wrapper>
  );
};
export default CreateSubGroup;
