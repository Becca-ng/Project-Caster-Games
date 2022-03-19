import React from 'react';

const Player = ({ avatar, backgroundColor, choice, losses, wins }) => {
  return (
    <div className="player-block__player" style={{backgroundColor: backgroundColor}}>
      <p>{avatar}</p>
      <p>{choice}</p>
      <p>{wins}-{losses}</p>
    </div>
  )
};

export default Player;