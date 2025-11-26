import Input from './InputSection/Input';
import './PasswordSection.css';
import PasswordContent from './PasswordContent/PasswordContent'
import React, { useState, useEffect } from "react";

function PasswordSection() {
  // Password Input Section Variables
  const [inputValue, setInputValue] = useState("");
  const [level, setLevel] = useState(0);
  const [label, setLabel] = useState("");
  const [time, setTime] = useState("");
  const [strengthColor, setStrengthColor] = useState("");
  const [hibp, setHibp] = useState("");

  // Variables for Display Formatting
  const expanded = inputValue !== "";

  // useEffect TEMPLATE for Evaluations **CHANGE THESE TO ACTUAL ALGORITHMS** need all these states for pw observers 
  // Change est time to actual calculated estimates
  useEffect(() => {
      if (!inputValue) {
          setLevel(0);
          setLabel("");
          setTime("");
          setStrengthColor("#ffffffff");
        return;
      }
      if (inputValue.length < 6) {
          setLevel(0);
          setLabel("Weak");
          setTime("10 Minutes");
          setStrengthColor("#cd5050ff");
      }
      else if (inputValue.length < 12){
          setLevel(1);
          setLabel("Okay");
          setTime("10 Days");
          setStrengthColor("#c3c841ff");
      }
      else if (inputValue.length < 18){
          setLevel(2);
          setLabel("Good");
          setTime("10 Years");
          setStrengthColor("#2aae37ff");
      }
      else {
          setLevel(3);
          setLabel("Strong");
          setTime("Forever");
          setStrengthColor("#3980eaff");
      }
  }, [inputValue]);

  // useEffect TEMPLATE for HIBP **CHANGE THESE TO ACTUAL ALGORITHMS**
  // hibp variable is number of breaches found if empty then not pwned
  useEffect(() => {
    if (level === 0) {
      setHibp("1000");
    }
    else if (level === 1) {
      setHibp("100");
    }
    else if (level === 2) {
      setHibp("10");
    }
    else {
      setHibp("");
    }
  }, [level]);

  return (
    <section className="password-section">
      {/*Input Section*/}
      <div className="input-content">
        <Input value={ inputValue } setValue={ setInputValue } strengthColor={ strengthColor }/>
      </div>
      <div className={`password-wrapper ${expanded ? "expanded" : ""}`}>
        <PasswordContent
          level={ level }
          label={ label }
          time={ time }
          strengthColor={ strengthColor }
          inputValue={ inputValue }
          hibp={ hibp }
        />
      </div>
    </section>
  );
}

export default PasswordSection;