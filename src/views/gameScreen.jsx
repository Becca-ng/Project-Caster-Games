import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from 'react-router-dom';
import PlayerUI from "../components/player_ui";
import Game from "../components/game";
import GameGraphics from "../components/gameGraphics";


const GameScreen = () => {

    return (
        <>
     <PlayerUI />
     <GameGraphics />
     </>
    )
  
  };
  
  export default GameScreen;