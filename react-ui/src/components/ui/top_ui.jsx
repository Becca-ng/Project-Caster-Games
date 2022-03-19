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
  <h1>Your Health: {playerHealth}</h1>
  </div>
  <div className = " top title">
      <h2>Caster Games</h2> <br/>
      <p>Battle {battleNumber}</p>
  </div>
  <div className='top Health opponentHealth'>
  <h1> Opponents Health: {opponentHealth}</h1> 
  </div>
</div>
)

}

export default TopUI;

