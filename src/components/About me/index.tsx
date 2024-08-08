import './style.css'
import picture from '../../assets/theo.png'
import AOS from 'aos';
import curriculo from '../../assets/Theo_Trindade_Dev_Fullstack.pdf'
import { useEffect } from 'react';
import 'aos/dist/aos.css'

function AboutMe (){

    useEffect(() => {
        AOS.init();
        }, [])

    return(
        <section id='about'  className='about'>
        
        <div className='about-me-title'>
            <h2>Sobre mim</h2>       
        </div>    
        <div className="about-me-content">
        <div
        className='about-me-image'
        data-aos="fade-right"
        data-aos-duration="2000"
        >
            <img src={picture} /> 
        </div>

        <div className='about-me-text'
         data-aos="fade-left"
         data-aos-duration="2000"
        >
                <p>Sou um entusiasta da comunidade nerd, gamer, otaku e de várias outras! No momento, estou trilhando meu caminho como estudante de Bacharelado em Sistemas da Informação e estudando diversos assuntos sobre desenvolvimento web por conta própria. 
                <br/>
                <br/>
                Programador apaixonado por tecnologia com o objetivo de explorar todas as stacks possíveis!
                <br/>
                Gosto de programar e resolver problemas com a ajuda de tecnologia. Sinto-me bem e realmente vivo enquanto faço isso. A vontade e paixão por isso me fazem aprender de forma autodidata os mais diversos assuntos.
                <br/>
                <br/>
                No tempo vago e fora da área de programação, gosto de jogar videogame, desafiar os limites do meu corpo em calistenia, assistir animes e adoro passear sem rumo enquanto minha mente divaga em pensamentos aleatórios e distópicos :p</p>
       
        {/* <div className='about-me-button'>
        <a 
        href={curriculo}
        target='blank'
        className="button-cover" role="button"><span className="text">Ver Curriculo</span><span>Otima Escolha!</span></a>
        </div> */}
       
        </div>
        
        </div>

         </section>
    )
}

export default AboutMe;