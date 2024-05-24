import { Outlet } from "react-router-dom";
import { CreateGroupForm } from "../../Components/index";
import { useState } from "react";
import Wrapper from "../../Wrappers/War/war";

const War = () => {
  const [isCreateGroupForm, setIsGroupForm] = useState(false);

  const createGroup = () => {
    setIsGroupForm(!isCreateGroupForm);
  };
  return (
    <Wrapper>
      <nav className="war-nav">
        <div className="nav-center">
          <button className="btn-component create-group" onClick={createGroup}>
            create group
          </button>
          <button className="btn-component browse-group">browse group</button>
        </div>
        <div className="content">
          {isCreateGroupForm ? <CreateGroupForm /> : null}
        </div>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
export default War;
