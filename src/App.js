import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    if(darkMode===false){
      setDarkMode(true);
      document.body.style.backgroundColor = "#0d072a";
    }
    else{
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title = "Text-Utils" aboutText = "About Us" mode = {darkMode} toggleMode = {toggleMode}/>
      <div className="container">
        <TextForm heading = "Enter your text to analyse" mode = {darkMode}/>
      </div>
      {/* <div className="container my-3" mode = {darkMode}>
        <About/>
      </div> */}
    </>
  );
}

export default App;
