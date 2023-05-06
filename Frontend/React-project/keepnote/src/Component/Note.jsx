import React, { useState, useEffect } from "react";


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
          <input className="edittext" type="text" value={titles} onChange={handleContentChanges} style={{fontSize:"20px", width:"100%", fontWeight:"bold"}}></input>
          <textarea className="edittext" value={contents} onChange={handleContentChange} style={{fontSize:"15px"}}></textarea>
        </div>
      ) : (
        <div>
          <h3 >{titles}</h3>
          <p onClick={handleEditClick}>{contents}</p>          
          <button className="editdelete deletebut" onClick={handleDeleteClick}></button>
        </div>
      )}
    </div>
  );
}
