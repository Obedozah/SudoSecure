import "./Header.css";

function Header() {

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="header">
        <div className="header-top">
            <div className="header-title" onClick={() => scrollToId("header-bot")}>
                <img className="logo" src={process.env.PUBLIC_URL + "/lock.png"} alt="logo"/>
                <span className="header-title-sudo">sudo</span>
                <span className="header-title-secure">Secure</span>
            </div>

            <div className="nav-bar">
                <button className="good-practices-button" onClick={() => scrollToId("GoodP")}>
                    <span className="good-practices-label">Good Practices</span>
                </button>
                <button className="faq-button" onClick={() => scrollToId("FAQ")}>
                    <span className="faq-label">FAQ</span>
                </button>
            </div>
        </div>

        <h1 className="header-bottom" id="header-bot">
            <span className="password-title">
                <b className="password-title-label">HOW SECURE IS YOUR PASSWORD?</b>
            </span>
        </h1>
    </section>
  );
}

export default Header;