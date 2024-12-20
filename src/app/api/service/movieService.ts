import axios from 'axios';

export const getMovies = async (currentPage: number, itemPage: number, search: string = '') => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    
    const response = await axios.get(
      `${apiUrl}/movies?page=${currentPage}&limit=${itemPage}&search=${search}`
    );

 
    console.log('List movies:', response.data);
    
    return {
      data: response.data.data,  
      pagination: response.data.pagination,  
    };
  } catch (error: any) {
    console.error('Error fetching movies:', error);
    throw new Error(`Failed to get movies: ${error.message}`);
  }
};
