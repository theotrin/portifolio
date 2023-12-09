import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

function Body(){
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <div className='apresentation'>

        <h1 className='my-name-is' 
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-offset="200"
        data-aos-easing="ease-in-out">
        <strong> 
            Olá meu nome é <span className='name'>Theo Trindade</span> 
            <br/>e sou um desenvolvedor fullstack!</strong></h1>
            
            <button 
            className="cybr-btn"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="2000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"

            >Saiba <span aria-hidden>Mais</span>
                <span aria-hidden className="cybr-btn__glitch">Saiba mais</span>
                <span aria-hidden className="cybr-btn__tag">TT</span>
            </button>


            {/* <button>Saiba mais</button> */}
            {/* <AwesomeButton type="primary">Saiba Mais</AwesomeButton>; */}
            
        </div>
        
    )
}

export default Body