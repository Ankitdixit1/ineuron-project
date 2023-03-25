import React from "react";
import  './styles.css'
import  { useState, useEffect } from 'react';
import logo from './logo.png'

export default function Createnote(){
    const [show, setshow] = useState('none');
    const dis = (event) => {
      event.stopPropagation();
      setshow('block');
    };
  
    useEffect(() => {
      const hideOnPageClick = (event) => {
        setshow('none')
      };
      document.addEventListener("click", hideOnPageClick);
    }, []);
    return(
        <>
<img src={logo}></img>
      <span>Keep Note</span>
      <form>
        <input type="text" placeholder="Title" onClick={dis} ></input>
        <p className='sold' style={{ display: show }} onClick={dis} >
          <textarea name="content" placeholder="make note.." ></textarea>
        </p>
      </form>
        </>
    )
};