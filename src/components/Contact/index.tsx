import './style.css'
import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'


function Contact(){

   useEffect(() => {
      AOS.init();
    }, [])

 return(
     <footer className='contact-me'>
        <div className='ctt'>


      
        <h2 className='about-me-title'>Fale comigo!</h2>

            <div className='aboute-me-text'>

            <p>Gostou do que viu? Estou entusiasmado para discutir oportunidades de colaboração! <br /> <br/> Entre em contato comigo para explorarmos como posso agregar valor à sua equipe.</p>

            </div>

            <div className='buttons-section'>
            <a className="button"
             data-aos="fade-right"
             data-aos-delay="200"
             data-aos-duration="500"
             data-aos-offset="200"
             href="https://www.linkedin.com/in/theo-trindade/" target='blank' style={{"--color": '#1e9bff'} as React.CSSProperties}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Linkedin
            </a>
            <a className="button"
               data-aos="fade-left"
               data-aos-delay="200"
               data-aos-duration="500"
               data-aos-offset="200"
            href="mailto:theotrin.dev@gmail.com" target='blank' style={{"--color": 'red'} as React.CSSProperties}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Email
            </a>       

       </div>  
       </div>        
    </footer>
 )
}



export default Contact
