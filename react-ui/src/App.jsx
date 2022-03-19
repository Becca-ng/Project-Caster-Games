import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header, Body } from './indicies/sectionIndex';
import Game from "./components/game";
import './style.css';

function App() {

  return (
    <>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App; 
