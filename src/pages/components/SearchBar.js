import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch, setIsFilterVisible }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <div
        className="flex justify-center gap-5 my-10 max-w-7xl mx-auto px-4"
        onSubmit={handleSubmit}
      >
        <form
          onSubmit={handleSubmit}
          className="flex bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none  rounded-lg"
        >
          <FontAwesomeIcon
            className="self-center pr-2"
            icon={faMagnifyingGlass}
          />
          <input
            className="w-full outline-none bg-gray-50"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
          />
        </form>
        <button
          className="border rounded-xl w-44"
          type="button"
          onClick={() => setIsFilterVisible(true)}
        >
          <span className="hidden sm:inline w-full">Filter</span>
          <span className="sm:hidden">
            <FontAwesomeIcon icon={faFilter} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
