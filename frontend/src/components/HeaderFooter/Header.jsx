import { useState, useEffect } from "react";

function Header() {
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


    return (
        <header>
            <h1 style={{margin: '0px', background: 'linear-gradient(to right, #323b49ff, #656768ff)', align: 'top', justifyContent: 'center',textAlign: 'left', height: 145, color: '#ffffff', padding: '10px', display:'flex', flexDirection: 'row'
            }}>
                <img src={process.env.PUBLIC_URL + '/lock.png'} alt="logo" style={{height:'75px', position:'absolute',top:'23px',left:(zoomLevel<'175')? '330px': (zoomLevel<='250')? '120px':'-5px'}}/>

                <i style={{fontSize:'2.8rem', fontWeight:'200', transform: 'skew(-6deg)', position:'absolute', top:'35px',left:(zoomLevel<'175')? '388px': (zoomLevel<='250')? '178px':'53px'}}>sudo<b>Secure</b></i> 
                {/*onClick={ () => {faqSection.scrollIntoView({top:'0',behavior:'smooth'})} }*/}
                {/*borderWeight: 'solid white'*/}
                <button onClick={ () => {window.location.replace("#GoodP")} } style={{height: (zoomLevel<='250')? '65px':'45px', width: (zoomLevel<='250')? '150px':'105px', fontSize: (zoomLevel<='250')? '18px':'13px', textAlign: 'center', size : 'small', 
                    backgroundColor:'#333333', color: '#ffffff', border: '0px solid #000000', borderTopLeftRadius:'9px', borderBottomLeftRadius:'9px', cursor: 'pointer',
                    position: 'absolute',top: (zoomLevel<='250')? '35px':'45px', right: (zoomLevel<'175')? '515px': (zoomLevel<='250')? '305px':'105px'}} >Good<br/>Practices</button>
                {/*top:'35' left'2030'*/}
                <button onClick={ () => {window.location.replace("#FAQ")} } style={{height: (zoomLevel<='250')? '65px':'45px', width: (zoomLevel<='250')? '150px':'105px', fontSize: (zoomLevel<='250')? '18px':'13px', textAlign: 'center', size : 'small', 
                    backgroundColor:'#333333', color: '#ffffff', border: '0px solid #000000', borderTopRightRadius:'9px', borderBottomRightRadius:'9px', cursor: 'pointer',
                    position: 'absolute',top:(zoomLevel<='250')? '35px':'45px', right: (zoomLevel<'175')? '365px': (zoomLevel<='250')? '155px':'0px'}}>FAQ</button>
            </h1> 
            <h1 style={{margin: '0px', background: 'linear-gradient(to right, #546785ff, #282b2cff)', align: 'top', textAlign: 'left', height: 105, color: '#ffffff',
            justifyContent: 'center', padding: '10px', display:'flex', flexDirection: 'row'
            }}>
                <b style={{fontSize:'2.63rem', fontWeight:'345', letterSpacing: '-1px', height: (zoomLevel<'400')? '60px': '120px', paddingLeft: '20px', paddingRight: '20px', 
                    backgroundColor: '#323841ff ', position:'relative', top:(zoomLevel<'400')? '20px': '-8px',left:'0px',
                    borderStyle:'solid', borderColor: '#546785ff', borderRadius: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}><b>HOW SECURE IS YOUR PASSWORD?</b>
                </b> 
            </h1> 
        </header>
    );
}


export default Header;