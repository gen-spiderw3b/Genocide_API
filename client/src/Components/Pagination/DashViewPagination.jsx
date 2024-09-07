import PropTypes from "prop-types";
import Wrapper from "../../Wrappers/Pageination/dashBtnContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const DashViewPagination = ({ numOfPages, currentPage }) => {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
      <button
        type="button"
        className=" btn prev-btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
      >
        prev
        {<HiChevronDoubleLeft />}
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={`btn page-btn ${
                pageNumber === currentPage && "active"
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className=" btn next-btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        {<HiChevronDoubleRight />}
      </button>
    </Wrapper>
  );
};
DashViewPagination.propTypes = {
  numOfPages: PropTypes.number,
  currentPage: PropTypes.number,
};
export default DashViewPagination;
