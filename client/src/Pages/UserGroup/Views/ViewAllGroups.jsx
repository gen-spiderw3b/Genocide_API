import { useLoaderData } from "react-router-dom";
import customFetch from "../../../Utils/customFetch";
import Wrapper from "../../../Wrappers/UserGroup/Views/viewGroups";
import {
  ViewSubgroupTable,
  ViewAllGroupTable,
} from "../../../Components/index";
import { useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/investment/user-group/all-groups/${params.groupId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const ViewAllGroups = () => {
  const { subgroups, groupMembers } = useLoaderData();
  const [Btn, setBtn] = useState(false);

  if (subgroups.length === 0 && groupMembers.length === 0) {
    return (
      <Wrapper>
        <h2 className="error">you have not been created in a subgroup yet!</h2>
      </Wrapper>
    );
  }
  const handleBtn = () => {
    setBtn(!Btn);
  };

  return (
    <Wrapper>
      <div className="title">
        <h2>{Btn ? "SubGroup Members" : "All Group Members"}</h2>
      </div>
      <div className="title-underline"></div>
      <button type="button" onClick={handleBtn} className="change-btn">
        {Btn ? "All Group Members" : "SubGroup Members"}
      </button>
      <div className="section-center">
        {Btn ? (
          <ViewSubgroupTable subgroups={subgroups} />
        ) : (
          <ViewAllGroupTable groupMembers={groupMembers} />
        )}
      </div>
    </Wrapper>
  );
};
export default ViewAllGroups;
