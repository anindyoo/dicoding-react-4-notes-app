import React from 'react';

const SearchResultsInfo = ({
  archiveListState,
  archiveListToggle,
  regularCount,
  archviedCount,
}) => (
  <div className="
  search-results-info
  lg:flex flex-row gap-1
  text-lg"
  >
    <p className="search-results-info__body">
      {`Also found ${archiveListState ? archviedCount : regularCount} notes in ${archiveListState ? 'Regular Notes List' : 'Archived Notes List'}.`}
    </p>
    <button
      type="button"
      onClick={() => archiveListToggle()}
      className="
      search-results-info__switch-button
      underline text-accentColor
      hover:brightness-90"
    >
      {archiveListState ? 'Switch to Regular Notes List' : 'Switch to Archived Notes List'}
    </button>
  </div>
);

export default SearchResultsInfo;