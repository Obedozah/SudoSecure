import React, { useEffect, useState } from "react";
import "./Input.css";

function Input({ value, setValue, strengthColor, setServerdata }) {
  const [visible, setVisibility] = useState(false);

  function toggleVisibility() {
    setVisibility(!visible);
  }
  useEffect(() => {
    if (!value) {
      setServerdata(null);
      return;
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      (async () => {
        try {
          const response = await fetch("http://localhost:5000/check_password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ password: value }),
            signal: controller.signal,
          });

          const passResult = await response.json();
          console.log("Response from backend:", passResult);
          setServerdata(passResult);
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Error", error);
          }
        }
      })();
    }, 90);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [value, setServerdata]);

  function getPasswordInputValue() {
    // This function is intentionally left blank as the password input value
    // is already being managed by the parent component through props.
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
    </section>
  );
}

export default Input;
