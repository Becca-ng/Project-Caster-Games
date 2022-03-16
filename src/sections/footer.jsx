import PlayerUI from "../components/player_ui";


const Footer = ({setMyChoice}) => {
    return (
      <footer>
        <div className="y-wrap footer">
          <p>Choose Your Attack!</p>
          <PlayerUI setMyChoice = {setMyChoice}/>
        </div>
      </footer>
    )
  };
  
  export default Footer;