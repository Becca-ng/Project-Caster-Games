import React from "react";
import { Link } from "react-router-dom";

const PlayerUI = ({ setMyChoice }) => {
    const setChoice = (e) => {
        setMyChoice(e.target.dataset.id);
        console.log(e.target.dataset.id);
    };


    return (
        <div className='btnBox'>
            <button data-id='fire' className='button fireBtn' onClick={setChoice} >
                Fire
            </button>
            <button data-id='water' className='button waterBtn' onClick={setChoice} >
                Water
            </button>
            <button data-id='grass' className='button grassBtn' onClick={setChoice} >
                Grass
            </button>
        </div>
    );
};

export default PlayerUI;
