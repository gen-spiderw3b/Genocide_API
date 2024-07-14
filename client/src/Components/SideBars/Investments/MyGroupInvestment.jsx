import Wrapper from "../../../Wrappers/Investments/MyGroup/myGroupInvestment";
import { subLinks } from "../../../Utils/InvestmentData";
import { Link, useOutletContext } from "react-router-dom";
const MyGroupInvestment = () => {
  const { group } = useOutletContext();
  console.log(group);

  return (
    <Wrapper>
      {subLinks.map((items) => {
        const { pageId, page, links } = items;
        // if (page === "president" && viewer.role !== "president") return;
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
                      <Link to={url}>{label}</Link>
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
export default MyGroupInvestment;
