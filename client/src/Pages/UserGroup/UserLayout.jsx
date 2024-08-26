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
          return (
            <article key={pageId}>
              <div className="title">
                <h5 className="headline">{page}</h5>
                <div className="title-underline"></div>
                <div className="navbar"></div>
                <div className="links">
                  {links.map((items) => {
                    const { id, label, url } = items;

                    if (
                      label === "create headline" &&
                      member.permission.headline !== true
                    )
                      return;
                    if (
                      label === "create schedule" &&
                      member.permission.schedule !== true
                    )
                      return;
                    if (
                      label === "create sub groups" &&
                      member.permission.subgroups !== true
                    )
                      return;
                    if (
                      label === "create link" &&
                      member.permission.subgroup_link !== true
                    )
                      return;
                    if (
                      label === "promotion" &&
                      member.permission.promotion !== true
                    )
                      return;
                    if (
                      label === "delete headline" &&
                      member.permission.delete_headline !== true
                    )
                      return;
                    if (
                      label === "delete schedule" &&
                      member.permission.delete_schedule !== true
                    )
                      return;
                    if (
                      label === "delete sub groups" &&
                      member.permission.delete_subgroups !== true
                    )
                      return;
                    if (
                      label === "headline news" &&
                      member.permission.view_headline !== true
                    )
                      return;
                    if (
                      label === "view schedule" &&
                      member.permission.view_schedule !== true
                    )
                      return;
                    if (
                      label === "view subgroup" &&
                      member.permission.view_subgroup !== true
                    )
                      return;
                    if (
                      label === "messages" &&
                      member.permission.view_messages !== true
                    )
                      return;
                    if (
                      label === "view all links" &&
                      member.permission.view_all_links !== true
                    )
                      return;

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
        <Outlet context={{ member }} />
      </div>
    </Wrapper>
  );
};
export default UserLayout;
