import { ArchiveBoxIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import React from 'react';

const NotesListHeading = ({
  notes,
  archiveListState,
  archiveListToggle,
}) => {
  const notesCount = notes.length;

  return (
    <div className="
      notes-list__heading
      flex flex-col md:flex-row justify-between gap-4 md:gap-0"
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
          flex flex-row justify-center md:justify-normal items-center gap-2
          py-2 px-4
          rounded-md
          border border-accentColor border-opacity-30
          hover:brightness-75"
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
  );
};

export default NotesListHeading;
