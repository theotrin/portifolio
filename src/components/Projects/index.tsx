import './style.css'
import project_0_image from '../../assets/na-operacao-atm-do-banco-digite-a-senha.jpg'
import EmailProject from '../../assets/email project.jpg'
import PdvApi from '../../assets/pdv api.jpg'
import Tilt from 'vanilla-tilt';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Projects(){
      
    useEffect(() =>{
        Tilt.init(document.querySelectorAll('.project-image'),{
            max: 4,
            speed: 10,
            glare: true,
            "max-glare": 0.50
        })
    })

    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <div>

            <h2 className='project-main-title'>Projetos</h2>
            <div className='project'>
            
               <div 
                data-aos="zoom-in-right"
                data-aos-duration="500"
                data-aos-offset="200"
               className="project-text-content">
               <div className='project-title'><h2>Api CRUD bancaria</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>#Backend</h4>

                    <p>Desenvolvi uma API REST com Express, Node e Nodemon. Oferece funcionalidades como: criar/listar/atualizar/excluir contas bancárias/depósito/saque/transferência/ consulta de saldo e emissão de extrato. <br/> Eficiente e escalável para gestão simplificada de operações bancárias.foi uma prova proposta pela Cubos academy onde tirei nota máxima</p>
                    <div className='buttons-container'>
                    <a  href='https://github.com/theotrin/api-de-banco'target='blank'  className='cta-buttons github-button'>Ver codigo</a>
                    </div>
                </div>
                
                </div> 
                <div 
               
                className='project-image'>
                    <img 
                    data-aos="zoom-in-left"
                    data-aos-duration="500"
                    data-aos-offset="200"
                    src={project_0_image} width={800} height={500} alt="fazendo operações em um caixa eletrônico" />
                </div>
            </div>



            <div className='project'>
            
               <div 
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-offset="200"
               className="project-text-content">
               <div className='project-title'><h2>Preparador de email</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>#Fullstack</h4>

                    <p>Esse foi um dos projetos trouxe mais resultado do que beleza ou tecnologias usadas. <br/><br/> ao chegar em uma empresa de nivel estadual como estagiario percebi um problema logo de cara: o envio execivo de emails feito pelos estagiarios a mão uma hora era encaminhado com erros, as vezes de ortografia as vezes os nomes de professor fulano era trocado para projessora ciclana e o corpo ficava todo confuso. <br/> <br/>
                    Eu estava aprendendo Javascript e percebi que poderia solucinar esse problema trazer mais <span className='prod'>produtividade</span> e menos <span className='erro'>erros</span> para a empresa, então com muita vontade de resolver o erro fiz um site simples porem que fez sucesso no ambiente de trabalho que resolvia ativamente esse problema e desde então os emais foram enviados com um indice extremamente baixo de erros pelos funcionarios do local(imagine que vergonha para uma empresa de renome em todo o estado do Amazonas). <br/>
                    <span className='prod'>foi um projeto simple mas que resolveu um problema do mundo real!</span>
                    </p>
                    <div className='buttons-container'>
                    <a className='cta-buttons' href='https://theotrin.github.io/PreparadorDeEmail/' target='blank' >Ver projeto</a>
                    <a  href='https://github.com/theotrin/PreparadorDeEmail'target='blank'  className='cta-buttons github-button'>Ver codigo</a>
                    </div>
                </div>
                
                </div> 
                <div className='project-image'>
                    <img
                    data-aos="zoom-in-right"
                    data-aos-duration="500"
                    data-aos-offset="200"
                    src={EmailProject} width={800} height={500} alt="<a href= 'https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-e-mail_10839364.htm#query=send%20email&position=18&from_view=search&track=ais&uuid=d1f720c6-5c20-47c2-87b3-d5dd5a05a0bd'>Imagem de storyset</a> no Freepik" />
                </div>
            </div>


            <div className='project'>
            
               <div 
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-offset="200"
               className="project-text-content">
               <div className='project-title'><h2>Api PDV frente de caixa</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>#Backend</h4>

                    <p>A API representou o projeto final da parceria entre Cubos Academy e iFood. Após seis meses intensos de aprendizado em backend, implementei meus conhecimentos e colaboramos em equipe. Composto por mim e cinco colegas escolhidos aleatoriamente de uma turma de 120 pessoas, enfrentamos desafios logísticos e horários distintos. <br/><br />
                    A parte técnica até que foi fácil. Porém, o desafio de fazer o projeto todo funcionar com várias pessoas diferentes e com diferenças de horário foi uma experiência e tanto. Trabalhamos com Git, dividimos o trabalho em partes, utilizamos a metodologia ágil em forma de scrum e fizemos sprints toda semana para a entrega de partes do projeto a cada uma semana.
                    </p>
                    <div className='buttons-container'>
                    <a className='cta-buttons' href='https://easy-gray-snail-cap.cyclic.app/categoria' target='blank' >Ver projeto</a>
                    <a  href='https://github.com/theotrin/api-pdv'target='blank'  className='cta-buttons github-button'>Ver codigo</a>
                    </div>
                </div>
                
                </div> 
                <div className='project-image'>
                    <img 
                     data-aos="zoom-in-right"
                     data-aos-duration="500"
                     data-aos-offset="200"
                    src={PdvApi} width={800} height={500} alt="<a href= 'https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-e-mail_10839364.htm#query=send%20email&position=18&from_view=search&track=ais&uuid=d1f720c6-5c20-47c2-87b3-d5dd5a05a0bd'>Imagem de storyset</a> no Freepik" />
                </div>
            </div>


        </div>
    )
}


export default Projects