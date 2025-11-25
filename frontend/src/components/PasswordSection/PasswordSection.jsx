import Input from './InputSection/Input';
import './PasswordSection.css';
import PasswordContent from './PasswordContent/PasswordContent'
import React, { useState, useEffect } from "react";

function PasswordSection() {
  // PASSWORD EVALUATION VARIABLES
  const [inputValue, setInputValue] = useState("");
  const [level, setLevel] = useState(0);
  const [label, setLabel] = useState("");
  const [time, setTime] = useState("");
  const [strengthColor, setStrengthColor] = useState("");

  // DYNAMIC FORMATTING VARIABLES
  const expanded = inputValue !== "";

  // CHANGE THIS TO ACTUALLY EVALUATE PASSWORD
  useEffect(() => {
      if (!inputValue) return;
      if (inputValue.length < 6) {
          setLevel(0);
          setLabel("Weak");
          setTime("10 Minutes");
          setStrengthColor("#c61010ff");
      }
      else if (inputValue.length < 12){
          setLevel(1);
          setLabel("Okay");
          setTime("10 Days");
          setStrengthColor("#dae030ff");
      }
      else if (inputValue.length < 18){
          setLevel(2);
          setLabel("Good");
          setTime("10 Years");
          setStrengthColor("#21af2fff");
      }
      else {
          setLevel(3);
          setLabel("Strong");
          setTime("Forever");
          setStrengthColor("#2e68beff");
      }
  }, [inputValue]);

  return (
    <section className="password-section">
      {/*Input Section*/}
      <div className="input-content">
        <Input value={inputValue} setValue={setInputValue}/>
      </div>
      <div className={`password-wrapper ${expanded ? "expanded" : ""}`}>
        <PasswordContent
          level={ level }
          label={ label }
          time={ time }
          strengthColor={ strengthColor }
        />
      </div>
    </section>
  );
}

export default PasswordSection;