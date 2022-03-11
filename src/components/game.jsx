import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({score,mychoice,setscore}) => {


const [OPChoice, setOPChoice] = useState("");
    // line 5 saves opponents choice 
const [playerWin, setPlayerWin] = useState("");

const [counter,setCounter] = useState(3);

const newOPPick = () => {
    const choices = ["fire","water","grass"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
    // I assume this is to pick a random element 
};

useEffect(() => 
{newOPPick()} , []);

const Result = () => {

    // if (myChoice === "fire" && OPChoice === "grass"){setPlayerWing("win"); setscore(score + 1);}
    // else if (myChoice === "grass" && OPChoice === "water"){setPlayerWing("win"); setscore(score + 1);}
    // else if (myChoice === "water" && OPChoice === "fire"){setPlayerWing("win"); setscore(score + 1);}
    // else if (myChoice === "fire" && OPChoice === "grass"){setPlayerWing("lose"); setscore(score - 1);}
    // else if (myChoice === "grass" && OPChoice === "water"){setPlayerWing("lose"); setscore(score - 1);}
    // else if (myChoice === "water" && OPChoice === "fire"){setPlayerWing("lose"); setscore(score - 1);}


}
}