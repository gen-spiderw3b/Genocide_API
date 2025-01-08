import Wrapper from "../../Wrappers/Education/education";
import { Outlet, useLoaderData } from "react-router-dom";
import customFetch from "../../Utils/customFetch";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("education/courses");
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Education = () => {
  const { courses } = useLoaderData();
  return (
    <Wrapper>
      <Outlet context={{ courses }} />
    </Wrapper>
  );
};
export default Education;
