import { useEffect, useState } from 'react';
import { getMovies } from '../app/api/service/movieService';
import { IMovie } from '@/interfaces/types/IMovie';

export const useMovies = (currentPage: number, itemPage: number) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try { 
        setIsLoading(true);
        setError(null);  
        const response = await getMovies(currentPage, itemPage); 
        setMovies(response.data); 
        setTotalPages(response.pagination.maxPage); 
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || 'Failed to load movies');
        } else {
          setError('An unknown error occurred');
        }
      }
      setIsLoading(false);      
    };

    fetchMovies();
  }, [currentPage, itemPage]); 

  return { movies, isLoading, error, totalPages };
};
