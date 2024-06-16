import { Form, useLoaderData } from "react-router-dom";
import Wrapper from "../../Wrappers/War/myGroups";
import { useState } from "react";
import customFetch from "../../Utils/customFetch";
import { People } from "../../Components/index";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/war/my-group");
    return data;
  } catch (error) {
    return error;
  }
};

const MyGroups = () => {
  const [isPeople, setIsPeople] = useState(false);
  const { myGroup } = useLoaderData();

  const togglePeople = () => {
    setIsPeople(!isPeople);
  };
  return (
    <Wrapper>
      <div className="title">
        <h2>
          my <span>groups</span>
        </h2>
      </div>
      <div className="title-underline"></div>
      <div className="section-center">
        {myGroup.map((items) => {
          const {
            _id,
            groupName,
            players,
            desc,
            games,
            joinedBy,
            goals,
            url,
            people,
            createdBy,
          } = items;

          return (
            <article key={_id} className="article">
              <h3 className="games">{games}</h3>
              <h4 className="groupName">{groupName}</h4>
              <h5 className="players">
                {joinedBy.length} / {players}
              </h5>
              <h5 className="goals">{goals}</h5>
              <div className="discord">
                <a href={url} target="_blank">
                  {url}
                </a>
              </div>
              <div className="btn-container">
                <Form method="post" action={`../delete-group/${_id}`}>
                  <button type="submit" className="btn join-btn">
                    delete group
                  </button>
                </Form>
                <div
                  className={isPeople ? "people show-people" : "people"}
                  onClick={togglePeople}
                >
                  <People people={people} groupId={_id} createdBy={createdBy} />
                </div>
              </div>
              <div className="desc">
                <p>{desc ? desc : "none"}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default MyGroups;
