import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameScreen from "../views/gameScreen";
import PlayerUI from "../components/player_ui";

const Body = () => {
// const navigate = useNavigate();

    return (
    <>
    <GameScreen />
    </>
    )
  };
  
  export default Body;