import React from 'react';

const Player = ({ avatar, choice }) => {
  return (
    <div>
      <div>
      <img src={avatar} width='500' height = '700' ></img>
      </div>
    </div>
  )
};
 
export default Player;