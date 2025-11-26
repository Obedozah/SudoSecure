import Input from './InputSection/Input';
import './PasswordSection.css';
import PasswordContent from './PasswordContent/PasswordContent'
import React, { useState, useEffect } from "react";

function PasswordSection() { 
  
  // Read PW Input
  const [inputValue, setInputValue] = useState("");

  // Evaluations Variables
  const [level, setLevel] = useState(0);
  const [label, setLabel] = useState("");
  const [time, setTime] = useState("");
  const [strengthColor, setStrengthColor] = useState("");
  const evaluations = {
    level: level,
    label: label,
    time: time,
    strengthColor: strengthColor
  };

  // Variables for Display Formatting
  const expanded = inputValue !== "";

  // Suggestions Variables **ADD TO THIS LIKE CONTAINS COMMON WORDS OR SOMETHING**
  const [hasUpper, setHasUpper] = useState(false);
  const [hasLower, setHasLower] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);
  const [hasLength, setHasLength] = useState(false);
  const [hasRepeatedChars, setRepeatedChars] = useState(true);
  const suggestions = {
    hasLength: hasLength,
    hasUpper: hasUpper,
    hasLower: hasLower,
    hasNumber: hasNumber,
    hasSpecial: hasSpecial,
    hasRepeatedChars: hasRepeatedChars
  };

  // HIBP Variables
  const [hibp, setHibp] = useState("");

  // useEffect for Minimum Requirements (Suggestions)
  useEffect(() => {
    const lengthValid = inputValue.length >= 16;
    const upperMatches = inputValue.match(/[A-Z]/g) || [];
    const lowerMatches = inputValue.match(/[a-z]/g) || [];
    const numberMatches = inputValue.match(/[0-9]/g) || [];
    const specialMatches = inputValue.match(/[^A-Za-z0-9]/g) || [];
    const repeatedChars = inputValue.match(/(.)\1{2,}/g) || [];

    setHasLength(lengthValid);
    setHasUpper(upperMatches.length >= 2);
    setHasLower(lowerMatches.length >= 2);
    setHasNumber(numberMatches.length >= 3);
    setHasSpecial(specialMatches.length >= 1);
    setRepeatedChars(repeatedChars.length === 0);
  }, [inputValue]);


  // useEffect TEMPLATE for Evaluations **CHANGE THESE TO ACTUAL ALGORITHMS** need all these states for pw observers 
  // Change time to actual calculated estimates
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
      else if (inputValue.length < 11){
          setLevel(1);
          setLabel("Okay");
          setTime("10 Days");
          setStrengthColor("#c3c841ff");
      }
      else if (inputValue.length < 16){
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
          inputValue={ inputValue }
          evaluations={ evaluations }
          hibp={ hibp }
          suggestions={ suggestions }
        />
      </div>
    </section>
  );
}

export default PasswordSection;