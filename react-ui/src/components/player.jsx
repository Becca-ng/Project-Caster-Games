import React from 'react';

const Player = ({ avatar, choice}) => {
  return (
    <div className="player-block__player player" >
      <img src={avatar} width = "500" height = "700" ></img>
      <p>{choice}</p>
    </div>
  )
};
 
export default Player;