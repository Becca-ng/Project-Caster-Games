import {useEffect} from 'react';

const TopUI = ({playerHealth, opponentHealth, battleNumber, currentTurn, finalizeMatch}) => {

  useEffect(() => {
    if(playerHealth <= 0 || opponentHealth <= 0) {
      finalizeMatch();
    }
  });

return (
    <div className = "top-container">
    <div className = "top Health userHealth">
  <p>Your Health: {playerHealth}</p>
  </div>
  <div className = " top title">
      <h1>Dum Becca Game</h1> <br/>
      <h1>Battle {battleNumber}</h1>
  </div>
  <div className='top Health opponentHealth'>
  <p> Oponnents Health: {opponentHealth}</p> 
  </div>
</div>
)

}

export default TopUI;

