import React from 'react';
import NoteItemHeader from './NoteItemHeader';
import NoteItemBody from './NoteItemBody';

const NoteItemContent = ({ title, body, date }) => (
  <div className="
    notes-item__content
    flex flex-col gap-4"
  >
    <NoteItemHeader
      title={title}
      date={date}
    />
    <NoteItemBody
      body={body}
    />
  </div>
);

export default NoteItemContent;
