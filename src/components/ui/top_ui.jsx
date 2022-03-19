const TopUI = ({playerHealth, opHealth, battleNumber, currentTurn}) => {

return (
    <div>
    {currentTurn}
    <div>
  <p>Your Health: {playerHealth}</p>
  </div>
  <div>
      <h1>Dum Becca Game</h1>
      <h1>Battle Number {battleNumber}</h1>
  </div>
  <div>
  <p> Oponnents Health: {opHealth}</p> 
  </div>
</div>
)

}

export default TopUI;

