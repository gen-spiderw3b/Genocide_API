import customFetch from "../../../Utils/customFetch";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../../../Wrappers/UserGroup/Links/createLink";
import { toast } from "react-toastify";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get(
      "/investment/user-group/view-teamleader-group"
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const CreateLink = () => {
  const { teamLeaderGroup } = useLoaderData();
  const [group] = useState(teamLeaderGroup);
  const [url, setUrl] = useState("");

  //ErrMessage
  if (group.length === 0) {
    return (
      <Wrapper>
        <h3 className="error-msg">you are not a teamLeader of any groups!</h3>
      </Wrapper>
    );
  }
  //End Of ErrMessage

  const { subgroupName, members, _id } = group[0];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { link: url };
    try {
      await customFetch.patch(
        `/investment/user-group/update-link/${_id}`,
        data
      );
      toast.success("you have added a link to this subgroup!");
      setUrl("");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <article className="article">
        <h4 className="groupName">{subgroupName}</h4>
        <ul>
          {members.map((item) => {
            const { _id, firstName } = item;
            return (
              <li key={_id} className="list">
                {firstName}
              </li>
            );
          })}
        </ul>
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="url"
            className="input"
            name="link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://discord.gg/afhpsZgV"
          ></input>
          <button type="submit" className="btn btn-block">
            submit
          </button>
        </form>
      </article>
    </Wrapper>
  );
};
export default CreateLink;
