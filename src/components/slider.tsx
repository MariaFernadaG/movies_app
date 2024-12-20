
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { FaStar } from 'react-icons/fa'; 
import { Navigation, Pagination } from 'swiper/modules';
import { IMovie } from '@/interfaces/types/IMovie';

interface MovieSliderProps {
  movies: IMovie[]; 
}

const MovieSlider = ({ movies }: MovieSliderProps) => {
  
  const limitedMovies = movies.slice(8, 11);

  return (
    <div className="mt-0 shadow-lg">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }} 
        spaceBetween={0} 
        slidesPerView={1} 
        loop={true} 
      >
        {limitedMovies.map((movie) => (
          <SwiperSlide key={movie.id || movie.title}>
            <div className="relative w-full h-[640px] shadow-2xl">
              <img
                src={movie.image_url || '/path/to/placeholder-image.jpg'}
                alt={movie.title}
                className="absolute top-0 left-0 w-full h-full object-cover object-top"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                <div className="absolute top-[60%] left-20 transform -translate-y-1/2 max-w-lg p-6 text-white">
                  <span className="font-bold text-accent dark:text-white">
                    Highlight of the month
                  </span>
                  <p className="text-4xl font-semibold mb-2 drop-shadow-md">
                    {movie.title}
                  </p>
                 
                  <div className="mt-4 flex items-center space-x-4"> 
                    <span className="inline-flex items-center text-lg py-1 px-3 rounded-full bg-primary shadow-md">
                      <FaStar color="white" size={20} className="mr-2" />
                      {movie.rating}/10
                    </span>
                    <p className="font-bold drop-shadow-md">{movie.crew}</p> 
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
