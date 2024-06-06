import { SelectOption } from "../index";
import { Form, useSubmit, Link, useOutletContext } from "react-router-dom";
import { GAMES, GOALS } from "../../../../Utils/Constants/constants";
import Wrapper from "../../Wrappers/SearchContainer/search";

const SearchContainer = () => {
  const { searchValues } = useOutletContext();
  const { games, goals } = searchValues;
  const submit = useSubmit();

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search games</h5>
        <div className="form-center">
          <SelectOption
            labelText="games"
            name="games"
            list={["allGames", ...Object.values(GAMES)]}
            defaultValue={games}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <SelectOption
            labelText="goals"
            name="goals"
            list={["allGoals", ...Object.values(GOALS)]}
            defaultValue={goals}
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
