import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function Note(props) {
  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button><DeleteOutlineIcon className='deleteIcons' /></button>
    </div>
  );
}
