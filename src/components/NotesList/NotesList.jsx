import React from 'react';
import NoteItem from './NoteItem';
import SearchInput from '../SearchInput/SearchInput';
import NotesListHeading from './NotesListHeading';
import SearchResultsInfo from '../SearchInput/SearchResultsInfo';

const NotesList = ({
  notes,
  showFormattedDate,
  modalToggle,
  archiveListState,
  archiveListToggle,
  searchState,
  searchHandler,
  regularCount,
  archviedCount,
}) => {
  return (
    <div className="
    notes-list
    flex flex-col gap-6
    w-full"
    >
      <NotesListHeading
        notes={notes}
        archiveListState={archiveListState}
        archiveListToggle={archiveListToggle}
      />
      <SearchInput
        searchState={searchState}
        searchHandler={searchHandler}
      />
      {searchState && (
        <SearchResultsInfo
          archiveListState={archiveListState}
          archiveListToggle={archiveListToggle}
          regularCount={regularCount}
          archviedCount={archviedCount}
        />
      )}
      <ul className="
      notes-list__grid
      grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {!notes.length && (
          <li className="
          flex justify-center items-center
          h-32
          grid-cols-subgrid col-span-3"
          >
            <h3 className="text-2xl">
              {searchState ? 'Notes not found.' : 'Notes empty.'}
            </h3>
          </li>
        )}
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            showFormattedDate={showFormattedDate}
            modalToggle={modalToggle}
            {...note}
          />
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
