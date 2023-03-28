import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import logo from "./logo.png";
import plus from "./plus.png";
// import AddIcon from '@material-ui/icons/Add';



export default function Createnote(props) {
  const [show, setshow] = useState("none");
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const Inputcall = (event) => {
    const { name, value } = event.target;
    setnote((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  };
  const dis = (event) => {
    event.stopPropagation();
    setshow("block");
  };

  useEffect(() => {
    const hideOnPageClick = () => {
      setshow("none");
    };
    document.addEventListener("click", hideOnPageClick);
  }, []);
  const addevent=(event)=>{
    event.preventDefault();
    props.notepass(note);
    setnote ({
      title: "",
      content:"",
    });
   
  }
  return (
    <>
      <img src={logo} alt="solid"></img>
      <span>Keep Note</span>
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={Inputcall}
          placeholder="Title"
          onClick={dis}
        ></input>
        <p
          
        >
          <textarea className="sold"
          name="content"
          value={note.content}
          onChange={Inputcall}
          style={{ display: show }}
          onClick={dis} 
          placeholder="make note.."></textarea>
        </p>
        <button className="addbut" style={{ display: show }} onClick={addevent}>
        {/* <FontAwesomeIcon icon="fa-thin fa-plus" style={{color: "#9028c8",}} /> */}
          <img src={plus} alt="do" style={{ display: "flex", width:"2rem", height:"2rem", color: "#ffc23c" }}/>
        </button>
      </form>
    </>
  );
}
