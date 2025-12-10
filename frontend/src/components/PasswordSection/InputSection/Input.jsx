import React, { useState } from "react";
import "./Input.css";

function Input({ value, setValue, strengthColor, setServerdata }) {
  const [visible, setVisibility] = useState(false);

  function toggleVisibility() {
    setVisibility(!visible);
  }

  async function getPasswordInputValue() {
    try {
      const response = await fetch("http://127.0.0.1:5000/check_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: value }),
      });
      const passResult = await response.json();
      console.log("Response from backend:", passResult);
      setServerdata(passResult);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <section className="input-section">
      <input
        type={visible ? "text" : "password"}
        className="input"
        id="password-input" //ID needed to send to backend
        placeholder="Enter your password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ color: strengthColor }}
      ></input>
      <img
        className="show-image"
        src={visible ? "hide.png" : "show.png"}
        alt="Hide/Show Icon"
        onClick={() => toggleVisibility(visible)}
      ></img>

      <button className="check-button" onClick={getPasswordInputValue}>
        Check Password
      </button>
    </section>
  );
}

export default Input;
