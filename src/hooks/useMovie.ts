import { useEffect, useState } from 'react';
import { getMovies } from '../app/api/service/movieService';
import { IMovie } from '@/interfaces/types/Movie';

export const useMovies = (currentPage: number, itemPage: number) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try { 
        setIsLoading(true);
      
        const response = await getMovies(currentPage, itemPage); 
        setMovies(response.data); 
        setTotalPages(response.pagination.maxPage); 
      } catch (err: any) {
        setError(err.message || 'Failed to load movies');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage, itemPage]); 

  return { movies, isLoading, error, totalPages };
};
