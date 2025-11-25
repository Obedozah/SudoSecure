import './PasswordSection.css';
import Input from "./InputSection/Input";
import Evaluations from "./EvaluationsSection/Evaluations";
import HIBP from "./BottomSection/HIBP";
import Suggestions from "./BottomSection/Suggestions";
import React, { useState } from "react";

function PasswordSection() {
  const [inputValue, setInputValue] = useState("");
  const expanded = inputValue !== "";

  return (
    <section className="password-section">
      {/*Input Section*/}
      <div className="input-content">
        <Input value={inputValue} setValue={setInputValue}/>
      </div>
      <div className={`password-content ${expanded ? "expanded" : ""}`}>
        {/*Evaluations Section*/}
        <Evaluations />
        {/*Have I Been Pwned/Suggestion Section*/}
        <HIBP />
        <Suggestions />
      </div>
    </section>
  );
}

export default PasswordSection;