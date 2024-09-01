import Wrapper from "../../Wrappers/UserProfile/userProfile";
import customFetch from "../../Utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Profile,
  InvestmentProfile,
  ImageProfile,
  EducationProfile,
} from "../../Components/index";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/user-profile");
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch("/users/update-profile", data);
    toast.success("you have updated this user!");
    return window.location.reload();
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const UserProfile = () => {
  const { user, investmentGroup } = useLoaderData();
  return (
    <Wrapper>
      <div className="images">
        <ImageProfile pic={user} />
      </div>

      <div className="profile">
        <Profile user={user} />
      </div>

      <div className="investment-profile">
        <InvestmentProfile group={investmentGroup} user={user} />
      </div>

      <div className="education">
        <EducationProfile />
      </div>
    </Wrapper>
  );
};
export default UserProfile;
