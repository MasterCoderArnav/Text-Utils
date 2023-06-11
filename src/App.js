import "./App.css";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar title = "Text-Utils" aboutText = "About Us"/>
      <div className="container">
        <TextForm heading = "Enter your text to analyse"/>
      </div>
      <div className="container my-3">
        <About/>
      </div>
    </>
  );
}

export default App;
