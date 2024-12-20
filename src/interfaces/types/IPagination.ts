export interface IPagination{
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
  }
  export interface ISearchParams {
    per_page?: number;
    page?: number;
    search?: string;
  }