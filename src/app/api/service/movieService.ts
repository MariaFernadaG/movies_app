import axios from 'axios';

export const getMovies = async (currentPage: number, itemPage: number) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.get(
      `${apiUrl}/movies?page=${currentPage}&limit=${itemPage}`
    );

    console.log('List movies:', response.data);

    return {
      data: response.data.data,  
      pagination: response.data.pagination,  
    };
  } catch (error: unknown) {
    
    if (error instanceof Error) {
      console.error('Error fetching movies:', error.message);
      throw new Error(`Failed to get movies: ${error.message}`);
    } else {
      console.error('An unknown error occurred');
      throw new Error('Failed to get movies: Unknown error');
    }
  }
};

export const getMovieGoogle = (search: string) => {
  const searchQuery = encodeURIComponent(search);
  window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
};
