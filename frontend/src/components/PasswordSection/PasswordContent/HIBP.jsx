import './HIBP.css';

function HIBP({ hibp }) {
    let pwned = true;
    if (hibp === "") pwned = false;

    return (
        <section className="hibp-section">
            <hr className="whiteLine"/>
            {pwned ? (
                <div>
                    <h1>Pwned!</h1>
                    <p>This password has been found in {hibp} data breaches. Change it immediately!</p>
                </div>
            ) : (
                <div>
                    <h1>Not Pwned!</h1>
                    <p>This password has not been found in any data breaches.</p>
                </div>
            )}
        </section>
    );
}

export default HIBP;