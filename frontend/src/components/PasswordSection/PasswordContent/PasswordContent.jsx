import Evaluations from "./Evaluations";
import HIBP from "./HIBP";
import Suggestions from "./Suggestions";
import './PasswordContent.css'

function PasswordContent({ label, level, time, strengthColor, inputValue, hibp}) {
    return (
        <section className="password-content">
            <Evaluations
                label={ label }
                level={ level }
                time={ time }
                strengthColor= { strengthColor }
                />
            <HIBP 
                hibp={ hibp }
            />
            <Suggestions />
        </section>
    )
}

export default PasswordContent;