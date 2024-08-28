import customFetch from "../../../Utils/customFetch";
import Wrapper from "../../../Wrappers/UserGroup/Links/viewAllLinks";
import { ViewSubgroupLink, ViewHeadlineLink } from "../../../Components/index";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/investment/user-group/view-all-links/${params.groupId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const ViewAllLinks = () => {
  const [isTrue, setIsTrue] = useState(false);
  const { subgroup, headline } = useLoaderData();

  const handleBtn = () => {
    setIsTrue(!isTrue);
  };
  return (
    <Wrapper>
      <div className="section-center">
        <p className="btn-text" onClick={handleBtn}>
          {isTrue ? "headline Links" : "subgroup links"}
        </p>
        {isTrue ? (
          <ViewSubgroupLink subgroup={subgroup} handleBtn={handleBtn} />
        ) : (
          <ViewHeadlineLink headline={headline} handleBtn={handleBtn} />
        )}
      </div>
    </Wrapper>
  );
};
export default ViewAllLinks;
