import React, { useState } from "react";
import './card.css';
import rock from "./photos/rock.png";
import paper from "./photos/paper.png";
import sizor from "./photos/sizor.png";
// import { useState } from "react";

function card() {

    
    return (
        <>
        <div className="buttons">
        <button  id="rock"><img src={rock}></img></button>
        <button id="paper"><img src={paper}></img></button>
        <button id="scissors"><img src={sizor}></img></button>
        </div>
        </>
    )
}
export default card