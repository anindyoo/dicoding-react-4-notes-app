import React from 'react';
import { ArchiveBoxArrowDownIcon, TrashIcon } from '@heroicons/react/24/outline';

const NoteActionButton = ({
  id,
  type,
  modalToggle,
}) => (
  <button
    type="button"
    title={`${type} note button.`}
    onClick={() => modalToggle({ id, type })}
    className={`
    note-item__action-button-${type}
    rounded-full p-1
    transition ease-in-out duration-150
    hover:bg-opacity-40
    ${type === 'archive' ? 'hover:bg-accentLighterColor' : 'hover:bg-dangerLighterColor'}`}
  >
    {
      type === 'archive'
        ? (
          <ArchiveBoxArrowDownIcon className="size-6 text-accentColor" />
        )
        : (
          <TrashIcon className="size-6 text-dangerColor" />
        )
    }
  </button>
);

export default NoteActionButton;
