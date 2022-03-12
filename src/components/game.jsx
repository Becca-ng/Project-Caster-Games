import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({score,mychoice,setscore}) => {


const [OPChoice, setOPChoice] = useState("");
    // line 5 saves opponents choice 
const [playerWin, setPlayerWin] = useState("");

const [counter,setCounter] = useState(3);

const newOPPick = () => {
    const choices = ["fire","water","grass"];
    setOP(choices[Math.floor(Math.random() * 3)]);
    // I assume this is to pick a random element 
};

useEffect(() => 
{newOPPick()} , []);

const Result = () => {
    if (myChoice === "fire" && OPChoice === "grass"){
        setPlayerWin(true);
        console.log('win');
    }
    else if (myChoice === "grass" && OPChoice === "water"){
        setPlayerWin(true);
        console.log('win')
    }
    else if 
    (myChoice === "water" && OPChoice === "fire"){
        setPlayerWin(true);
        console.log('win')
    }
    else if (myChoice === "fire" && OPChoice === "grass"){
        setPlayerWin(false);
        console.log('lose');
    }
    else if (myChoice === "grass" && OPChoice === "water"){
        setPlayerWin("false");
        console.log('lose')
    }
    else if (myChoice === "water" && OPChoice === "fire"){
        setPlayerWin(false);
        console.log('lose')
    }
    else{console.log("draw")};
};

useEffect(() => {
    Result();
   }, [OP])};

export default Game;

 