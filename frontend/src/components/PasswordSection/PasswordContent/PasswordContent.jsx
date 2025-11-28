import Evaluations from "./Evaluations";
import HIBP from "./HIBP";
import Suggestions from "./Suggestions";
import './PasswordContent.css'

function PasswordContent({ inputValue, evaluations, hibp, suggestions }) {
    return (
        <section className="password-content">
            <Evaluations
                evaluations={ evaluations }
                />
            <Suggestions
                inputValue={ inputValue }
                suggestions={ suggestions }
            />
            <HIBP 
                hibp={ hibp }
            />
        </section>
    )
}

export default PasswordContent;