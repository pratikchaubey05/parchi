import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom' ;
import Message from "./Message.js" ;

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false); 
  const [message, setMessage] = useState("");
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    if(!note.title || !note.content){
      setMessage("Note is not complete. Kindly provide both Title and Note text.")
    }else{
      setMessage("");
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
    }

    event.preventDefault();
  }

  function expand(){
    setExpanded(true) ;
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded?<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />: null}
        <textarea
          name="content"
          onClick = {expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded? 3: 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
          <AddCircleIcon />
          </Fab>
        </Zoom>
        {message && <Message variant="danger">{message}</Message>}
      </form>
    </div>
  );
}

export default CreateArea;
