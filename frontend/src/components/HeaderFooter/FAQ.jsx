import { useState, useEffect } from "react";

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
    const [q2DisplayTOP, setq2TOP] = useState('0px');
    const [q3DisplayTOP, setq3TOP] = useState('-50px');
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
        if(q2DisplayTOP === '0px'){
            setq2TOP('160px')
        }else{
            setq2TOP('0px')
        }
        if(q3DisplayTOP === '-50px'){
            setq3TOP('110px')
        }else if(q3DisplayTOP==='110px' && !(q2Display === 'visible')){
            setq3TOP('-50px')
        }
    }
    const [q1Hover, setQ1Hover] = useState("2px solid #3d4a55ff");
    const handleQ1Hover= ()=>{
        if(q1Hover === '2px solid #3d4a55ff'){
            setQ1Hover('2px solid #66683eff')
        }else{
            setQ1Hover('2px solid #3d4a55ff')
        }

    }



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
        if(q2DisplayTOP === '160px'){
            setq2TOP('0px')
        }
        if(q3DisplayTOP === '-50px'){
            setq3TOP('110px')
        }else if(q3DisplayTOP==='110px'&& !(q1Display=== 'visible')){
            setq3TOP('-50px')
        }
    }
    const [q2Hover, setQ2Hover] = useState("2px solid #3d4a55ff");
    const handleQ2Hover= ()=>{
        if(q2Hover === '2px solid #3d4a55ff'){
            setQ2Hover('2px solid #82854bff')
        }else{
            setQ2Hover('2px solid #3d4a55ff')
        }

    }

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
        setq3TOP('-50px')
        setq2TOP('0px')
    }
    
    const [q3Hover, setQ3Hover] = useState("2px solid #3d4a55ff");
    const handleQ3Hover= ()=>{
        if(q3Hover === '2px solid #3d4a55ff'){
            setQ3Hover('2px solid #82854bff')
        }else{
            setQ3Hover('2px solid #3d4a55ff')
        }

    }

    return (
        <header>
            {/*Good Practices Section*/}
            <h1 id='GoodP' style={{margin: '0px', justifyContent: 'center', textAlign: 'center', color: 'white', background:'linear-gradient(to bottom, #677b9cff, #1c1e1fff)', height:'500px'}}>
                
                <b style={{fontSize: '40px', fontWeight: '500', position: 'relative',top: '40px'}}>Good Practices</b>
                <p style={{fontSize: '16px', fontWeight: 'normal', position: 'relative',top: '60px'}}>
                    This section includes sotck images of locks/small widgets with tips on password mistakes</p>

            </h1>
            {/*==========================FAQ Section==========================*/}
            <h1 id='FAQ' style={{display: 'flex' ,flexDirection: 'column', margin: '0px', justifyContent: 'center', textAlign: 'center', alignContent: 'center',
                aligncolor: 'white', background:'radial-gradient(circle, #677b9cff, #cbccccff)', height: (zoomLevel<300)? '550px':'900px'}}>
                
                {/*FAQ Header*/}
                <b style={{color: '#ffffff', fontSize: '40px', fontWeight: '500', position: 'relative',top: (zoomLevel<300)?'-20px':'-150px'}}>
                    Frequently Asked Questions</b>
                {/* <p style={{fontSize: '16px', fontWeight: 'normal', position: 'relative',top: '30px'}}>
                    Pop down menu with faq what is a password checker? is website safe? ca a strong password get hacked? etc.</p> */}

                {/*FAQ DropDowns*/}
                <p style={{display: 'flex', justifyContent: "center"}}>
                    <button onClick={handleClickQ1} onMouseEnter={handleQ1Hover} onMouseLeave={handleQ1Hover} style={{border: q1Hover, height: (zoomLevel<500)? '40px':'75px', width: '1000px', fontSize: '30px', letterSpacing: '4px',
                        backgroundColor: "#455563ff", color: '#ffffff',position: "relative", top:'50px'}}>What Is a Password Checker?
                        <p id='FAQ_Q1' style={{visibility: 'visible',color:'#fffff', 
                            position: 'relative', top:'-65px', left: "96%", cursor: 'pointer', width:'30px', height: '10px'}}>{q1PlusDisplay}</p>
                        <table id="FAQ_A1" style={{backgroundColor: '#687e92ff',visibility: q1Display, position: 'relative', margin: '3px', top:'-67px', letterSpacing: '0px', 
                            fontSize: (zoomLevel<400)? '30px':(zoomLevel<500)? '25px': '23px'}} >The Hog Rider in Clash Royale is a fast, single-target troop that heads 
                            straight for buildings, leaping over rivers to reach them quickly. He deals solid melee damage and is often used as a win condition due to his speed and ability to pressure towers efficiently.</table >
                    </button>
                </p>
                
                <p style={{display: 'flex', justifyContent: "center"}}>
                    <button onClick={handleClickQ2} onMouseEnter={handleQ2Hover} onMouseLeave={handleQ2Hover} style={{border: q2Hover,height: '40px', width: '1000px', fontSize: '30px', letterSpacing: '4px',
                        backgroundColor: "#455563ff", color: '#ffffff',position: "relative", top: q2DisplayTOP}}>Is The Website Safe?
                        <p id='FAQ_Q2' style={{visibility: 'visible',color:'#fffff', 
                            position: 'relative', top:'-65px', left: "96%", cursor: 'pointer', width:'30px', height: '10px'}}>{q2PlusDisplay}</p>
                        <table id="FAQ_A2" style={{backgroundColor: '#687e92ff',visibility: q2Display, position: 'relative', margin: '3px', top:'-67px', letterSpacing: '0px', 
                            fontSize: (zoomLevel<400)? '30px':(zoomLevel<500)? '25px': '22px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</table >
                    </button>
                </p>

                <p style={{display: 'flex', justifyContent: "center"}}>
                    <button onClick={handleClickQ3} onMouseEnter={handleQ3Hover} onMouseLeave={handleQ3Hover} style={{border: q3Hover, height: (zoomLevel<400)? '40px':'75px', width: '1000px',fontSize: '30px', letterSpacing: '4px',
                        backgroundColor: "#455563ff", color: '#ffffff',position: "relative", top:q3DisplayTOP, alignContent: 'end'}}>Can a Strong Password Get Hacked?
                        <p id='FAQ_Q3' style={{visibility: 'visible',color:'#fffff', 
                            position: 'relative', top:'-65px', left: "96%", cursor: 'pointer', width:'30px', height: '10px'}}>{q3PlusDisplay}</p>
                        <table  id="FAQ_A3" style={{backgroundColor: '#687e92ff', visibility: q3Display, position: 'relative', margin: '3px', top:'-67px', letterSpacing: '0px',
                             fontSize: (zoomLevel<400)? '30px':(zoomLevel<500)? '25px': '23px'}} >Apple Bannana Cucumber Desert Emmett Faraway Great High-five Internet Joe
                            Karat Lemons Minnetsota. Niagra Falls Orangutan Prerequisite Quintanilla Rusty Southern Tires Umbrella Video Wires Xylophone Young Zootopia.</table >
                    </button>
                </p>

            </h1>
        </header>
    );
}


export default FAQ;