import React from 'react';
import NoteItem from './NoteItem';

const NotesList = ({ notes, showFormattedDate }) => (
  <div className="
  notes-list
  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6
  w-full"
  >
    {notes.map((note) => (
      <NoteItem
        key={note.id}
        showFormattedDate={showFormattedDate}
        {...note}
      />
    ))}
  </div>
);

export default NotesList;
