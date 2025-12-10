import "./Suggestions.css";

function Suggestions({ suggestions }) {
  return (
    <section className="suggestions-section">
      <hr className="whiteLine" />
      <h1 className="suggestions-header">Suggestions:</h1>
      <ul className="suggestions-list">
        {!suggestions.hasUpper && <li>Include at least 2 uppercase letters</li>}
        {!suggestions.hasLower && <li>Include at least 2 lowercase letters</li>}
        {!suggestions.hasNumber && <li>Include at least 3 numbers</li>}
        {!suggestions.hasSpecial && (
          <li>Include at least 1 special characters</li>
        )}
        {!suggestions.hasLength && (
          <li>Make your password at least 16 characters long</li>
        )}
        {!suggestions.hasRepeatedChars && <li>Avoid 3-repeated characters</li>}
        {suggestions && <li>Things you can add: {suggestions.feedback} </li>}
        {suggestions.hasUpper &&
          suggestions.hasLower &&
          suggestions.hasNumber &&
          suggestions.hasSpecial &&
          suggestions.hasLength && <li>Minimum Requirements Met!</li>}
      </ul>
      <h2 className="minimum-requirements">
        <span
          style={{ color: suggestions.hasUpper ? "#2aae37ff" : "#cd5050ff" }}
        >
          {" "}
          UPPER{" "}
        </span>
        <span
          style={{ color: suggestions.hasLower ? "#2aae37ff" : "#cd5050ff" }}
        >
          {" "}
          LOWER{" "}
        </span>
        <span
          style={{ color: suggestions.hasNumber ? "#2aae37ff" : "#cd5050ff" }}
        >
          {" "}
          NUMBER{" "}
        </span>
        <span
          style={{ color: suggestions.hasSpecial ? "#2aae37ff" : "#cd5050ff" }}
        >
          {" "}
          SPECIAL{" "}
        </span>
      </h2>
    </section>
  );
}

export default Suggestions;
