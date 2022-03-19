import React from 'react';

const Player = ({ avatar, choice , overlay}) => {
  return (
    <div>
      <div>
      <img src={avatar} width='500' height = '700' />
      </div>
    </div>
  )
};
 
export default Player;