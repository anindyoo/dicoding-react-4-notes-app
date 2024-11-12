import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemActionButtons from './NoteItemActionButtons';

const NoteItem = ({
    id,
    title,
    body,
    createdAt,
    showFormattedDate,
  }) => {
  const formattedDate = showFormattedDate(createdAt);

  return (
    <li className="
    notes-item
    flex flex-col gap-6 justify-between
    p-4
    rounded-lg
    border border-accentColor
    bg-secondaryColor"
    >
      <NoteItemContent
        title={title}
        body={body}
        date={formattedDate}
      />
      <NoteItemActionButtons id={id} />
    </li>
  );
};

export default NoteItem;
