import PlayerUI from "./player_ui";
import Dialogue from "../dialogue";

const BottomUI = ({ action, isDialogue, battleResults, nextMatch}) => {

    return (
        <div className="bottomBox">
            {function () {
                if (!isDialogue) {
                    return <PlayerUI action={action} />
                }
                else {
                    return <Dialogue battleResults={battleResults} nextMatch={nextMatch}/>
                }
            }.call(this)}
        </div>
    )
}

export default BottomUI;