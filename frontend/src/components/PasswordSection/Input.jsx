import './Input.css';

function Input() {
    return (
        <section className="input-section">
            Test Your Password
            <div className="input-box">
                <input type="text"
                    className="input"   placeholder="Enter your password">
                </input>
                <img className="show-image" src="show.png" alt="Show Icon"></img>
            </div>
        </section>
    );
}

export default Input;