import Evaluations from "./Evaluations";
import HIBP from "./HIBP";
import Suggestions from "./Suggestions";

function PasswordContent() {
    return (
        <section className="password-content">
            {/*Evaluations Section*/}
            <Evaluations />
            {/*Have I Been Pwned/Suggestion Section*/}
            <HIBP />
            <Suggestions />
        </section>
    )
}

export default PasswordContent;