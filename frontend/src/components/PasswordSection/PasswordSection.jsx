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
    <section className={`password-section ${expanded ? "expanded" : ""}`}>
      {/*Password Strength Checker Section wo/background*/}
      <div className="password-content">
        <Input value={inputValue} setValue={setInputValue}/>
        {/*Evaluations Section*/}
        {expanded && <Evaluations />}
        {/*Have I Been Pwned/Suggestion Section*/}
        {expanded && <HIBP />}
        {expanded && <Suggestions />}
      </div>
    </section>
  );
}

export default PasswordSection;