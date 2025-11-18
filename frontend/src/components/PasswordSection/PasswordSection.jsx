import './PasswordSection.css';
import Input from "./Input";
import Evaluations from "./Evaluations";
import HIBP from "./HIBP";
import Suggestions from "./Suggestions";

function PasswordSection() {
  return (
    <section className="password-section">
      {/*Password Strength Checker Section wo/background*/}
      <div className="password-content">
        <Input />
        <Evaluations />

        {/*Have I Been Pwned/Suggestion Boxes*/}
        <div className="bottom-section">
          <HIBP />
          <Suggestions />
        </div>
      </div>
    </section>
  );
}

export default PasswordSection;