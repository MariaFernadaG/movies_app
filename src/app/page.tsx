'use client';

import { useState, useEffect } from 'react';
import { useMovies } from '../hooks/useMovie'; 
import ItemMovie from '../components/ItemMovie';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Pagination from '../components/pagination';
import LoadingSkeleton from '@/components/loadingSkeleton';
import MovieSlider from '@/components/slider';
import { IMovie } from '@/interfaces/types/Movie';

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemPage, setItemPage] = useState<number>(20);
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]); 

  const { movies, isLoading, error, totalPages } = useMovies(currentPage, itemPage);

  useEffect(() => {
   
    if (searchQuery === '') {
      setFilteredMovies(movies); 
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
      setFilteredMovies(filtered); 
    }
  }, [movies, searchQuery]); 

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const hasMovies = filteredMovies && filteredMovies.length > 0;

  if (isLoading) {
    return (
      <div>
        <Navbar onSearch={handleSearch} />
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: itemPage }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar onSearch={handleSearch} /> 
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl text-red-500">Error: {error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} /> 
      
        <MovieSlider movies={filteredMovies} /> 
      

        <div className="grid grid-cols-4 gap-x-8 gap-y-12 mt-8 justify-items-center px-8">
  {hasMovies ? (
    filteredMovies.map((movie) => {
      const posterUrl = movie.image_url || '/path/to/placeholder-image.jpg';
      return (
        <ItemMovie
          key={movie.id || movie.title}
          title={movie.title}
          year={movie.year}
          crew={movie.crew}
          image_url={posterUrl}
          id={movie.id}
          rating={movie.rating}
        />
      );
    })
  ) : (
    <p>No movies available on this page</p>
  )}
</div>


   
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      <Footer />
    </div>
  );
};

export default Home;