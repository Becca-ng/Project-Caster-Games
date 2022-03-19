import React from "react";

const PlayerUI = ({ action }) => {

    return (
        <div className = "button_box">
                <button data-id='fire' className='button fireBtn' onClick={action} >
                    Fire
                </button>
                <button data-id='water' className='button waterBtn' onClick={action} >
                    Water
                </button>
                <button data-id='grass' className='button grassBtn' onClick={action} >
                    Grass
                </button>
        </div>
    );
};

export default PlayerUI;
