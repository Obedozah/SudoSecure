import React, { useState } from "react";
import './Input.css';

function Input({ value, setValue }) {
    const [visible, setVisibility] = useState(false);
    function toggleVisibility() {
        setVisibility(!visible);
    }

    return (
        <section className="input-section">
            <input
                type={visible ? "text" : "password"}
                className="input"
                placeholder="Enter your password"
                value={value}
                onChange={(e) => setValue(e.target.value)}>
            </input>
            <img 
                className="show-image"
                src={visible ? "hide.png" : "show.png"}
                alt="Hide/Show Icon"
                onClick={() => toggleVisibility(visible)}>
            </img>
        </section>
    );
}

export default Input;