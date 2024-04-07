import { ChangeEvent, useEffect, useState } from "react";

import useMoviesContext from "../../hooks/useMoviesContext";

const SearchInput = () => {
  const [query, setQuery] = useState<string>("inc");
  const { changeQuery } = useMoviesContext();

  useEffect(() => {
    changeQuery(query);
  }, [query, changeQuery]);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <input
      type="search"
      className=" my-5 w-2/3 rounded-lg border border-purple-400 bg-purple-400 bg-opacity-40 px-2 py-1 text-orange-300 outline-none transition-all duration-150 focus:ring-2 focus:ring-orange-400"
      placeholder="search for..."
      value={query}
      onChange={handleQueryChange}
    />
  );
};

export default SearchInput;
