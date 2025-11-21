import { useState, useEffect } from "react";
import "./FAQ.css";

function FAQ() {
    const [zoomLevel, setZoomLevel] = useState(100);
    useEffect(() => {
    const calculateZoomLevel = () => {
      // Round to the nearest integer for a percentage
      setZoomLevel(Math.round(window.devicePixelRatio * 100));
    };

    // Initial calculation
    calculateZoomLevel();

    // Listen for resize events (which include zoom changes)
    window.addEventListener('resize', calculateZoomLevel);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', calculateZoomLevel);
    };
  }, []);


    const [q1Display, setQ1Visi] = useState('collapse');
    const [q1PlusDisplay, setQ1Plus] = useState("+");
    //MAKE DYNAMIC SPACING FOR FAQS
    const [q2DisplayTOP, setq2TOP] = useState('120px');
    const [q3DisplayTOP, setq3TOP] = useState('140px');
    const handleClickQ1 = ()=>{
        if(q1PlusDisplay==="+"){
            setQ1Plus("~")
            setQ2Plus("+")
            setQ3Plus("+")
        }else{
            setQ1Plus("+")
        }
        if(q1Display==='collapse'){
            setQ1Visi('visible');
            setQ2Visi('collapse');
            setQ3Visi('collapse');
        }else{
            setQ1Visi('collapse');
        }
        //Display moving
        if(q2DisplayTOP === '120px'){
            setq2TOP('280px')
        }else{
            setq2TOP('120px')
        }
        if(q3DisplayTOP === '140px'){
            setq3TOP('300px')
        }else if(q3DisplayTOP==='300px' && !(q2Display === 'visible')){
            setq3TOP('140px')
        }
    }
    const [q1Hover, setQ1Hover] = useState("default-border");


    const [q2Display, setQ2Visi] = useState('collapse');
    const [q2PlusDisplay, setQ2Plus] = useState("+");
    const handleClickQ2 = ()=>{
        if(q2PlusDisplay==="+"){
            setQ2Plus("~")
            setQ3Plus("+")
            setQ1Plus("+")
        }else{
            setQ2Plus("+")
        }
        if(q2Display==='collapse'){
            setQ2Visi('visible');
            setQ1Visi('collapse');
            setQ3Visi('collapse');
        }else{
            setQ2Visi('collapse');
        }
        //Display moving
        if(q2DisplayTOP === '280px'){
            setq2TOP('120px')
        }
        if(q3DisplayTOP === '140px'){
            setq3TOP('300px')
        }else if(q3DisplayTOP==='300px'&& !(q1Display=== 'visible')){
            setq3TOP('140px')
        }
    }
    const [q2Hover, setQ2Hover] = useState("default-border");


    const [q3Display, setQ3Visi] = useState('collapse');
    const [q3PlusDisplay, setQ3Plus] = useState("+");
    const handleClickQ3 = ()=>{
        if(q3PlusDisplay==="+"){
            setQ3Plus("~")
            setQ2Plus("+")
            setQ1Plus("+")
        }else{
            setQ3Plus("+")
        }
        if(q3Display==='collapse'){
            setQ3Visi('visible');
            setQ2Visi('collapse');
            setQ1Visi('collapse');
        }else{
            setQ3Visi('collapse');
        }
        setq3TOP('140px')
        setq2TOP('120px')
    }
    
    const [q3Hover, setQ3Hover] = useState("default-border");

    return (
    <header>
      {/* ===== GOOD PRACTICES ===== */}
      <h1 id="GoodP" className="goodp-section">
        <b className="goodp-title">Good Practices</b>
        <p className="goodp-sub">This section includes sotck images of locks/small widgets with tips on password mistakes</p>
      </h1>

      {/* ===== FAQ SECTION ===== */}
      <h1
        id="FAQ"
        className="faq-section"
        style={{
          height: zoomLevel < 300 ? "550px" : "900px",
        }}
      >
        <b
          className="faq-header"
          style={{ top: "40px" }}
        >
          Frequently Asked Questions
        </b>

        {/* ---------------- Q1 ---------------- */}
        <div className="faq-row">
          <button
            onClick={handleClickQ1}
            className={`faq-btn ${q1Hover}`}
            style={{
              height: zoomLevel < 500 ? "40px" : "75px",
            }}
          >
            What Is a Password Checker?
            <p className="faq-plus">{q1PlusDisplay}</p>

            <table
              className="faq-answer"
              style={{
                visibility: q1Display,
                fontSize:
                  zoomLevel < 400
                    ? "30px"
                    : zoomLevel < 500
                    ? "25px"
                    : "23px",
              }}
            >
              The Hog Rider in Clash Royale is a fast, single-target troop that heads 
                straight for buildings, leaping over rivers to reach them quickly. He deals 
                solid melee damage and is often used as a win condition due to his speed and 
                ability to pressure towers efficiently.
            </table>
          </button>
        </div>

        {/* ---------------- Q2 ---------------- */}
        <div className="faq-row">
          <button
            onClick={handleClickQ2}
            className={`faq-btn ${q2Hover}`}
            style={{ top: q2DisplayTOP }}
          >
            Is The Website Safe?
            <p className="faq-plus">{q2PlusDisplay}</p>

            <table
              className="faq-answer"
              style={{
                visibility: q2Display,
                fontSize:
                  zoomLevel < 400
                    ? "30px"
                    : zoomLevel < 500
                    ? "25px"
                    : "23px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                 commodo consequat. Duis aute irure dolor in reprehenderit.
            </table>
          </button>
        </div>

        {/* ---------------- Q3 ---------------- */}
        <div className="faq-row">
          <button
            onClick={handleClickQ3}
            className={`faq-btn ${q3Hover}`}
            style={{ top: q3DisplayTOP,
              height: zoomLevel < 500 ? "40px" : "75px", }}
          >
            Can a Strong Password Get Hacked?
            <p className="faq-plus">{q3PlusDisplay}</p>

            <table
              className="faq-answer"
              style={{
                visibility: q3Display,
                fontSize:
                  zoomLevel < 400
                    ? "30px"
                    : zoomLevel < 500
                    ? "25px"
                    : "23px",
              }}
            >
              Apple Bannana Cucumber Desert Emmett Faraway Great High-five Internet Joe
                Karat Lemons Minnetsota. Niagra Falls Orangutan Prerequisite Quintanilla 
                Rusty Southern Tires Umbrella Video Wires Xylophone Young Zootopia.
            </table>
          </button>
        </div>
      </h1>
    </header>
  );
}

export default FAQ;
