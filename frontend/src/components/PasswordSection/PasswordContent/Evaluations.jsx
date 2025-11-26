import './Evaluations.css';
function Evaluations({ label, level, time, strengthColor }) {

    return (
        <section className="evaluations-section">
            <h1>Strength: {label}</h1>
            <div className="strength-bar">
                <div
                    className="strength-bar-level"
                    style={{
                        backgroundColor: strengthColor,
                        width: `${((level + 1) / 4) * 100}%`
                    }}
                >
                </div>
            </div>
            <p>Time To Crack: {time}</p>
        </section>
    );
}

export default Evaluations;