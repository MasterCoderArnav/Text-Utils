import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
      <Navbar title="TextUtils" mode = {darkMode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>  
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode = {darkMode} showAlert = {showAlert}/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
