import { useOutletContext, useLoaderData } from "react-router-dom";
import customFetch from "../../../Utils/customFetch";
import Wrapper from "../../../Wrappers/UserGroup/Views/viewSubgroup";
import { ViewSubgroupTable } from "../../../Components/index";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get(
      "/investment/user-group/all-subgroups"
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const ViewSubgroup = () => {
  const { member } = useOutletContext();
  const { subgroups } = useLoaderData();

  if (subgroups.length === 0) {
    return (
      <Wrapper>
        <h2 className="error">you have not been created in a subgroup yet!</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="title">
        <h2>subgroups</h2>
      </div>
      <div className="title-underline"></div>
      <div className="section-center">
        <ViewSubgroupTable member={member} subgroups={subgroups} />
      </div>
    </Wrapper>
  );
};
export default ViewSubgroup;
