import { useLoaderData } from "react-router-dom";
import Wrapper from "../../../Wrappers/War/World Of Warcraft/wow";
import customFetch from "../../../Utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/war/wow/browse-wow-groups");
    return data;
  } catch (error) {
    return error;
  }
};

const Wow = () => {
  const { wowGroups, users, totalGroups } = useLoaderData();
  console.log(wowGroups, users);

  return (
    <Wrapper>
      <h4 className="total-groups">{totalGroups} groups available</h4>
      <div className="section-center">
        <article></article>
      </div>
    </Wrapper>
  );
};
export default Wow;
