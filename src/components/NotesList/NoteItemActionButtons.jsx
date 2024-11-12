import React from 'react';
import NoteActionButton from './NoteActionButton';

const NoteItemActionButtons = ({ id }) => (
  <div className="
  notes-item__action-buttons
  flex flex-row justify-between"
  >
    <NoteActionButton
      id={id}
      type={'delete'}
    />
    <NoteActionButton
      id={id}
      type={'archive'}
    />
  </div>
);

export default NoteItemActionButtons;
