import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [zoomLevel, setZoomLevel] = useState(100);

  useEffect(() => {
    const calculateZoomLevel = () => {
      setZoomLevel(Math.round(window.devicePixelRatio * 100));
    };

    calculateZoomLevel();
    window.addEventListener("resize", calculateZoomLevel);
    return () => window.removeEventListener("resize", calculateZoomLevel);
  }, []);
//==========================
//CHECK WINDOW MODE
//==========================
  const[winWidth, setWinWidth] = useState(2560);
  const [winlength, setWinLength] = useState(window.outerWidth);

  useEffect(() => {
    const calculateWindowWidth = () => {
      setWinWidth(window.innerWidth);
      setWinLength(window.outerWidth);
    };

    calculateWindowWidth();
    window.addEventListener("resize", calculateWindowWidth);
    return() => window.removeEventListener("resize", calculateWindowWidth);
  }, []);

  // Dynamic styles that *must* remain in JS
  const logoStyle = {
    height: "75px",
    position: "absolute",
    top: "23px",
    left: (winWidth===winlength|| winWidth>winlength+616)?
      zoomLevel < 175
        ? "330px"
        : zoomLevel <= 250
        ? "120px"
        : "-5px":'-5px',
  };

  const titleStyle = {
    fontSize: "2.8rem",
    fontWeight: "200",
    transform: "skew(-6deg)",
    position: "absolute",
    top: "35px",
    left: (winWidth===winlength|| winWidth>winlength+616)?
      zoomLevel < 175
        ? "388px"
        : zoomLevel <= 250
        ? "178px"
        : "53px":'53px',
  };

  // const updateWinLen=()=>{
  //   setWinLen(Math.round(window.innerWidth*100));
  // }
  const btnCommon = {
    backgroundColor: "#333",
    color: "#fff",
    border: "0",
    cursor: "pointer",
    position: "absolute",
    height: (winWidth===winlength|| winWidth>winlength+616)? zoomLevel <= 250 ? "65px" : "45px":'45px',
    width: (winWidth===winlength|| winWidth>winlength+616)? zoomLevel <= 250 ? "150px" : "105px":'105px',
    fontSize: (winWidth===winlength|| winWidth>winlength+616)? zoomLevel <= 250 ? "18px" : "13px":'13px',
    top: (winWidth===winlength|| winWidth>winlength+616)? (zoomLevel <= 250 ? "35px" : "45px") : ((zoomLevel<110)? '45px': (winWidth+1900<winlength)? '45px': ((winWidth>=1800&&winlength>=1800)||winWidth>=500)? '45px':'100px'),
  };

  return (
    <header>
      <h1 className="header-top">
        <img
          src={process.env.PUBLIC_URL + "/lock.png"}
          alt="logo"
          style={logoStyle}
        />

        <i style={titleStyle}>
          {/* {window.outerWidth} window.lengt{winWidth} */}
          sudo<b>Secure</b>
        </i>
        {/* <button onClick={updateWinLen}>Bro</button> */}

        <button
          onClick={() => {
            window.location.replace("#GoodP");
          }}
          style={{
            ...btnCommon,
            right: (winWidth===winlength|| winWidth>winlength+616)?
              zoomLevel < 175
                ? "515px"
                : zoomLevel <= 250
                ? "305px"
                : "105px": '105px',
            borderTopLeftRadius: "9px",
            borderBottomLeftRadius: "9px",
          }}
        >
          Good
          <br />
          Practices
        </button>

        <button
          onClick={() => {
            window.location.replace("#FAQ");
          }}
          style={{
            ...btnCommon,
            right: (winWidth===winlength|| winWidth>winlength+616)?
              zoomLevel < 175
                ? "365px"
                : zoomLevel <= 250
                ? "155px"
                : "0px": "0px",
            borderTopRightRadius: "9px",
            borderBottomRightRadius: "9px",
          }}
        >
          FAQ
        </button>
      </h1>

      <h1 className="header-bottom">
        <b
          className="password-title"
          style={{
            height: zoomLevel < 400 ? zoomLevel < 250? "60px": '80px' : "110px",
            top: "0px",
          }}
        >
          <b>HOW SECURE IS YOUR PASSWORD?</b>
        </b>
      </h1>
    </header>
  );
}

export default Header;