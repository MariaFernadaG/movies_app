import React from "react";
import { IPagination } from "../interfaces/types/IPagination"; 

const Pagination: React.FC<IPagination> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {

      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...');
      } else if (currentPage >= totalPages - 2) {
       
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...');
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-wrap items-center justify-center space-x-2 space-y-2 sm:space-y-0 sm:space-x-4 my-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded border border-primary  hover:bg-gray-200 disabled:opacity-50 text-sm sm:text-base text-primary"
      >
        &lt;
      </button>
      {renderPageNumbers().map((page, index) => {
        const isEllipsis = typeof page !== "number";

        return isEllipsis ? (
          <span key={index} className="px-2 py-4 text-sm sm:text-base">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded border text-sm sm:text-base ${
              currentPage === page
                ? "bg-primary text-white border-primary"
                : "border-primary text-primary hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded border border-primary  hover:bg-gray-200 disabled:opacity-50 text-sm sm:text-base text-primary"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
