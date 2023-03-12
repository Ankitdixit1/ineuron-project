import logo from './logo.png'
import  './styles.css'
import {useState} from 'react';
import { useEffect } from 'react';
function App() {
  const [show, setshow] =useState("none")
  const dis = ()=>{
    setshow("block")
    console.log(show);
  }

  
    // const hideOnPageClick = () => {
    //   console.log(show);
    //   if(show == "block"){
    //     setshow("none");
    //     // console.log("so");
    //   }
    // };
    // document.addEventListener("click", hideOnPageClick);
 

  return (
    <>
    <img src={logo}></img>
    <span>Keep Note</span>
    <form>
      <input type="text" placeholder="Title" onClick={dis}></input>
      <p style={{display: show}}>
        <textarea name="content" placeholder="make note.."></textarea>
      </p>
    </form>
    </>
  );
}

export default App;
