import React from "react";
import { IPagination } from "../interfaces/types/IPagination"; // Ajuste o caminho conforme necessário

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
        pages.push(1, 2, 3, 4, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, currentPage - 1, currentPage, currentPage + 1, totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-wrap items-center justify-center space-x-2 space-y-2 sm:space-y-0 sm:space-x-4 my-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
      >
        &lt;
      </button>
      {renderPageNumbers().map((page, index) => {
        const isEllipsis = typeof page !== "number";

        return isEllipsis ? (
          <span key={index} className="px-3 py-2">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-2 rounded border ${
              currentPage === page
                ? "bg-primary text-white border-primary"
                : "border-gray-300 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
