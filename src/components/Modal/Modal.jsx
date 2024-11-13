import { ArchiveBoxArrowDownIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Modal = ({
  id,
  type,
  title,
  onDelete,
  onClose,
  archiveNoteToggle,
}) => {
  const handleConfirmButtonOnClick = () => {
    if (type === 'archive') {
      archiveNoteToggle(id);
    } else if (type === 'delete') {
      onDelete(id);
    }
  };

  return (
    <div className="
    modal
    fixed top-0 left-0
    flex justify-center items-center
    w-screen h-screen
    bg-secondaryColor bg-opacity-60"
    >
      <div className="
      modal__content
      flex flex-col justify-between items-center gap-12
      w-[95%] md:w-[50%] lg:w-[40%] xl:w-[25%]
      p-6
      rounded-lg
      border border-tertiaryColor
      bg-primaryColor"
      >
        <button
          type="button"
          onClick={() => onClose()}
          className="
          modal__close-button
          place-self-end"
        >
          <XMarkIcon
            className="size-8 text-textDate transition ease-in-out duration-75 hover:brightness-75"
          />
        </button>
        <div className="
        modal__body-header-wrapper
        flex flex-col items-center gap-4
        -mt-12"
        >
          <div className="
          modal__header
          flex flex-col items-center gap-2"
          >
            <div className={`
            modal__icon
            p-4
            rounded-full
            bg-opacity-20
            ${type === 'archive' ? 'bg-accentLighterColor' : 'bg-dangerLighterColor'}`}
            >
              {
                type === 'archive'
                  ? (
                    <ArchiveBoxArrowDownIcon className="size-16 text-accentColor" />
                  ) : (
                    <TrashIcon className="size-16 text-dangerColor" />
                  )
              }
            </div>
            <h2 className="modal__title text-2xl">
              {type === 'archive' ? 'Archive Note' : 'Delete Note'}
            </h2>
          </div>
          <p className="
          modal__body
          w-[80%]
          text-center text-lg font-light"
          >
            {type === 'archive'
              ? 'You\'re about to archive a note: '
              : 'You\'re about to delete a note: '}
            <strong className="font-bold text-accentColor">{title}</strong>
            {type === 'archive'
              ? '. Proceed to archive?'
              : '. Proceed to delete?'}
          </p>
        </div>
        <div className="
        modal__buttons
        flex gap-2"
        >
          <button
            type="button"
            onClick={() => onClose()}
            className="
            modal__cancel-button
            border-tertiaryColor
            hover:brightness-90"
          >
            {type === 'archive' ? 'Cancel Archive' : 'Cancel Delete'}
          </button>
          <button
            type="button"
            onClick={handleConfirmButtonOnClick}
            className={`
            modal__confirm-button
            border-none 
            ${type === 'archive'
              ? 'text-primaryColor bg-accentColor'
              : 'text-textBody bg-dangerColor'}
            hover:brightness-90`}
          >
            {type === 'archive' ? 'Proceed to Archive' : 'Proceed to Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
