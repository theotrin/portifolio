import './style.css'
import project_0_image from '../../assets/na-operacao-atm-do-banco-digite-a-senha.jpg'
import EmailProject from '../../assets/email project.jpg'
import PdvApi from '../../assets/pdv api.jpg'
import CyberpunkProject from '../../assets/cyberpunk project.jpg'
import BuscadorCep from '../../assets/buscador de cep.png'
import Tilt from 'vanilla-tilt';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Projects(){
      
    useEffect(() =>{
        Tilt.init<HTMLAreaElement>(document.querySelectorAll('.project-image'),{
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
            <div className='project'
               data-aos="zoom-in-left"
               data-aos-duration="500"
               data-aos-offset="200"
               data-aos-delay="500"
            >
            
               <div 
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
                    src={project_0_image} alt="fazendo operações em um caixa eletrônico" />
                </div>
            </div>
           
           
            <div 
            className='project'
            data-aos="zoom-in-left"
            data-aos-duration="500"
            data-aos-offset="200"
            >
            
               <div 
                
               className="project-text-content">
               <div className='project-title'><h2>Preparador de email</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>#Frontend</h4>

                    <p className='email-text'>Esse foi um dos projetos trouxe mais resultado do que beleza ou tecnologias usadas. <br/><br/> ao chegar em uma empresa de nivel estadual como estagiario percebi um problema logo de cara: o envio execivo de emails feito pelos estagiarios a mão uma hora era encaminhado com erros, as vezes de ortografia as vezes os nomes de professor fulano era trocado para projessora ciclana e o corpo ficava todo confuso. <br/> <br/>
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
                    src={EmailProject} alt="<a href= 'https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-e-mail_10839364.htm#query=send%20email&position=18&from_view=search&track=ais&uuid=d1f720c6-5c20-47c2-87b3-d5dd5a05a0bd'>Imagem de storyset</a> no Freepik" />
                </div>
            </div>


            <div 
            className='project'
            data-aos="zoom-in-left"
            data-aos-duration="500"
            data-aos-offset="200"
            >
            
               <div 
                
               className="project-text-content">
               <div className='project-title'><h2>Api PDV frente de caixa</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>#Backend</h4>

                    <p>A API representou o projeto final da parceria entre Cubos Academy e iFood. Após seis meses intensos de aprendizado em backend, implementei meus conhecimentos e colaboramos em equipe. Composto por mim e cinco colegas escolhidos aleatoriamente de uma turma de 120 pessoas, enfrentamos desafios de logica de programação e divergencia de horarios. <br/><br />
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
                    src={PdvApi}  alt="<a href= 'https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-e-mail_10839364.htm#query=send%20email&position=18&from_view=search&track=ais&uuid=d1f720c6-5c20-47c2-87b3-d5dd5a05a0bd'>Imagem de storyset</a> no Freepik" />
                </div>
            </div>


            <div 
            className='project'
            data-aos="zoom-in-left"
            data-aos-duration="500"
            data-aos-offset="200"
            >
            
               <div 
               className="project-text-content">
               <div className='project-title'><h2>Esse portifolio!</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>#Frontend</h4>

                    <p>Projeto feito por mim do 0 com muito amor e vontade de fazer algo dirente!<br/><br/>
                        Quando pensei em fazer um portifolio quis fazer algo que fosse dirente dos outros dirente do classico tema escuro e bordas aredondadas, e rapidamente me veio em mente algo que eu gosto muito: o universo cyberpunk! <br/><br/>
                        Fazer esse projeto foi me arrancar da zona de conforto escolhi React e Typescript pois acho a possibilidade de organizar componentes maravilhosa e extremamente prática
                    </p>
                    <div className='buttons-container'>
                    <button className='cta-buttons' onClick={() => window.alert('você esta nele!')}  >Ver projeto</button>
                    <a  href='https://github.com/theotrin/portifolio'target='blank'  className='cta-buttons github-button'>Ver codigo</a>
                    </div>
                </div>
                
                </div> 
                <div className='project-image'>
                    <img 
                    src={CyberpunkProject}  alt="David e Lucy do anime cyberpunk mercenarios" />
                </div>
            </div>

            <div 
            className='project'
            data-aos="zoom-in-left"
            data-aos-duration="500"
            data-aos-offset="200"
            >
            
            <div 
            className="project-text-content">
            <div className='project-title'><h2>Buscador de CEP!</h2></div>

             <div className='project-text'>
                 <h4 className='project-stack'>#Fullstack</h4>

                 <p>Essa foi a primeira vez "estilizando o backend" <br /><br />
                 Ao informar o cep o site retorna os dados da rua,bairro,complemento e a cidade e estado! <br/>
                 Nele ultilizei o Axios para consumir a API viacep fiz algumas validações para evitar erros pela parte do usuario. <br />
                 A facilidade que o react tem em fazer isso me deixou impressionado fullstack é o melhor de dois mundos!
                 </p>
                 <div className='buttons-container'>
                 <a className='cta-buttons' href='https://buscador-cep-black.vercel.app' target='blank' >Ver projeto</a>
                 <a  href='https://github.com/theotrin/buscador-cep'target='blank'  className='cta-buttons github-button'>Ver codigo</a>
                 </div>
             </div>
             
             </div> 
             <div className='project-image'>
                 <img 
                 src={BuscadorCep}  alt="David e Lucy do anime cyberpunk mercenarios" />
             </div>
         </div>




            


        </div>
    )
}


export default Projects