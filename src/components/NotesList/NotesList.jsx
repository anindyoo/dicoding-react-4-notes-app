import React from 'react';
import NoteItem from './NoteItem';
import { ArchiveBoxIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const NotesList = ({
  notes,
  showFormattedDate,
  modalToggle,
  archiveListState,
  archiveListToggle,
}) => {
  const notesCount = notes.length;

  return (
    <div className="
    notes-list
    flex flex-col gap-6
    w-full"
    >
      <div className="
      notes-list__heading
      flex flex-row justify-between"
      >
        <h2 className="notes-list__heading-title">
          {archiveListState ? 'Archived Notes ' : 'Notes  '}
          ({notesCount})
        </h2>
        <button
          type="button"
          onClick={() => archiveListToggle()}
          className="
          notes-list__archive-toggler
          flex flex-row items-center gap-2
          py-2 px-4
          rounded-md
          border border-accentColor border-opacity-30"
        >
          {archiveListState
            ? (
              <BookOpenIcon className="size-5 text-textBody" />
            )
            : (
              <ArchiveBoxIcon className="size-5 text-textBody" />
            )}
            <span className="text-lg font-medium">
              {archiveListState ? 'Open Regular Notes' : 'Open Archived Notes'}
            </span>
        </button>
      </div>
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
            <h3 className="text-2xl">Notes Empty.</h3>
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
