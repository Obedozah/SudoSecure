import './Input.css';

function toggleVisibility {
    if image
}

function Input() {
    return (
        <section className="input-section">
            Test Your Password
            <div className="input-box">
                <input type={visible ? "text" : "password"}
                    className="input" placeholder="Enter your password">
                </input>
                <img className="show-image"
                src={visible ? "hide.png" : "show.png"}
                alt="Hide/Show Icon"
                onClick={toggleVisibility}></img>
            </div>
        </section>
    );
}

export default Input;