import "./HIBP.css";

function HIBP({ hibp }) {
  let pwned = true;
  if (hibp === "") pwned = false;

  return (
    <section className="hibp-section">
      <hr className="whiteLine" />
      {pwned ? (
        <div>
          <h1>Has this Password been Pwned!?</h1>
          <p>{hibp}</p>
        </div>
      ) : (
        <div>
          <h1>Has this Password been Pwned!?</h1>
          <p>{hibp}</p>
        </div>
      )}
    </section>
  );
}

export default HIBP;
