import Wrapper from "../../Wrappers/Dashboard/viewHeadline";
import { DashViewPagination } from "../../Components";
import customFetch from "../../Utils/customFetch";
import { useLoaderData } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch.get("/dash/view-headline", { params });
    return data;
  } catch (error) {
    return error;
  }
};

const DashViewHeadline = () => {
  const { viewHeadline, numOfPages, currentPage } = useLoaderData();
  return (
    <Wrapper>
      <div className="section-center">
        {viewHeadline.map((item) => {
          const { _id, category, headline, desc, link } = item;
          return (
            <article className="article" key={_id}>
              <h3 className="category">{category}</h3>
              <h5 className="headline">{headline}</h5>
              <div className="desc">
                <p>{desc}</p>
              </div>
              <p className="link">
                <a href={link} target="_blank">
                  {link}
                </a>
              </p>
            </article>
          );
        })}

        <div className="btn-container">
          {numOfPages > 1 ? (
            <DashViewPagination
              numOfPages={numOfPages}
              currentPage={currentPage}
            />
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
};
export default DashViewHeadline;
