export interface IPagination{
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
  }
