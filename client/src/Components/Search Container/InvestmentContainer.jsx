import { SelectOption } from "../index";
import { Form, useSubmit, Link } from "react-router-dom";
import { INVESTMENTS } from "../../../../Utils/Constants/constants";
import Wrapper from "../../Wrappers/SearchContainer/search";

const SearchContainer = () => {
  //   const { searchValues } = useOutletContext();
  //   const {  } = searchValues;
  const submit = useSubmit();

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search investment groups</h5>
        <div className="form-center">
          <SelectOption
            labelText="investments"
            name="investments"
            list={["allInvestments", ...Object.values(INVESTMENTS)]}
            defaultValue="investments"
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
        </div>
        <Link
          to="/dashboard/war/browse-groups"
          className="btn form-btn delete-btn"
        >
          Reset Search Values
        </Link>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
