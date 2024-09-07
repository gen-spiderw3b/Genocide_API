import { Form, redirect } from "react-router-dom";
import customFetch from "../../Utils/customFetch";
import { FormInput, SelectOption } from "../../Components/index";
import Wrapper from "../../Wrappers/UserGroup/Headline/createHeadline";
import { DASHCATEGORY } from "../../../../Utils/Classes/class";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post(`/dash/create-headline/`, data);
    toast.success("New Headline Created!");
    window.location.reload();
    return redirect("../dashboard");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Headline = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="title">
          <h2>
            create <span>headline</span>
          </h2>
        </div>
        <div className="title-underline"></div>
        <Form method="post" className="form">
          <SelectOption
            name="category"
            list={[...Object.values(DASHCATEGORY)]}
          />
          <FormInput type="text" name="headline" placeholder="happy hour" />
          <label htmlFor="link">URL Link</label>
          <input
            className="link"
            id="link"
            type="url"
            name="link"
            placeholder="https://discord.gg/afhpsZgV"
          />
          <br />
          <h6>descritpion</h6>
          <textarea
            name="desc"
            placeholder="write here"
            className="desc"
          ></textarea>
          <button type="submit" className="btn btn-block">
            create headline
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};
export default Headline;
