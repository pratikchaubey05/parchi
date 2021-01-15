import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState(localStorage.getItem("parchiNotes") ? [...JSON.parse(localStorage.getItem("parchiNotes"))] : []);

  localStorage.setItem("parchiNotes", JSON.stringify(notes)) ;

    function addNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
      
    }
    function deleteNote(id) {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
      localStorage.setItem("parchiNotes", JSON.stringify(notes)) ;
    }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
