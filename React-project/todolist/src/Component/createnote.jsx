import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import logo from "./logo.png";



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
  }
  return (
    <>
      <img src={logo}></img>
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
          className="sold"
          name="content"
          value={note.content}
          onChange={Inputcall}
          style={{ display: show }}
          onClick={dis}
        >
          <textarea name="content" placeholder="make note.."></textarea>
        </p>
        <button style={{ display: show }} onClick={addevent}>add button</button>
      </form>
    </>
  );
}
