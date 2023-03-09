import React from "react";
import "./card.css";
import rock from "./photos/rock.png";
import paper from "./photos/paper.png";
import scissors from "./photos/sizor.png";
import { useState } from "react";

function GameButtons() {
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
        const assume = value + find;
        if (assume == "Rockscissors") {
            setdis("youwin");
            setcount(count + 1);
        } else if (assume == "paperRock") {
            setdis("youwin");
            setcount(count + 1);
        } else if (assume == "scissorspaper") {
            setcount(count + 1);
            setdis("youwin");
        } else if (assume == "scissorsRock") {
            setcount(count - 1);
            setdis("loose");
        } else if (assume == "Rockpaper") {
            setcount(count - 1);
            setdis("loose");
        } else if (assume == "paperscissors") {
            setcount(count - 1);
            setdis("loose");
        } else if (value == "Rock") {
            setdis("draw");
        } else if (value == "paper") {
            setdis("draw");
        } else if (value == "scissors") {
            setdis("draw");
        }

        var buttons = document.querySelectorAll(".butto");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].id !== value) {
                buttons[i].style.display = "none";
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
    };

    return (
        <>
            <div className="button2">
                <div className="buttons">
                    <h1>YOU</h1>
                    <button className="butto" onClick={() => sold("Rock")} id="Rock">
                        <h1>Rock</h1>
                        <img src={rock}></img>
                    </button>
                    <button className="butto" onClick={() => sold("paper")} id="paper">
                        <h1>Paper</h1>
                        <img src={paper}></img>
                    </button>
                    <button className="butto" onClick={() => sold("scissors")} id="scissors">
                        <h1>scissors</h1>
                        <img src={scissors}></img>
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
                </div>
                <div className="buttons">
                    <h1>COMPUTER</h1>
                    <button className="compubut" id="Rock">
                        <img className="compbut" src={rock}></img>
                    </button>
                    <button className="compubut" id="paper">
                        <img className="compbut" src={paper}></img>
                    </button>
                    <button className="compubut" id="scissors">
                        <img className="compbut" src={scissors}></img>
                    </button>
                </div>
            </div>
        </>
    );
}
export default GameButtons;
