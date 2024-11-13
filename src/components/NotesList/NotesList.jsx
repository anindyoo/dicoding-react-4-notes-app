import React from 'react';
import NoteItem from './NoteItem';

const NotesList = ({
  notes,
  showFormattedDate,
  modalToggle,
}) => (
  <div className="
  notes-list
  flex flex-col gap-6
  w-full"
  >
    <h2 className="notes-list__heading-title">Notes</h2>
    <ul className="
    notes-list__grid
    grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
    >
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

export default NotesList;
