import './style.css'
import picture from '../../assets/theo.png'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'

function AboutMe (){
        useEffect(() => {
            AOS.init();
          }, [])
    return(
        <section id='about'  className='about'>
        
        <div className='about-me-title'>
            <h2>Sobre min</h2>       
        </div>    
        <div className="about-me-content">
        <div
        data-aos="fade-right"
        data-aos-duration="2000"
        >
            <img src={picture} width={350}/> 
        </div>

        <div className='about-me-text'
         data-aos="fade-left"
         data-aos-duration="2000"
        >
                <p>Sou um entusiasta da comunidade nerd, gamer, otaku e varias outras! No momento, estou trilhando meu caminho como estudante de Bacharelado em Sistemas da Informação e estudando varios assuntos sobre desenvolvimento web por conta propria. 
                <br/>
                <br/>
                Programador apaixonado por tecnologia com o objetivo de explorar todas as stacks possiveis!
                <br/>
                gosto de programar e resolver problemas com ajuda de tecnologia me sinto bem e realmente vivo enquanto faço isso, a vontade e paixão por isso me faz aprender de forma autodidata os mais diversos assunto.
                <br/>
                <br/>
                No tempo vago e fora da area de programação gosto de jogar videogame, desafiar os limites do meu corpo em calistenia, assistir animes e adoro passear sem rumo enquanto minha mente divaga em pensamentos aleatorios e distópicos :p</p>
       
        <div className='about-me-button'>
        <button className="button-cover" role="button"><span className="text">Ver Curriculo</span><span>Otima Escolha!</span></button>
        </div>
       
        </div>
        
        </div>

         </section>
    )
}

export default AboutMe;