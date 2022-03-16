import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./sections/header";
import Body from "./sections/body";
import Footer from "./sections/footer";
import Game from "./components/game";
import './style.css';


function App() {
  const [myChoice, setMyChoice] = useState("");
  const [playerHealth,setplayerHealth] = useState(2);
  const [OPHealth,setOPHealth] = useState(2);

  return (
    <>
    <div className="App">
     <Header />
     <Body/>
     
    </div>

    <Routes>
      <Route path = "/" element = {<Footer setMyChoice={setMyChoice} />} />
   
      <Route path = "/game" element = {<Game myChoice={myChoice} />} />
  
    </Routes>

    

    </>
  );
}

export default App; 
