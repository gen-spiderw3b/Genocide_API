import { Form } from "react-router-dom";
import FormInput from "../../Components/FormInput/FormInput";
import SelectOption from "../../Components/FormInput/SelectOption";
import Wrapper from "../../Wrappers/War/createGroup";
import { GAMES, GOALS } from "../../../../Utils/Constants/constants";
const CreateGroup = () => {
  return (
    <Wrapper>
      <header>create war group</header>
      <Form method="post" className="form">
        <SelectOption
          name="games"
          labelText="games"
          defaultValue={GAMES.DEAD_BY_DAYLIGHT}
          list={Object.values(GAMES)}
        />
        <FormInput type="text" name="groupName" placeholder="GroupName" />
        <FormInput
          type="number"
          name="players"
          placeholder="Number Of Players"
        />
        <SelectOption
          name="goals"
          labelText="goals"
          defaultValue={GOALS.NONE}
          list={Object.values(GOALS)}
        />
        <label htmlFor="desc">description</label>
        <textarea name="desc" id="desc" className="text-area"></textarea>
        <button type="submit" className="btn-block">
          create group
        </button>
      </Form>
    </Wrapper>
  );
};
export default CreateGroup;
