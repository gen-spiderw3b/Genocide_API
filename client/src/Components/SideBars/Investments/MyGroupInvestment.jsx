import Wrapper from "../../../Wrappers/Investments/MyGroup/myGroupInvestment";
import { subLinks } from "../../../Utils/InvestmentData";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const MyGroupInvestment = ({ member, group }) => {
  return (
    <Wrapper>
      <div className="title">
        <h3>{group.groupName}</h3>
      </div>
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
    </Wrapper>
  );
};
MyGroupInvestment.propTypes = {
  member: PropTypes.object,
  group: PropTypes.object,
};
export default MyGroupInvestment;
