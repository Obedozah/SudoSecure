import './PasswordSection.css';
import Input from "./Input";
import Evaluations from "./Evaluations";
import HIBP from "./HIBP";
import Suggestions from "./Suggestions";

function PasswordSection() {
  return (
    <section
      className="password-section"
    >
      <div
        className="password-content"
      >
        <Input />
        <Evaluations />
        <div className="bottom-section">
          <HIBP />
          <Suggestions />
        </div>
      </div>
    </section>
  );
}

export default PasswordSection;