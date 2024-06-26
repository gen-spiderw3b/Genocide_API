import Wrapper from "../../Wrappers/Investments/investmentcreateGroups";
import { FormInput, SelectOption } from "../../Components/index";
import {
  INVESTMENTS,
  MEMBER_COUNT,
  DUES,
} from "../../../../Utils/Constants/constants";
import { Form, redirect } from "react-router-dom";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/investment/create-investment-group", data);
    toast.success("You have Created A Investment Group, Congratz!");
    return redirect("../../../dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};

const CreateInvestmentGroup = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="title">
          <h3>Investment Groups</h3>
          <div className="title-underline"></div>
        </div>
        <div className="form-container">
          <Form method="post" className="form">
            <FormInput type="text" name="groupName" placeholder="GroupName" />
            <SelectOption
              name="investment"
              list={Object.values(INVESTMENTS)}
              defaultValue="Video Game Studio"
            />
            <SelectOption
              name="members"
              list={Object.values(MEMBER_COUNT)}
              defaultValue="1"
            />
            <SelectOption
              name="dues"
              list={Object.values(DUES)}
              defaultValue="100"
            />

            <label htmlFor="area" className="label">
              goals for this group
            </label>
            <textarea
              name="desc"
              id="area"
              className="area"
              placeholder="write here"
              maxLength="200"
            ></textarea>
            <button type="submit" className="btn btn-block">
              submit
            </button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default CreateInvestmentGroup;
