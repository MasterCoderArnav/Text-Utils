import React, {useState} from "react";


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
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
                </div>
            </div>
        </>
    );
}
