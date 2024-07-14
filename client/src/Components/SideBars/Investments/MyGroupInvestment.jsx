import Wrapper from "../../../Wrappers/Investments/MyGroup/myGroupInvestment";
import { subLinks } from "../../../Utils/InvestmentData";
import { Link, useOutletContext } from "react-router-dom";
const MyGroupInvestment = () => {
  const { group, member } = useOutletContext();

  //Get User MemberId
  const user = group.map((item) => {
    const { joinedBy } = item;
    let role = joinedBy.find((person) => {
      return person === member._id;
    });
    return role;
  });
  const [person] = user;

  //Get Role
  const role = group.map((item) => {
    const { president } = item;
    return president;
  });
  const [data] = role;

  //Create User
  const viewer = {};
  viewer.id = person;
  viewer.role = data.role;

  return (
    <Wrapper>
      {subLinks.map((items) => {
        // console.log(items);
        const { pageId, page, links } = items;
        if (page === "president" && viewer.role !== "president") return;
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
