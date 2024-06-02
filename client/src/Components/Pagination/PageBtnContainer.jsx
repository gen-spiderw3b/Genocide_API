import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import {
  // useLocation,
  // Link,
  // useNavigate,
  useOutletContext,
} from "react-router-dom";
import Wrapper from "../../Wrappers/Pageination/PageBtnContainer";
const PageBtnContainer = () => {
  const { numOfPages, currentPage } = useOutletContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  console.log(pages);

  return (
    <Wrapper>
      <button className="btn prev-btn">
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              className={`btn page-btn ${
                pageNumber === currentPage && "active"
              }`}
              key={pageNumber}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="btn next-btn">
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
