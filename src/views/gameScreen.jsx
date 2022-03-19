import React, { useState } from 'react';
import Game from '../components/game';
import Player from '../components/player';
import Winner from '../components/ResultScreen';
import { TopUI, BottomUI } from "../indicies/uiIndex";

const GameScreen = () => {
  const ELEMENTS = ['fire', 'grass', 'water'];

  const [battleNumber, setBattleNumber] = useState(1);
  const [currentTurn, setCurrentTurn] = useState(0);

  const [userChoice, setUserChoice] = useState('');
  const [randomChoice, setRandomChoice] = useState('');
  
  const [stats, setStats] = useState({
    opponentHealth: 2,
    playerHealth: 2
  });

  const [battleResults, setBattleResults] = useState('');
  const [isDialogue, setIsDialogue] = useState(false);

  //Allows the user to select an attack (player_ui)
  const handleClick = (e) => {
    const type = e.target.dataset.id;
    console.log(type);
    setUserChoice(type);

    const elementIndex = Math.floor(Math.random() * 3) + 0;
    setRandomChoice(ELEMENTS[elementIndex]);

    setCurrentTurn(currentTurn => currentTurn + 1);
  }

  //Calculates the results of the battle (game)
  const finalResults = (val) => {
    const _stats = { ...stats };
    let status = '';
    if (val) {
      status = 'user';
      _stats.opponentHealth -= 1;
    } else if (val === false) {
      status = 'opponent';
      _stats.playerHealth -= 1;
    } else {
      status = 'the game is a draw';
    }
    if(currentTurn > 0){
      setBattleResults(status);
    }
    setStats(_stats);
  };

  //Resets the match after the winner is determined (top_ui)
  const finalizeMatch = () => {
    const _stats = { ...stats };
    _stats.opponentHealth = 2;
    _stats.playerHealth = 2;
    setStats(_stats);
    setBattleNumber(battleNumber => battleNumber + 1);
    setCurrentTurn(0);
    setIsDialogue(true);
  }

  //Starts a new match and hides the dialogue box (dialogue)
  const nextMatch = () => {
    setIsDialogue(false);
    setBattleResults('');
  }

  return (
    <div className="y-wrap">
      <TopUI 
        playerHealth={stats.playerHealth} 
        opponentHealth={stats.opponentHealth} 
        battleNumber={battleNumber} 
        currentTurn={currentTurn}
        finalizeMatch={finalizeMatch}
      />
      <Winner />  
      <Game
        action={finalResults}
        battleResults={battleResults}
        randomChoice={randomChoice}
        userChoice={userChoice}
      />
      <div className="player-block">
        <Player
          avatar="Matt"
          choice={userChoice}
          className = "user"
        />
        <Player
          avatar="Becca"
          choice={randomChoice}
          className = "opponent"
        />
      </div>
      <BottomUI 
        action={handleClick}
        isDialogue={isDialogue}
        battleResults={battleResults}
        nextMatch={nextMatch}
      />
    </div>
  )

};

export default GameScreen;