import { Form } from "react-router-dom";
import { FormInput } from "../index";

const CreateGroupForm = () => {
  return (
    <>
      <Form method="POST" className="form">
        <FormInput type="text" name="groupName" placeholder="GroupName" />
        <FormInput
          type="number"
          name="numOfPlayers"
          placeholder="how many players"
        />
        <button type="submit" className="btn-block">
          submit
        </button>
      </Form>
    </>
  );
};
export default CreateGroupForm;
