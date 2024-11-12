import React, { useEffect, useState } from 'react';
import NotesInput from './components/NotesInput/NotesInput';
import NotesList from './components/NotesList/NotesList';
import { getInitialData, showFormattedDate } from './utils/data';

const App = () => {
  const [notes, setNotesState] = useState([]);

  useEffect(() => {
    setNotesState(getInitialData());
  }, []);

  return (
    <div className="
    notes-app
    center-element
    flex flex-col gap-10
    min-h-screen
    mt-14 mb-40"
    >
      <h1 className='notes-app__title text-5xl font-bold'>Notes App</h1>
      <div className="
      notes-app__content-wrapper
      flex flex-row justify-between gap-6"
      >
        <NotesInput />
        <NotesList
          notes={notes}
          showFormattedDate={showFormattedDate}
        />
      </div>
    </div>
  );
};

export default App;
