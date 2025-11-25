import './Evaluations.css';
function Evaluations({ label, level, time, strengthColor }) {

    return (
        <section className="evaluations-section">
            Strength: {label}
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
            Time To Crack: {time}
        </section>
    );
}

export default Evaluations;