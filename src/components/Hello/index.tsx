import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect } from 'react';

function Hello(){
    useEffect(() => {
        AOS.init();
      }, []);

      function goToAbout(){
         return  window.location.href="#about"
        }

      return(
        <div className='apresentation'>

      <div className="stack" style= {{"--stacks": "3"} as React.CSSProperties}>
          <span style= {{"--index": "0"} as React.CSSProperties }><h1 
        className='my-name-is' 
       >
        <strong> 
            Olá meu nome é <span className='name'>Theo Trindade</span> 
            <br/>e sou um desenvolvedor fullstack!</strong></h1></span>
          <span style= {{"--index": "1"} as React.CSSProperties}> <h1 
        className='my-name-is' >
        <strong> 
            Olá meu nome é <span className='name'>Theo Trindade</span> 
            <br/>e sou um desenvolvedor fullstack!</strong></h1></span>
          <span style= {{"--index": "2"} as React.CSSProperties}> <h1 
        className='my-name-is' 
  >
        <strong> 
            Olá meu nome é <span className='name'>Theo Trindade</span> 
            <br/>e sou um desenvolvedor fullstack!</strong></h1></span>
        </div>
            
       
            <button 
            className="cybr-btn"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="2000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            onClick={goToAbout}
          
            >Saiba <span aria-hidden>Mais</span>
            <span aria-hidden className="cybr-btn__glitch">Saiba mais</span>
            <span aria-hidden className="cybr-btn__tag">TT</span>
            </button>            
        </div>
        
    )
}

export default Hello