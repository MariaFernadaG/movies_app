import { useState } from 'react';

const Search = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [input, setInput] = useState('');

  const searchMovie = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(input); 
  };

  
  const clearSearch = () => {
    setInput(''); 
    window.location.reload();
  };

  return (
    <form onSubmit={searchMovie} className="flex items-center space-x-4">
      <input
        className="bg-grey px-4 py-2 outline-none placeholder:text-textColor border border-primary rounded-md text-sm font-semibold"
        type="text"
        value={input}
        placeholder="Search a movie"
        onChange={(event) => setInput(event.target.value)} 
      />
      
      {input && (
        <button
          type="button"
          onClick={clearSearch}
          className="text-primary-500 hover:text-red-700 font-bold text-xl"
        >
          X
        </button>
      )}
    </form>
  );
};

export default Search;
