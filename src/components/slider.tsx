import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { FaStar } from 'react-icons/fa'; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IMovie } from '@/interfaces/types/IMovie';

interface MovieSliderProps {
  movies: IMovie[]; 
}

const MovieSlider = ({ movies }: MovieSliderProps) => {
  
  const limitedMovies = movies.slice(8, 11);

  return (
    <div className="mt-0 shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }} 
        spaceBetween={0} 
        slidesPerView={1} 
        loop={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        speed={800} 
      >
        {limitedMovies.map((movie) => (
          <SwiperSlide key={movie.id || movie.title}>
            <div className="relative w-full h-[630px] shadow-2xl  group">
              <img
                src={movie.image_url || '/path/to/placeholder-image.jpg'}
                alt={movie.title}
                className="absolute top-0 left-0 w-full h-full object-cover object-top"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent">
                <div className="absolute top-[60%] left-10 transform -translate-y-1/2 max-w-lg p-6 text-white opacity-100">
                  <span className="font-bold text-accent dark:text-white">
                    Highlight of the month
                  </span>
                  <p className="mt-4 text-4xl font-semibold mb-2 drop-shadow-md">
                    {movie.title}
                  </p>
                 
                  <div className="mt-4 flex items-center space-x-4">
                    <span className="inline-flex items-center text-lg py-1 px-3 rounded-full bg-primary shadow-md">
                      <FaStar color="white" size={20} className="mr-2" />
                      {movie.rating}/10
                    </span>
                    <p className="text--2xl  font-semibold  drop-shadow-md">{movie.crew}</p> 
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
