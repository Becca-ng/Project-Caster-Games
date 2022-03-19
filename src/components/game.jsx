import React, { useEffect } from 'react';

const Game = ({ action, battleResults, randomChoice, userChoice }) => {

  useEffect(() => {
    const result = checkMatchUp();
    action(result);
  }, [userChoice]);

  const checkMatchUp = () => {
    if (
      (userChoice === 'fire' && randomChoice === 'grass') ||
      (userChoice === 'grass' && randomChoice === 'water') ||
      (userChoice === 'water' && randomChoice === 'fire')
    ) {
      return true;
    } else if (
      (userChoice === 'fire' && randomChoice === 'water') ||
      (userChoice === 'grass' && randomChoice === 'fire') ||
      (userChoice === 'water' && randomChoice === 'grass')
    ) {
      return false;
    } else {
      return null;
    }
  };

  return (
    <h1> Battle Winner: {battleResults} </h1>
  );

}

export default Game;
