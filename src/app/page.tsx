'use client';

import { useState, useEffect } from 'react';
import { useMovies } from '../hooks/useMovie'; 
import ItemMovie from '../components/ItemMovie';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Pagination from '../components/pagination';
import LoadingSkeleton from '@/components/loadingSkeleton';
import MovieSlider from '@/components/slider';
import { IMovie } from '@/interfaces/types/IMovie';

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemPage, setItemPage] = useState<number>(20);
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]); 

  // Estado de carregamento da pesquisa
  const [isSearchLoading, setIsSearchLoading] = useState<boolean>(false);

  const { movies, isLoading, error, totalPages } = useMovies(currentPage, itemPage);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredMovies(movies); // Mostra todos os filmes quando não há pesquisa
    } else {
      // Quando a pesquisa está ativa, simula o carregamento
      setIsSearchLoading(true);
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
      setIsSearchLoading(false); // Finaliza o carregamento da pesquisa
    }
  }, [movies, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reseta para a primeira página quando uma nova pesquisa for feita
  };

  const hasMovies = filteredMovies && filteredMovies.length > 0;

  if (isLoading || isSearchLoading) {
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
      
      {/* Slider com os filmes filtrados */}
      <MovieSlider movies={filteredMovies} />

      {/* Lista de filmes */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 p-20">
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

      {/* Paginação */}
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
