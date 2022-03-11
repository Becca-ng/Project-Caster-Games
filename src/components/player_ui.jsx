import React from "react";
import { Link } from "react-router-dom";

const PlayerUI = ({setChoice}) => {
const setMyChoice = (e) =>  {
    setChoice(e.target.dataset.id);
}

return(
    <div className = 'btnBox'>
    <button data-id = 'fire' className = 'button fireBtn' >
        Fire
    </button>

    <button data-id='water' className='button waterBtn'>
        Water
    </button> 

    <button data-id='grass' className='button grassBtn'>
        Scissors
    </button>
    
</div>
 );
};

export default PlayerUI;
