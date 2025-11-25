import Input from './InputSection/Input';
import './PasswordSection.css';
import PasswordContent from './PasswordContent/PasswordContent'
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
        <PasswordContent/>
      </div>
    </section>
  );
}

export default PasswordSection;