import React, {useState} from "react";


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }    
    const handleLowerCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleCapitalise = () => {
        let arr = text.split(". ");
        let newText="";
        for(let i=0; i<arr.length; i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            if(i!==arr.length-1){
                arr[i] += ". ";
            }
            newText += arr[i];
        }
        setText(newText);
    }
    const handleClear = () => {
        setText("");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="my-3">
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="myTextBox" rows="8" value = {text} onChange={handleOnChange}>

                    </textarea>
                    <button className="btn btn-primary my-3" onClick= {handleUpperCase}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-3 my-3" onClick= {handleLowerCase}>Convert to Lowercase</button>
                    <button className="btn btn-primary my-3" onClick= {handleCapitalise}>Capitalise Text</button>
                    <button className="btn btn-primary mx-3 my-3" onClick= {handleClear}>Clear Text</button>
                </div>
            </div>
            <div className="container my-2">
                <h3>Your text summary here</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{text.split(" ").length*0.005} minutes read</p>
            </div>
            <div className="container my-2">
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
