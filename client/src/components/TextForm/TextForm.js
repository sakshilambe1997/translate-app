import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState(" ");

  const convertToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const convertToLowerCase = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
  };

  const clearText = () => {
   let newText =""
   setText(newText)
  };


  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const convertToMarathi = async () => {
    try {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=mr&dt=t&q=${encodeURIComponent(
          text
        )}`
      );
      const result = await response.json();
      const translatedText = result[0][0][0]; // Extract the translated text
      setText(translatedText);
    } catch (error) {
      console.error("Error while translating:", error);
      alert("Failed to translate. Please try again later.");
    }
  };

  return (
    <>
    <div>
      <h3 className="text-center my-4">{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control border border-primary w-75 d-block mx-auto my-0"
          id="myBox"
          rows="7"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mx-2"
          onClick={convertToUpperCase}
        >
          To Uppercase
        </button>

        <button
          className="btn btn-primary mx-2"
          onClick={convertToLowerCase}
        >
          To Lowercase
        </button>

        <button
          className="btn btn-primary mx-2"
          onClick={convertToMarathi}
        >
          Convert to Marathi
        </button>

        <button
          className="btn btn-primary mx-2"
          onClick={clearText}
        >
         Clear Text
        </button>
      </div>
    </div>

    <div className="container my-3">
      <h4><u>Your Text Summury</u></h4>

      <p>{text.split(" ").length} word and {text.length}characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
    
      <h4><u>Preview</u></h4>

      <p>{text}</p>

    </div>
    </>
  );
}

export default TextForm;