import "./Evaluations.css";
function Evaluations({ evaluations }) {
  return (
    <section className="evaluations-section">
      <h1>Strength {evaluations.label}</h1>
      <div className="strength-bar">
        <div
          className="strength-bar-level"
          style={{
            backgroundColor: evaluations.strengthColor,
            width: `${((evaluations.level + 1) / 4) * 100}%`,
          }}
        ></div>
      </div>
      <p>Time To Crack: {evaluations.time}</p>
    </section>
  );
}

export default Evaluations;
