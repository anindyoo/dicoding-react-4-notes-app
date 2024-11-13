import React, { useState } from 'react';

const NotesInput = ({ addNote }) => {
  const [inputDataState, setInputDataState] = useState({
    title: '',
    body: '',
  });

  const onInputChangeHandler = (event) => {
    const { name, value } = event.target;

    if ((name === 'title' && value.length <= 50) || name !== 'title') {
      setInputDataState({
        ...inputDataState,
        [name]: value,
      });
    }
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();

    addNote(inputDataState);
    setInputDataState({
      title: '',
      body: '',
    });
  };

  return (
    <div className="
    notes-input
    flex flex-col gap-6
    md:w-[30rem]"
    >
      <h2 className="notes-input__heading-title">Add Note</h2>
      <form onSubmit={onSubmitEventHandler}>
        <div className="
        notes-input__form
        flex flex-col gap-5
        p-4
        bg-tertiaryColor min-h-96"
        >
          <div className="note-input__title-input-wrapper label-input-wrapper">
            <div className="flex justify-between">
              <label htmlFor="title">Title</label>
              <p className={`
              note-input__input-title-letter-count
              ${inputDataState.title.length === 50 ? 'text-dangerColor' : ''}`}
              >
                {`${inputDataState.title.length}/50`}
              </p>
            </div>
            <textarea
              id="title"
              name="title"
              placeholder="Enter note title..."
              className="note-input__title-input text-2xl resize-none"
              value={inputDataState.title}
              onChange={onInputChangeHandler}
              rows={2}
              required
            />
          </div>
          <hr className="border-spacing-0.5 border-dashed border-accentColor" />
          <div className="note-input__body-input-wrapper label-input-wrapper">
            <div className="flex justify-between">
              <label htmlFor="body">Note Body</label>
              <p className="note-input__input-body-letter-count">
                {`${inputDataState.body.length}`}
              </p>
            </div>
            <textarea
              id="body"
              name="body"
              placeholder="Enter note body..."
              rows={5}
              className="note-input__body-input text-lg"
              value={inputDataState.body}
              onChange={onInputChangeHandler}
              required
            />
          </div>
          <button
            type="submit"
            title="Add note."
            className="
            note-input__note-submit-button
            flex flex-row justify-center items-center gap-1
            p-2
            rounded-md
            transition ease-in-out duration-75
            border border-accentColor border-opacity-30
            bg-primaryColor hover:bg-secondaryColor"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-lg">
              Add Note
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotesInput;
