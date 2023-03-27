import React, { useState } from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function Note(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(props.content);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  }

  const handleSaveClick = () => {
    setIsEditable(false);
    props.save(props.id, content);
  }
  
  const handleCancelClick = () => {
    setIsEditable(false);
    setContent(props.content);
  }

  const handleEditClick = () => {
    setIsEditable(true);
  }

  const handleDeleteClick = () => {
    props.delete(props.id);
  }

  return (
    <div className="note" >
      <h3>{props.title}</h3>
      {isEditable ? (
        <div>
          <textarea value={content} onChange={handleContentChange}></textarea>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{content}</p>
          <button className="deletebut" onClick={handleEditClick}>Edit</button>
          <button className="editdelete deletebut" onClick={handleDeleteClick}><DeleteOutlineIcon className='deleteIcons' /></button>
        </div>
      )}
    </div>
  );
}

