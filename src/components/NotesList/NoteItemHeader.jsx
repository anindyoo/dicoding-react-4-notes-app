import React from 'react';

const NoteItemHeader = ({ title, date }) => (
  <div className="notes-item__header">
    <h3 className="
    notes-item__title
    text-2xl font-bold text-accentColor"
    >
      {title}
    </h3>
    <p className="notes-item__date font-medium text-textDate">{date}</p>
  </div>
);

export default NoteItemHeader;
