import Wrapper from "../../../Wrappers/Investments/investmentSidebar";
import { subLinks } from "../../../Utils/InvestmentData";
import { Link } from "react-router-dom";
const InvestmentSidebar = () => {
  return (
    <Wrapper>
      {subLinks.map((items) => {
        const { page, headline, links } = items;

        return (
          <article key={page}>
            <div className="title">
              <h5 className="headline">{headline}</h5>
              <div className="title-underline"></div>
              <div className="navbar"></div>
              <div className="links">
                {links.map((items) => {
                  const { id, label, icon, url } = items;
                  return (
                    <ul key={id}>
                      <Link to={url}>
                        {icon}
                        {label}
                      </Link>
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
export default InvestmentSidebar;
