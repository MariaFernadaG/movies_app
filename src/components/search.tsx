import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Importando o ícone 'X' de react-icons

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
    <form onSubmit={searchMovie} className="relative flex items-center space-x-4">
      <input
        className="bg-grey px-4 py-2 outline-none placeholder:text-textColor border border-primary rounded-md text-sm font-semibold pr-10" // pr-10 para dar espaço para o ícone dentro do input
        type="text"
        value={input}
        placeholder="Search a movie"
        onChange={(event) => setInput(event.target.value)} 
      />
      
      {input && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-3 text-white bg-primary  font-bold text-xl p-1 rounded-full"
        >
          <FaTimes /> 
        </button>
      )}
    </form>
  );
};

export default Search;
