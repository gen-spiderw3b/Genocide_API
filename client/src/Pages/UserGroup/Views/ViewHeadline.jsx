import Wrapper from "../../../Wrappers/UserGroup/Headline/viewHeadline";
import customFetch from "../../../Utils/customFetch";
import { useLoaderData } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/investment/user-group/view-headline/${params.groupId}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

const ViewHeadline = () => {
  const { viewHeadline } = useLoaderData();
  if (viewHeadline.length === 0) {
    return (
      <Wrapper>
        <h1 className="no-news">no headline news!</h1>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="title">
        <h3>
          headline <span>news</span>
        </h3>
      </div>
      <div className="title-underline"></div>
      <div className="section-center">
        {viewHeadline.map((item) => {
          const { _id, category, headline, desc, link = "none" } = item;
          return (
            <article key={_id} className="article">
              <div className="article-center">
                <h2 className="category">{category}</h2>
                <div className="headline">
                  <h3>{headline}</h3>
                </div>
                <div className="desc">
                  <p className="link">
                    <a href={link} target="_blank">
                      {link}
                    </a>
                  </p>
                  <p>{desc}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default ViewHeadline;
