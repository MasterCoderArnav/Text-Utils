import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if(darkMode===false){
      setDarkMode(true);
      document.body.style.backgroundColor = "#0d072a";
      showAlert("success", darkMode);
    }
    else{
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
      showAlert("success", darkMode);
    }
  }
  const showAlert = (type) => {
    setAlert({
      type: type,
      mode: darkMode,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Navbar title = "Text-Utils" aboutText = "About Us" mode = {darkMode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <TextForm heading = "Enter your text to analyse" mode = {darkMode}/>
      </div>
    </>
  );
}

export default App;
