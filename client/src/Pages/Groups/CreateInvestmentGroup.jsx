import Wrapper from "../../Wrappers/Investments/investmentcreateGroups";
import { FormInput, SelectOption } from "../../Components/index";
import { INVESTMENTS } from "../../../../Utils/Constants/constants";
import { Form } from "react-router-dom";
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
            <SelectOption name="investment" list={Object.values(INVESTMENTS)} />
            <FormInput type="number" name="members" placeholder="100" />
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
