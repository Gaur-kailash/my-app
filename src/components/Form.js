import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");
  let words=text.split(" ").length;
  if(text.length===0){
    words = 0;
  }
  if(text.endsWith(" ")){
    words = text.split(" ").length-1 ;
  }
  const changeText = (e) => {
    setText(e.target.value);
  };
  const changeFont = () => {
    document.getElementById("preview").style.fontFamily =
      "'Courier New', Courier, monospace";
  };
  const toUp = ()=>{
    console.log("click");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const toHandleCopy = ()=>{
    // let copied = document.getElementById('txt');
    // copied.select();
    // navigator.clipboard.writeText(copied.value);
    navigator.clipboard.writeText(text);
  }
  const toClear = ()=>{
    setText("");
  }

  return (
    <>
      <form>
        <h2>Do manipulations with your text</h2>
        <textarea
          rows="10"
          cols="100"
          value={text}
          onChange={changeText}
          id="txt"
        ></textarea>
      </form>
      <div className="container">
        <button onClick={changeFont} id="fontButton" className="btn">
          Change font
        </button>
        <button onClick={toUp} className="btn">To UpperCase</button>
        <button onClick={toHandleCopy} className="btn">Copy Text</button>
        <button onClick={toClear} className="btn">Clear Text</button>
        <div>
          <h3>
            Your text summary 
          </h3>
          <p>{words}words    {text.length}characters</p>
          <p>Takes time for reading {0.009*words} minutes</p>
        </div>
        <div>
          <h3>Preview</h3>
        <p id="preview">{text}</p>
        </div>
      </div>
    </>
  );
}
