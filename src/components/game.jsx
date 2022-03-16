import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({myChoice}) => {

const [opChoice, setopChoice] = useState("");
const [playerWin, setPlayerWin] = useState("");

const rr = () => {
    console.log('rerender');
}

const newOPPick = () => {
    const choices = ["fire","water","grass"];
    setopChoice(choices[Math.floor(Math.random() * 3)]);
    console.log(myChoice);
};

useEffect(() => 
{newOPPick()} , []);

const Result = () => {
    if (myChoice === "fire" && opChoice === "grass"){
        setPlayerWin(true);
        console.log('win');
    }
    else if (myChoice === "grass" && opChoice === "water"){
        setPlayerWin(true);
        console.log('win')
    }
    else if 
    (myChoice === "water" && opChoice === "fire"){
        setPlayerWin(true);
        console.log('win')
    }
    else if (myChoice === "fire" && opChoice === "water"){
        setPlayerWin(false);
        console.log('lose');
    }
    else if (myChoice === "grass" && opChoice === "fire"){
        setPlayerWin(false);
        console.log('lose')
    }
    else if (myChoice === "water" && opChoice === "grass"){
        setPlayerWin(false);
        console.log('lose')
    }
    else{console.log("draw")};
};

useEffect(() => {
    Result();
   }, [opChoice]);

return (
    <div className="game">
         my choice:{myChoice} <br />
         OP Choice:{opChoice} <br />
    </div>
  );

}
export default Game;

 