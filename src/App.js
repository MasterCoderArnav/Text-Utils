// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// let name = "Arnav";
function App() {
  return (
    <>
      <Navbar title = "Text-Utils" aboutText = "About Us"/>
      <div className="container">
        <TextForm heading = "Enter your text to analyse"/>
      </div>
    </>
  );
}

export default App;
