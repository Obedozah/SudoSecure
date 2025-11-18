import './PasswordSection.css';
import Input from "./Input";
import Evaluations from "./Evaluations";
import HIBP from "./HIBP";
import Suggestions from "./Suggestions";
import React, { useState } from "react";

function PasswordSection() {
  const [inputValue, setInputValue] = useState("");
  const expanded = inputValue !== "";

  return (
    <section className={`password-section ${expanded ? "expanded" : ""}`}>
      {/*Password Strength Checker Section wo/background*/}
      <div className="password-content">
        <Input value={inputValue} setValue={setInputValue}/>
        {expanded && <Evaluations />}
        {/*Have I Been Pwned/Suggestion Boxes*/}
        <div className="bottom-section">
          {expanded && <HIBP />}
          {expanded && <Suggestions />}
        </div>
      </div>
    </section>
  );
}

export default PasswordSection;