import React from "react";
import { Link } from "react-router-dom";

const PlayerUI = ({ setMyChoice }) => {
    const setChoice = (e) => {
        setMyChoice(e.target.dataset.id);
    }

    return (
        <div className='btnBox'>
            <button data-id='fire' className='button fireBtn' >
                Fire
            </button>

            <button data-id='water' className='button waterBtn'>
                Water
            </button>

            <button data-id='grass' className='button grassBtn'>
                Grass
            </button>

        </div>
    );
};

export default PlayerUI;
