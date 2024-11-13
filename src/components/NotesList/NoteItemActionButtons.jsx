import React from 'react';
import NoteActionButton from './NoteActionButton';

const NoteItemActionButtons = ({
  id,
  modalToggle,
}) => (
  <div className="
  notes-item__action-buttons
  flex flex-row justify-between"
  >
    <NoteActionButton
      id={id}
      type={'delete'}
      modalToggle={modalToggle}
    />
    <NoteActionButton
      id={id}
      type={'archive'}
      modalToggle={modalToggle}
    />
  </div>
);

export default NoteItemActionButtons;
