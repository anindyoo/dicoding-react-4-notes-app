import React, { useEffect, useState } from 'react';
import NotesInput from './components/NotesInput/NotesInput';
import NotesList from './components/NotesList/NotesList';
import { getInitialData, showFormattedDate } from './utils/data';
import Modal from './components/Modal/Modal';

const App = () => {
  const [notes, setNotesState] = useState([]);
  const [activeModalObjectState, setActiveModalObjectState] = useState({
    id: '',
    type: '',
  });

  useEffect(() => {
    setNotesState(getInitialData());
  }, []);

  const onAddNoteHandler = ({ title, body }) => {
    setNotesState([
      ...notes,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const onModalToggleHandler = (modalObject) => {
    setActiveModalObjectState(modalObject);
  };

  const onDeleteHandler = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotesState(filteredNotes);
    setActiveModalObjectState({
      id: '',
      type:'',
    });
  };

  const onCloseModalHandler = () => setActiveModalObjectState({
    id: '',
    type:'',
  });

  const findNoteById = (id) => notes.find((note) => note.id === id);

  return (
    <div className="
    notes-app
    center-element
    flex flex-col gap-10
    min-h-screen
    mt-14 mb-40"
    >
      <h1 className="notes-app__title text-6xl font-bold">Notes App</h1>
      <div className="
      notes-app__content-wrapper
      flex flex-row justify-between gap-6"
      >
        <NotesInput addNote={onAddNoteHandler} />
        <NotesList
          notes={notes}
          showFormattedDate={showFormattedDate}
          modalToggle={onModalToggleHandler}
        />
      </div>
      {activeModalObjectState.id && (
        <Modal
          {...activeModalObjectState}
          title={findNoteById(activeModalObjectState.id).title}
          onDelete={onDeleteHandler}
          onClose={onCloseModalHandler}
        />
      )}
    </div>
  );
};

export default App;
