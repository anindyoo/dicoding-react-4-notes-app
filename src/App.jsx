import React, { useEffect, useState } from 'react';
import NotesInput from './components/NotesInput/NotesInput';
import NotesList from './components/NotesList/NotesList';
import { getInitialData, showFormattedDate } from './utils/data';
import Modal from './components/Modal/Modal';

const emptyNote = {
  id: '',
  type: '',
};

const App = () => {
  const notesData = getInitialData();

  const [notes, setNotesState] = useState(notesData);
  const [activeModalObjectState, setActiveModalObjectState] = useState(emptyNote);
  const [archiveListToggleState, setArchiveListToggleState] = useState(false);

  const getRegularNotes = (notesData) => notesData.filter((note) => !note.archived);
  const getArchivedNotes = (notesData) => notesData.filter((note) => note.archived);
  const findNoteById = (id) => notes.find((note) => note.id === id);

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
    setActiveModalObjectState(emptyNote);
  };

  const onCloseModalHandler = () => setActiveModalObjectState(emptyNote);

  const onToggleArchiveListHandler = () => {
    setArchiveListToggleState(!archiveListToggleState);
  };

  const onToggleNoteArchiveHandler = (id) => {
    const updatedNotes = notes.map((note) => note.id === id
      ? { ...note, archived: !note.archived }
      : note);

    setNotesState(updatedNotes);
    setActiveModalObjectState(emptyNote);
  };

  useEffect(() => {

  }, []);

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
          notes={archiveListToggleState ? getArchivedNotes(notes) : getRegularNotes(notes)}
          showFormattedDate={showFormattedDate}
          modalToggle={onModalToggleHandler}
          archiveListState={archiveListToggleState}
          archiveListToggle={onToggleArchiveListHandler}
        />
      </div>
      {activeModalObjectState.id && (
        <Modal
          {...activeModalObjectState}
          title={findNoteById(activeModalObjectState.id).title}
          onDelete={onDeleteHandler}
          onClose={onCloseModalHandler}
          archiveNoteToggle={onToggleNoteArchiveHandler}
        />
      )}
    </div>
  );
};

export default App;
