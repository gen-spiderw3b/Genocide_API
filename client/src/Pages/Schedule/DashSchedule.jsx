import { Form, redirect } from "react-router-dom";
import { FormInput } from "../../Components/index";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";
import Wrapper from "../../Wrappers/UserGroup/Schedule/createSchedule";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/dash/create-schedule", data);
    toast.success("This Schedule Has Been Created!");
    return redirect("../");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const DashSchedule = () => {
  return (
    <Wrapper>
      <div className="title">
        <h1>
          create <span>schedule</span>
        </h1>
      </div>
      <div className="title-underline"></div>
      <Form method="post" className="form">
        <FormInput type="text" name="title" placeholder="title" />
        <FormInput type="date" name="start" />
        <FormInput type="time" name="start_time" />
        <FormInput type="date" name="end" />
        <FormInput type="time" name="end_time" />
        <button type="submit" className="btn btn-block">
          create schedule
        </button>
      </Form>
    </Wrapper>
  );
};
export default DashSchedule;
