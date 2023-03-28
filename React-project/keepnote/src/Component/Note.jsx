import React, { useState, useEffect } from "react";
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import plus from "./plus.png";

export default function Note(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [contents, setContent] = useState(props.content);
  const [titles, settitle] = useState(props.title);


  const handleContentChange = (event) => {
    setContent(event.target.value);
  }
  const handleContentChanges =(event)=>{
    settitle(event.target.value);
  }

  const handleEditClick = (event) => {
    event.stopPropagation();
    setIsEditable(true);
  }

  const handleDeleteClick = () => {
    props.delete(props.id);
  }

  useEffect(() => {
    const hideOnPageClick = () => {
      setIsEditable(false);
    };
    
    document.addEventListener("click", hideOnPageClick);
    return () => {
      document.removeEventListener("click", hideOnPageClick);
    };
  }, [contents, props.id, props.save,titles]);

  return (
    <div className="note"onClick={handleEditClick}>
      {isEditable ? (
        <div>
          <input className="edittext" type="text" value={titles} onChange={handleContentChanges}></input>
          <textarea className="edittext" value={contents} onChange={handleContentChange}></textarea>
        </div>
      ) : (
        <div>
          <h3 >{titles}</h3>
          <p onClick={handleEditClick}>{contents}</p>
          
          <button className="editdelete deletebut" onClick={handleDeleteClick}><img src={plus} alt="plus"></img></button>
          
        </div>
      )}
    </div>
  );
}
