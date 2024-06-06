import { Form, redirect } from "react-router-dom";
import FormInput from "../../Components/FormInput/FormInput";
import SelectOption from "../../Components/FormInput/SelectOption";
import Wrapper from "../../Wrappers/War/createGroup";
import { GAMES, GOALS } from "../../../../Utils/Constants/constants";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/war/create-group", data);
    toast.success("WarBand Has Been Created!");
    return redirect("../my-groups");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};

const CreateGroup = () => {
  return (
    <Wrapper>
      <div className="warning">
        <h2>warning</h2>
        <ul>
          <li>
            1. create a discord account and create a <span>game</span> server
          </li>
          <li>
            2. go to voice chat and copy the link and paste it in the discord
            link form
          </li>
        </ul>
      </div>
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
        <FormInput type="url" name="url" placeholder="Discord Link" />
        <label htmlFor="desc">description</label>
        <textarea
          name="desc"
          id="desc"
          className="text-area"
          placeholder="Write Here"
        ></textarea>
        <button type="submit" className="btn-block">
          create group
        </button>
      </Form>
    </Wrapper>
  );
};
export default CreateGroup;
