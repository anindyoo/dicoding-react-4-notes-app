import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';

const SearchInput = ({
  searchState,
  searchHandler,
}) => {

  return (
    <div className="
    search-input__wrapper
    flex flex-row gap-2 items-center
    p-3
    border border-tertiaryColor
    rounded-md
    bg-secondaryColor"
    >
      <label htmlFor="searchNote">
        <MagnifyingGlassIcon className="size-6 text-textBody" title="Search notes by title." />
      </label>
      <input
        type="text"
        id="searchNote"
        value={searchState}
        onChange={searchHandler}
        className="
        search-input
        w-full outline-none text-lg
        bg-transparent"
        placeholder="Search title..."
      />
    </div>
  );
};

export default SearchInput;
