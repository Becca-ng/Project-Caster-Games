import React, { useState } from 'react';
import Game from '../components/game';
import Player from '../components/player';
import Winner from '../components/ResultScreen';
import { TopUI, BottomUI } from "../indicies/uiIndex";
import {FireBackground, GrassBackground, WaterBackground} from "../indicies/avatarBg";
import {Vola, Thera, Serene} from "../indicies/avatar";


const GameScreen = () => {
  const ELEMENTS = ['fire', 'grass', 'water'];

  // (userChoice is for user), (opponent choice is randomChoice),(battleWin is win state), (stats tracks/wins and losses)
  const [battleNumber, setBattleNumber] = useState(1);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [playerHealth, setplayerHealth] = useState(2);
  const [opHealth, setOPHealth] = useState(2);

  const [userChoice, setUserChoice] = useState('');
  const [randomChoice, setRandomChoice] = useState('');

  const [battleResults, setBattleResults] = useState('');
  const [isDialogue, setIsDialogue] = useState(false);
  const [stats, setStats] = useState({
    opponentLoss: 0,
    opponentWin: 0,
    userLoss: 0,
    userWin: 0,
  });

  const handleClick = (e) => {
    const type = e.target.dataset.id;
    console.log(e.target.dataset);
    setUserChoice(type);
    setCurrentTurn(currentTurn => currentTurn + 1);
    console.log(userChoice)
    const elementIndex = Math.floor(Math.random() * 3) + 0;
    setRandomChoice(ELEMENTS[elementIndex]);
  }

  const finalResults = (val) => {
    const _stats = { ...stats };
    let status = '';
    if (val) {
      status = 'user';
      _stats.userLoss += 1;
      _stats.userWin += 1;
      setStats();
    } else if (val === false) {
      status = 'opponent';
      _stats.opponentWin += 1;
      _stats.opponentLoss += 1;
    } else {
      status = 'the game is a draw';
    }
    console.log(_stats)
    setBattleResults(status);
    setStats(_stats);
  };

  return (
    <div className="y-wrap">
      <TopUI playerHealth={playerHealth} opHealth={opHealth} battleNumber={battleNumber} currentTurn={currentTurn}/>
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
          backgroundcolor="crimson"
          choice={userChoice}
          losses={stats.userLoss}
          wins={stats.userWin}
        />
        <Player
          avatar="Becca"
          backgroundcolor="cornflowerblue"
          choice={randomChoice}
          losses={stats.opponentLoss}
          wins={stats.opponentWin}
        />
      </div>
      <BottomUI 
        action={handleClick}
        isDialogue={isDialogue}
      />
    </div>
  )

};

export default GameScreen;