import './style.css'
import React from 'react';


function Contact(){



 return(
     <footer className='contact-me'>
        <div className='ctt'>


      
        <h2 className='about-me-title'>Fale comigo!</h2>

            <div className='aboute-me-text'>

            <p>"Gostou do que viu? Estou entusiasmado para discutir oportunidades de colaboração! <br /> <br/> Entre em contato comigo para explorarmos como posso agregar valor à sua equipe.</p>

            </div>

            <div className='buttons-section'>
            <a className="button" href="https://www.linkedin.com/in/theo-trindade/" target='blank' style={{"--color": '#1e9bff'} as React.CSSProperties}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Linkedin
            </a>
            <a className="button" href="mailto:theopinheiro12@gmail.com" target='blank' style={{"--color": 'red'} as React.CSSProperties}>
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
