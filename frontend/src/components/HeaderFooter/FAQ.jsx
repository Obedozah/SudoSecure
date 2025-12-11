import { useState, useRef } from "react";
import "./FAQ.css";

function FAQ() {
  const goodPractices = [
    { img: "img1.png", title: "Use Complex Passwords", text: "Try using complex passwords over simple, easy to remember passwords." },
    { img: "img2.png", title: "Disable Browser Password Saving", text: "Don’t let browsers save your passwords when logging into websites." },
    { img: "img3.png", title: "Enable MFA", text: "Try setting up multi-factor authentication for applications you regularly use." },
    { img: "img4.png", title: "Don't Share Passwords", text: "Don’t share your passwords with others or websites that look sketchy." },
    { img: "img5.png", title: "Don't Reuse Passwords", text: "Try to avoid using the same or similar password across all of your accounts." },
    { img: "img6.png", title: "Physical Instead of Digital Copies", text: "Consider writing passwords on paper rather than storing them in plain files." },
  ];

  const faqsData = [
    { question: "What Is a Password Checker?", answer: "A password checker is a website or application which takes a password and tells you aspects about it, such as the strength, how long it would take to crack, where it falls short, and even if it has been leaked (pwned)." },
    { question: "Is The Website Safe?", answer: "Yes this website is safe, it does not store/save your password; it simply runs tests on it to give you an accurate rating on how strong and/or secure it is among other features." },
    { question: "Can a Strong Password Get Hacked?", answer: "Theoretically, any password could get cracked or 'hacked,' but the stronger and more complex it is, the harder it is to do so." },
    { question: "How does the Strength Checker Work?", answer: "The strength checker runs a set of tests on your password (length, character mix, commonness, breach checks) and estimates crack time and suggestions." },
    { question: "How do you know if my password has been PWNED?", answer: "SudoSecure uses an API (HaveIBeenPwned) to cross-reference your password against known breached password hashes and reports whether it was found." },
  ];

  // Expanded state for Good Practices and FAQ
  const [expandedGP, setExpandedGP] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const goodpRefs = useRef([]);

  return (
    <header className="goodp-faq-wrapper">

      {/* Good Practices */}
        <section id="GoodP" className="goodp-section">
        <h2 className="goodp-title"><b>Good Practices</b></h2>
        <div className="goodp-sub">
            {goodPractices.map((gp, i) => (
            <div key={i} className="goodp-col">
                <div
                    ref={el => goodpRefs.current[i] = el}
                    className={`goodp-image ${expandedGP === i ? "expanded" : ""}`}
                    onClick={() => setExpandedGP(expandedGP === i ? null : i)}
                    onMouseEnter={() => setExpandedGP(i)}
                    onMouseLeave={() => {
                        setExpandedGP(null);
                        if (goodpRefs.current[i]) {
                        goodpRefs.current[i].scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                >
                <img className="goodp-img" src={gp.img} alt={gp.title} />
                <p className="goodp-heading">{gp.title}</p>
                <p className="goodp-img-text">{gp.text}</p>
                </div>

            </div>
            ))}
        </div>
        </section>

      {/* FAQ Section */}
      <section id="FAQ" className="faq-section">
        <h2 className="faq-header"><b>Frequently Asked Questions</b></h2>
        <div className="faq-questions">
          {faqsData.map((faq, i) => {
            const isExpanded = expandedFAQ === i;
            return (
              <article key={i} className="faq-row">
                <button
                  onClick={() => setExpandedFAQ(isExpanded ? null : i)}
                  className="faq-btn default-border"
                >
                  <span>{faq.question}</span>
                  <p className="faq-plus">{isExpanded ? "ᐱ" : "ᐯ"}</p>
                </button>
                <div
                  className="faq-answer-wrap"
                  style={{ height: isExpanded ? `${faq.answer.length * 1.2}px` : "0px" }}
                >
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </header>
  );
}

export default FAQ;
