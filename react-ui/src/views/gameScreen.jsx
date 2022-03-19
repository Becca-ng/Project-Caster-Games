import React, { useState } from 'react';
import Game from '../components/game';
import Player from '../components/player';
import Winner from '../components/ResultScreen';
import Modal from '../components/modal';
import { TopUI, BottomUI } from "../indicies/uiIndex";
import { User, Vola, Thera, Serena } from "../indicies/avatarIndex";

const GameScreen = () => {
  const ELEMENTS = ['fire', 'grass', 'water'];

  const [battleNumber, setBattleNumber] = useState(1);
  const [currentTurn, setCurrentTurn] = useState(0);

  const [opponentAvatar, setOppopnentAvatar] = useState(Vola);
  const [playerOverlay, setPlayerOverlay] = useState();
  const [opponentOverlay, setOpponentOverlay] = useState();

  const [userChoice, setUserChoice] = useState('');
  const [randomChoice, setRandomChoice] = useState('');

  const [stats, setStats] = useState({
    opponentHealth: 2,
    playerHealth: 2
  });

  const [modalOptions, setModalOptions] = useState({
    text: '',
    show: false
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
    if (currentTurn > 0) {
      setBattleResults(status);
    }
    setStats(_stats);
  };

  //Resets the match if the player wins (TopUI)
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
    switch (battleNumber) {
      case 2:
        setOppopnentAvatar(Thera);
        break;
      case 3:
        setOppopnentAvatar(Serena);
        break;
      default:
        console.log(`Sorry, bad ${battleNumber}.`);
    }
  }

  //Ends the game (TopUI)
  const endGame = (winner) => {
    const _modalOptions = { ...modalOptions };
    _modalOptions.show = true;
    _modalOptions.text = winner ? WINNER_TEXT : LOSER_TEXT;
    setModalOptions(_modalOptions);
  }

  //Starts a new game
  const newGame = () => {
    console.log('starting new game');
    const _stats = { ...stats };
    _stats.opponentHealth = 2;
    _stats.playerHealth = 2;
    setStats(_stats);
    setCurrentTurn(0);
    setBattleNumber(1);
    setIsDialogue(false);
    setOppopnentAvatar(Vola);
    const _modalOptions = { ...modalOptions };
    _modalOptions.show = true;
    _modalOptions.text = START_TEXT;
    setModalOptions(_modalOptions);
  }

  //Function to close the modal
  const closeModal = () => {
    const _modalOptions = { ...modalOptions };
    _modalOptions.show = false;
    setModalOptions(_modalOptions);
    console.log(_modalOptions);
    if(_modalOptions.text.includes('you')){
      newGame();
    }
  }

  return (
    <div className="y-wrap">
      <TopUI
        playerHealth={stats.playerHealth}
        opponentHealth={stats.opponentHealth}
        battleNumber={battleNumber}
        battleResults={battleResults}
        currentTurn={currentTurn}
        finalizeMatch={finalizeMatch}
        endGame={endGame}
      />
      <Game
        action={finalResults}
        battleResults={battleResults}
        randomChoice={randomChoice}
        userChoice={userChoice}
      />
      <Modal
        handleClose={closeModal}
        modalText={modalOptions.text}
        show={modalOptions.show}
      />
      <div className='player-block' >
        <Player
          avatar={User}
          choice={userChoice}
          overlay={playerOverlay}
        />
        <Player
          avatar={opponentAvatar}
          choice={randomChoice}
          overlay={opponentOverlay}
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

const START_TEXT = 'click the button to start'
const WINNER_TEXT = 'you win'
const LOSER_TEXT = ' haha you lose'