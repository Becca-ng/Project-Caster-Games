import {useEffect} from 'react';

const TopUI = ({playerHealth, opponentHealth, battleNumber, battleResults, currentTurn, finalizeMatch, endGame}) => {

  useEffect(() => {
    if(opponentHealth <= 0) {
      finalizeMatch();
    }if(battleNumber > 3){
      endGame(true);
    } else if (playerHealth <= 0) {
      endGame(false);
    }
  }, [opponentHealth, battleNumber, playerHealth]);

return (
    <div className = "top-container">
    <div className = "top Health userHealth">
  <p>Your Health: {playerHealth}</p>
  </div>
  <div className = " top title">
      <h1>Caster Games</h1> <br/>
      <h1>Battle {battleNumber}</h1>
  </div>
  <div className='top Health opponentHealth'>
  <p> Opponents Health: {opponentHealth}</p> 
  </div>
</div>
)

}

export default TopUI;

