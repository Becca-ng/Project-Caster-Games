import PlayerUI from "./player_ui";
import Dialogue from "../dialogue";

const BottomUI = ({ action, isDialogue }) => {

    return (
        <>
            {function () {
                if (!isDialogue) {
                    return <PlayerUI action={action} />
                }
                else {
                    return <Dialogue />
                }
            }.call(this)}
        </>
    )
}

export default BottomUI;