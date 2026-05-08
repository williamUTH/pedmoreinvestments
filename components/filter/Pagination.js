export default function Pagination({
  getPaginationGroup,
  currentPage,
  pages,
  next,
  prev,
  handleActive,
}) {
  return (
    <>
      {getPaginationGroup.length > 0 && (
        <div className="pagination-wrap">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              {/* Previous button */}
              {currentPage > 1 && (
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={prev}
                    aria-label="Previous"
                  >
                    <i className="fas fa-angle-left" />
                  </button>
                </li>
              )}

              {/* Page numbers */}
              {getPaginationGroup.map((item) => (
                <li
                  key={item}
                  className={`page-item ${
                    currentPage === item ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handleActive(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}

              {/* Next button */}
              {currentPage < pages && (
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={next}
                    aria-label="Next"
                  >
                    <i className="fas fa-angle-right" />
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
