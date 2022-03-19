import React from "react";

const PlayerUI = ({ action }) => {

    return (
        <div className="buttonGroup">
            <fire>
                <button data-id='fire' className='fireBtn' onClick={action} >
                    Fire
                </button>
            </fire>
                <button data-id='water' className='waterBtn'  onClick={action} >
                    Water
                </button>
                <button data-id='grass' className='grassBtn'  onClick={action} >
                    Grass
                </button>
        </div>
    );
};

export default PlayerUI;
