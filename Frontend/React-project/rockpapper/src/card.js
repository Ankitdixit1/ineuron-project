import React from "react";
import "./card.css";
import rock from "./photos/rock.png";
import paper from "./photos/paper.png";
import scissors from "./photos/sizor.png";
import { useState } from "react";
import loose from "./photos/loose.mp3";
import win from "./photos/winner.mp3";
import { useRef } from 'react';

function GameButtons() {
    const audioRef = useRef(null);
    const audioReflos = useRef(null);

    const [dis, setdis] = useState(0);
    const [count, setcount] = useState(0);
    const sold = (value) => {
        const game = ["Rock", "paper", "scissors"];
        const computer = Math.floor(Math.random() * game.length);
        const find = game[computer];
        
        var buttons = document.querySelectorAll(".compubut");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].id !== find) {
                buttons[i].style.display = "none";
            }
        }
        // const bgVideo = document.getElementById("bgVideo");
        const assume = value + find;
        if (assume === "Rockscissors") {
            setdis("youwin");
            setcount(count + 1);
            audioRef.current.play(); // play the audio
        } else if (assume === "paperRock") {
            setdis("youwin");
            setcount(count + 1);
            audioRef.current.play(); // play the audio
        } else if (assume === "scissorspaper") {
            setcount(count + 1);
            setdis("youwin");
            audioRef.current.play(); // play the audi
        } else if (assume === "scissorsRock") {
            setcount(count - 1);
            setdis("loose");
            audioReflos.current.play(); // play the audio
        } else if (assume === "Rockpaper") {
            setcount(count - 1);
            setdis("loose");
            audioReflos.current.play(); // play the audio
        } else if (assume === "paperscissors") {
            setcount(count - 1);
            setdis("loose");
            audioReflos.current.play(); // play the audio
        } else if (value === "Rock") {
            setdis("draw");
        } else if (value === "paper") {
            setdis("draw");
        } else if (value === "scissors") {
            setdis("draw");
        }
        

        var buttonsRef = document.querySelectorAll(".butto");
        for (let i = 0; i < buttonsRef.length; i++) {
            if (buttonsRef[i].id !== value) {
                buttonsRef[i].style.display = "none";
            }
        }
    };

    const refresh = () => {
        const buttons = document.querySelectorAll(".butto");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "flex";
        }

        var cbuttons = document.querySelectorAll(".compubut");
        for (var i = 0; i < cbuttons.length; i++) {
            cbuttons[i].style.display = "block";
        }

    audioRef.current.pause(); // stop audio
    audioRef.current.currentTime = 0; // reset audio to beginning
        audioReflos.current.pause(); // play the audio
        audioReflos.current.currentTime = 0; // reset audio to beginning

    };

    return (
        <>
         <audio ref={audioRef} src={win} />
         <audio ref={audioReflos} src={loose} />

            <div className="button2">
                <div className="buttons">
                    <h1>YOU</h1>
                    <button className="butto" onClick={() => sold("Rock")} id="Rock">
                        <h1>Rock</h1>
                        <img src={rock} alt="rock" />
                    </button>
                    <button className="butto" onClick={() => sold("paper")} id="paper">
                        <h1>Paper</h1>
                        <img src={paper} alt="paper"/>
                    </button>
                    <button className="butto" onClick={() => sold("scissors")} id="scissors">
                        <h1>scissors</h1>
                        <img src={scissors} alt="scissors" />
                    </button>
                </div>
                <div className="score">
                    <h1 style={{color:"black"}}>Result : <span>{dis}</span></h1>
                    <h1 style={{color:"black"}}>wins : <span>{count}</span></h1>
                    <button
                        className="refresh"
                        id="refresh"
                        onClick={refresh}
                    >
                        PLAY AGAIN
                    </button>
                    {/* <audio ref={audioRef} src={win} /> */}
                </div>
                <div className="buttons">
                    <h1>COMPUTER</h1>
                    <button className="compubut" id="Rock">
                        <img className="compbut" src={rock} alt="rock"/>
                    </button>
                    <button className="compubut" id="paper">
                        <img className="compbut" src={paper} alt="paper" />
                    </button>
                    <button className="compubut" id="scissors">
                        <img className="compbut" src={scissors} alt="scissors" />
                    </button>
                </div>
            </div>
        </>
    );
}
export default GameButtons;
