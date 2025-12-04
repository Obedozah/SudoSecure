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
    const [q4Display, setQ4Visi] = useState('collapse');
    const [q4PlusDisplay, setQ4Plus] = useState("+");
    const [q5Display, setQ5Visi] = useState('collapse');
    const [q5PlusDisplay, setQ5Plus] = useState("+");
    //MAKE DYNAMIC SPACING FOR FAQS
    const [q1expanded, setq1expand] = useState(false);
    const [q2expanded, setq2expand] = useState(false);
    const [q3expanded, setq3expand] = useState(false);
    const [q4expanded, setq4expand] = useState(false);
    const [q5expanded, setq5expand] = useState(false);
    const handleClickQ1 = ()=>{
        if(q1PlusDisplay==="+"){
            setQ1Plus("~")
            setQ2Plus("+")
            setQ3Plus("+")
            setQ4Plus("+")
            setQ5Plus("+")
        }else{
            setQ1Plus("+")
        }
        if(q1Display==='collapse'){
            setQ1Visi('visible');
            setQ2Visi('collapse');
            setQ3Visi('collapse');
            setQ4Visi('collapse');
            setQ5Visi('collapse');
        }else{
            setQ1Visi('collapse');
        }
        setq1expand(!q1expanded);
        setq2expand(false);
        setq3expand(false);
        setq4expand(false);
        setq5expand(false);
        //Display moving
        // if(q2DisplayTOP === '120px'){
        //     setq2TOP('280px')
        // }else{
        //     setq2TOP('120px')
        // }
        // if(q3DisplayTOP === '140px'){
        //     setq3TOP('300px')
        // }else if(q3DisplayTOP==='300px' && !(q2Display === 'visible')){
        //     setq3TOP('140px')
        // }
    }
    const [q1Hover] = useState("default-border");
    const [q4Hover] = useState("default-border");
    const [q5Hover] = useState("default-border");


    const [q2Display, setQ2Visi] = useState('collapse');
    const [q2PlusDisplay, setQ2Plus] = useState("+");
    const handleClickQ2 = ()=>{
        if(q2PlusDisplay==="+"){
            setQ2Plus("~")
            setQ3Plus("+")
            setQ1Plus("+")
            setQ4Plus("+")
            setQ5Plus("+")
        }else{
            setQ2Plus("+")
        }
        if(q2Display==='collapse'){
            setQ2Visi('visible');
            setQ1Visi('collapse');
            setQ3Visi('collapse');
            setQ4Visi('collapse');
            setQ5Visi('collapse');
        }else{
            setQ2Visi('collapse');
        }
        setq2expand(!q2expanded);
        setq1expand(false);
        setq3expand(false);
        setq4expand(false);
        setq5expand(false);
        //Display moving
        // if(q2DisplayTOP === '280px'){
        //     setq2TOP('120px')
        // }
        // if(q3DisplayTOP === '140px'){
        //     setq3TOP('300px')
        // }else if(q3DisplayTOP==='300px'&& !(q1Display=== 'visible')){
        //     setq3TOP('140px')
        // }
    }
    const [q2Hover] = useState("default-border");


    const [q3Display, setQ3Visi] = useState('collapse');
    const [q3PlusDisplay, setQ3Plus] = useState("+");
    const handleClickQ3 = ()=>{
        if(q3PlusDisplay==="+"){
            setQ3Plus("~")
            setQ2Plus("+")
            setQ1Plus("+")
            setQ4Plus("+")
            setQ5Plus("+")
        }else{
            setQ3Plus("+")
        }
        if(q3Display==='collapse'){
            setQ3Visi('visible');
            setQ2Visi('collapse');
            setQ1Visi('collapse');
            setQ4Visi('collapse');
            setQ5Visi('collapse');
        }else{
            setQ3Visi('collapse');
        }
        setq3expand(!q3expanded);
        setq2expand(false);
        setq1expand(false);
        setq4expand(false);
        setq5expand(false);
        // setq3TOP('140px')
        // setq2TOP('120px')
    }
    
    const handleClickQ4 = ()=>{
        if(q4PlusDisplay==="+"){
            setQ4Plus("~")
            setQ2Plus("+")
            setQ1Plus("+")
            setQ3Plus("+")
            setQ5Plus("+")
        }else{
            setQ4Plus("+")
        }
        if(q4Display==='collapse'){
            setQ4Visi('visible');
            setQ2Visi('collapse');
            setQ1Visi('collapse');
            setQ3Visi('collapse');
            setQ5Visi('collapse');
        }else{
            setQ4Visi('collapse');
        }
        setq4expand(!q4expanded);
        setq2expand(false);
        setq1expand(false);
        setq3expand(false);
        setq5expand(false);
        // setq3TOP('140px')
        // setq2TOP('120px')
    }
    const handleClickQ5 = ()=>{
        if(q5PlusDisplay==="+"){
            setQ5Plus("~")
            setQ2Plus("+")
            setQ1Plus("+")
            setQ4Plus("+")
            setQ3Plus("+")
        }else{
            setQ5Plus("+")
        }
        if(q5Display==='collapse'){
            setQ5Visi('visible');
            setQ2Visi('collapse');
            setQ1Visi('collapse');
            setQ4Visi('collapse');
            setQ3Visi('collapse');
        }else{
            setQ5Visi('collapse');
        }
        setq5expand(!q5expanded);
        setq2expand(false);
        setq1expand(false);
        setq4expand(false);
        setq3expand(false);
        // setq3TOP('140px')
        // setq2TOP('120px')
    }
    
    const [img1Hover] = useState("default-image");
    
    const [q3Hover] = useState("default-border");

    const [gp1Hover,setGP1Hov] = useState(false);

    const handleGP1enter= ()=>{
      setGP1Hov(true);
    }
    const handleGP1leave= ()=>{
      setGP1Hov(false);
    }
    //IMAGE2
    const [gp2Hover,setGP2Hov] = useState(false);

    const handleGP2enter= ()=>{
      setGP2Hov(true);
    }
    const handleGP2leave= ()=>{
      setGP2Hov(false);
    }
    //IMAGE3
    const [gp3Hover,setGP3Hov] = useState(false);

    const handleGP3enter= ()=>{
      setGP3Hov(true);
    }
    const handleGP3leave= ()=>{
      setGP3Hov(false);
    }
    //IMAGE4
    const [gp4Hover,setGP4Hov] = useState(false);

    const handleGP4enter= ()=>{
      setGP4Hov(true);
    }
    const handleGP4leave= ()=>{
      setGP4Hov(false);
    }
    //IMAGE5
    const [gp5Hover,setGP5Hov] = useState(false);

    const handleGP5enter= ()=>{
      setGP5Hov(true);
    }
    const handleGP5leave= ()=>{
      setGP5Hov(false);
    }
    //IMAGE6
    const [gp6Hover,setGP6Hov] = useState(false);

    const handleGP6enter= ()=>{
      setGP6Hov(true);
    }
    const handleGP6leave= ()=>{
      setGP6Hov(false);
    }


    return (
    <header style={{background: 'linear-gradient(to bottom, rgba(48, 51, 58, .5), rgba(34, 37, 44, 0.5))'}}>
      {/* ===== GOOD PRACTICES ===== */}
      <h1 id="GoodP" className="goodp-section">
        <b className="goodp-title">Good Practices</b>
        {/*FIRST COL*/}
        <div className="goodp-sub">
          {/*FIRST IMAGE*/}
          <div className="goodp-col">
            <div className={`goodp-image ${gp1Hover ? "expanded" : ""}`}>
              <img onMouseEnter={handleGP1enter} onMouseLeave={handleGP1leave} className={`goodp-img ${img1Hover}`} src={'img1.png'} alt='img 1'></img>
              <p style={{fontSize: 'clamp(.01rem, 1.2vw + 0.350rem, 1.875rem)'}}>Use Complex Passwords</p>
              <p style={{fontSize: 'clamp(.01rem, 1.1vw + 0.350rem, 1.775rem)', fontWeight: "lighter"}}>Try using complex passwords over simple, easy to remember passwords.</p>
            </div>
          {/*Fourth IMAGE*/}
          <div className={`goodp-image ${gp4Hover ? "expanded" : ""}`}>
            <img onMouseEnter={handleGP4enter} onMouseLeave={handleGP4leave} className='goodp-img' src={'img2.png'} alt='img 2'></img>
            <p style={{fontSize: 'clamp(.01rem, 1.2vw + 0.350rem, 1.875rem)'}}>Disable Browser Password Saving</p>
            <p style={{fontSize: 'clamp(.01rem, 1.1vw + 0.350rem, 1.775rem)', fontWeight: "lighter"}}>Try using complex passwords over simple, easy to remember passwords.</p>
          </div>
            
          </div>
          <div className="goodp-col">
          {/*Second IMAGE*/}
          <div className={`goodp-image ${gp2Hover ? "expanded" : ""}`}>
            <img onMouseEnter={handleGP2enter} onMouseLeave={handleGP2leave} className='goodp-img' src={'img3.png'} alt='img 3'></img>
            <p style={{fontSize: 'clamp(.01rem, 1.2vw + 0.350rem, 1.875rem)'}}>Enable MFA</p>
            <p style={{fontSize: 'clamp(.01rem, 1.1vw + 0.350rem, 1.775rem)', fontWeight: "lighter"}}>Try using complex passwords over simple, easy to remember passwords.</p>
          </div>
          {/*Fifth IMAGE*/}
          <div className={`goodp-image ${gp5Hover ? "expanded" : ""}`}>
            <img onMouseEnter={handleGP5enter} onMouseLeave={handleGP5leave} className='goodp-img' src={'img4.png'} alt='img 4' ></img>
            <p style={{fontSize: 'clamp(.01rem, 1.2vw + 0.350rem, 1.875rem)'}}>Don't Share Passwords</p>
            <p style={{fontSize: 'clamp(.01rem, 1.1vw + 0.350rem, 1.775rem)', fontWeight: "lighter"}}>Try using complex passwords over simple, easy to remember passwords.</p>
          </div>
          </div>
          <div className="goodp-col">
          {/*Third IMAGE*/}
          <div className={`goodp-image ${gp3Hover ? "expanded" : ""}`}>
            <img onMouseEnter={handleGP3enter} onMouseLeave={handleGP3leave} className='goodp-img' src={'img5.png'} alt='img 5'></img>
            <p style={{fontSize: 'clamp(.01rem, 1.2vw + 0.350rem, 1.875rem)'}}>Don't Reuse Passwords</p>
            <p style={{fontSize: 'clamp(.01rem, 1.1vw + 0.350rem, 1.775rem)', fontWeight: "lighter"}}>Try using complex passwords over simple, easy to remember passwords.</p>
          </div>
          {/*Sixth IMAGE*/}
          <div className={`goodp-image ${gp6Hover ? "expanded" : ""}`}>
            <img onMouseEnter={handleGP6enter} onMouseLeave={handleGP6leave} className='goodp-img' src={'img6.png'} alt='img 6'></img>
            <p style={{fontSize: 'clamp(.01rem, 1.2vw + 0.350rem, 1.875rem)'}}>Physical Instead of Digital Copies</p>
            <p style={{fontSize: 'clamp(.01rem, 1.1vw + 0.350rem, 1.775rem)', fontWeight: "lighter"}}>Try using complex passwords over simple, easy to remember passwords.</p>
          </div>
          </div>
        </div>
        
        {/*SECOND ROW*/}
        {/* <div className="goodp-sub"> */}
          {/*Fourth IMAGE*/}
        {/* </div> */}
      </h1>

      {/* ===== FAQ SECTION ===== */}
      <h1
        id="FAQ"
        className="faq-section"
        style={{
          height: zoomLevel < 300 ? "600px" : "900px",
        }}
      >
        <b
          className="faq-header"
          style={{ top: "40px" }}
        >
          Frequently Asked Questions
        </b>

        <div className="faq-questions-section">
            
          {/* ---------------- Q1 ---------------- */}
          <section className={`faq-row ${q1expanded ? "expanded" : ""}`}>
            <button
              onClick={handleClickQ1}
              className={`faq-btn ${q1Hover}`}
              style={{
                // height: zoomLevel < 500 ? "40px" : "75px",
              }}
            >
              What Is a Password Checker?
              <p className="faq-plus">{q1PlusDisplay}</p>

              
            </button>
            <p
                className="faq-answer"
                style={{
                  visibility: q1Display,
                  
                }}
              >
                The Hog Rider in Clash Royale is a fast, single-target troop that heads 
                  straight for buildings, leaping over rivers to reach them quickly. He deals 
                  solid melee damage and is often used as a win condition due to his speed and 
                  ability to pressure towers efficiently.
              </p>
          </section>

          </div>
          
        <div className="faq-questions-section">
          {/* ---------------- Q2 ---------------- */}
          <section className={`faq-row ${q2expanded ? "expanded" : ""}`}>
            <button
              onClick={handleClickQ2}
              className={`faq-btn ${q2Hover}`}
              style={{  }}
            >
              Is The Website Safe?
              <p className="faq-plus">{q2PlusDisplay}</p>

              
            </button>
            <p
                className="faq-answer"
                style={{
                  visibility: q2Display,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
          </section>

          </div>
        <div className="faq-questions-section">
          {/* ---------------- Q3 ---------------- */}
          <section className={`faq-row ${q3expanded ? "expanded" : ""}`}>
            <button
              onClick={handleClickQ3}
              className={`faq-btn ${q3Hover}`}
              // style={{  height: zoomLevel < 400 ? "40px" : "75px", }}
            >
              Can a Strong Password Get Hacked?
              <p className="faq-plus">{q3PlusDisplay}</p>

            </button>
            <p
                className="faq-answer"
                style={{
                  visibility: q3Display,
                }}
              >
                Apple Bannana Cucumber Desert Emmett Faraway Great High-five Internet Joe
                  Karat Lemons Minnetsota. Niagra Falls Orangutan Prerequisite Quintanilla 
                  Rusty Southern Tires Umbrella Video Wires Xylophone Young Zootopia.
            </p>
          </section>
        
        </div>
        <div className="faq-questions-section">
          {/* ---------------- Q4 ---------------- */}
          <section className={`faq-row ${q4expanded ? "expanded" : ""}`}>
            <button
              onClick={handleClickQ4}
              className={`faq-btn ${q4Hover}`}
              // style={{  height: zoomLevel < 400 ? "40px" : "75px", }}
            >
              CFAQ EUSTION 4?
              <p className="faq-plus">{q4PlusDisplay}</p>

            </button>
            <p
                className="faq-answer"
                style={{
                  visibility: q4Display,
                }}
              >
                Apple Bannana Cucumber Desert Emmett Faraway Great High-five Internet Joe
                  Karat Lemons Minnetsota. Niagra Falls Orangutan Prerequisite Quintanilla 
                  Rusty Southern Tires Umbrella Video Wires Xylophone Young Zootopia.
            </p>
          </section>
        
        </div>
        <div className="faq-questions-section">
          {/* ---------------- Q5 ---------------- */}
          <section className={`faq-row ${q5expanded ? "expanded" : ""}`}>
            <button
              onClick={handleClickQ5}
              className={`faq-btn ${q5Hover}`}
              // style={{  height: zoomLevel < 400 ? "40px" : "75px", }}
            >
              FAQ QUESTION 5d?
              <p className="faq-plus">{q5PlusDisplay}</p>

            </button>
            <p
                className="faq-answer"
                style={{
                  visibility: q5Display,
                }}
              >
                Apple Bannana Cucumber Desert Emmett Faraway Great High-five Internet Joe
                  Karat Lemons Minnetsota. Niagra Falls Orangutan Prerequisite Quintanilla 
                  Rusty Southern Tires Umbrella Video Wires Xylophone Young Zootopia.
            </p>
          </section>
        
        </div>
      </h1>
    </header>
  );
}

export default FAQ;