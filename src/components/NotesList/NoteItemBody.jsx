import React from 'react';

const NoteItemBody = ({ body }) => (
  <div className="notes-item__body">
    <p className="
    notes-item__body-content
    text-lg font-light"
    >
      {body}
    </p>
  </div>
);

export default NoteItemBody;
