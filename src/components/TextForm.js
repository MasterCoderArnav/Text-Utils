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
    const handleCopy = () => {
        var text = document.getElementById("myTextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);//Regular expression for multiple spaces
        setText(newText.join(" "))
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div className="container my-3">
            <div className="my-3">
                <h3 style={{color:props.mode?"whitesmoke":"black"}}>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="myTextBox" rows="8" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode?"grey":"white", color:props.mode?"whitesmoke":"black"}}>

                    </textarea>
                    <button className="btn btn-primary my-3" onClick= {handleUpperCase}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-3 my-3" onClick= {handleLowerCase}>Convert to Lowercase</button>
                    <button className="btn btn-primary my-3" onClick= {handleCapitalise}>Capitalise Text</button>
                    <button className="btn btn-primary mx-3 my-3" onClick= {handleClear}>Clear Text</button>
                    <button className="btn btn-primary my-3" onClick= {handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-3 my-3" onClick= {handleSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-2" style={{color:props.mode?"whitesmoke":"black"}}>
                <h3>Your text summary here</h3>
                <p>{(text.split(" ")[text.split(" ").length-1]==="")?text.split(" ").length-1:text.split(" ").length} words and {text.length} characters</p>
                <p>{((text.split(" ")[text.split(" ").length-1]==="")?text.split(" ").length-1:text.split(" ").length)*0.005} minutes read</p>
            </div>
            <div className="container my-2" style={{color:props.mode?"whitesmoke":"black"}}>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter some text in text box to preview it here"}</p>
            </div>
        </div>
    );
}
