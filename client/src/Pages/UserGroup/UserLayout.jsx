import { Outlet, useLoaderData, NavLink } from "react-router-dom";
import Wrapper from "../../Wrappers/UserGroup/userLayout";
import customFetch from "../../Utils/customFetch";
import { subLinks } from "../../Utils/InvestmentData";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/investment/user-group/get-member/${params.groupId}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

const UserLayout = () => {
  const { member } = useLoaderData();

  return (
    <Wrapper>
      <aside className="aside">
        {subLinks.map((items) => {
          const { pageId, page, links } = items;
          if (page === "create" && member.create !== "create") return;
          if (page === "delete" && member.delete !== "delete") return;
          return (
            <article key={pageId}>
              <div className="title">
                <h5 className="headline">{page}</h5>
                <div className="title-underline"></div>
                <div className="navbar"></div>
                <div className="links">
                  {links.map((items) => {
                    const { id, label, url } = items;
                    return (
                      <ul key={id}>
                        <NavLink to={url}>{label}</NavLink>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </aside>
      <div className="main">
        <Outlet />
      </div>
    </Wrapper>
  );
};
export default UserLayout;
