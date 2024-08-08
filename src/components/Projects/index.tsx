import './style.css'
import project_0_image from '../../assets/na-operacao-atm-do-banco-digite-a-senha.jpg'
import EmailProject from '../../assets/email project.jpg'
import PdvApi from '../../assets/pdv api.jpg'
import CyberpunkProject from '../../assets/cyberpunk project.jpg'
import BuscadorCep from '../../assets/buscador de cep.png'
import UsersFilter from '../../assets/users-filter-angular.png'
import TodoBemol from '../../assets/projeto_bemol.png'
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
            
            <div 
              className='project'
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-offset="200"
            >

               <div 
               className="project-text-content">
               <div className='project-title'><h2>Lista de Tarefas Bemol</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>#Full Stack</h4>

                    <p>Este projeto foi um desafio técnico para uma vaga de emprego, que envolvia a criação de uma API para conectar com a interface front-end. A API deveria permitir a criação, conclusão e exclusão de tarefas em uma lista gerada pelo usuário. Era essencial que a API fosse robusta, com testes unitários e seguisse os padrões de qualidade REST. Logo após o termino desse projeto fui contatado para preencher a vaga!</p>
                    <div className='buttons-container'>
                    <a  href='https://github.com/theotrin/apresentacao-desafio-bemol'target='blank'  className='cta-buttons github-button'>Ver apresentação do projeto</a>
                    </div>
                </div>
                
                </div> 
                <div 
               
                className='project-image'>
                    <img 
                    src={TodoBemol} alt="fazendo operações em um caixa eletrônico" />
                </div>
            </div>

            <div 
              className='project'
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-offset="200"
            >

               <div 
               className="project-text-content">
               <div className='project-title'><h2>Filtro de usuarios</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>#Front end</h4>

                    <p>O projeto realiza a filtragem de usuários em um sistema, permitindo pesquisas por nome, data e status (se o usuário está ativo ou não). Foi o meu primeiro grande projeto em Angular, onde utilizei as melhores práticas, como two-way data binding, pipes e diversas outras técnicas avançadas.</p>
                    <div className='buttons-container'>
                    <a className='cta-buttons' href='https://users-filter-angular.vercel.app/' target='blank' >Ver projeto</a>
                    <a  href='https://github.com/theotrin/users-filter-angular'target='blank'  className='cta-buttons github-button'>Ver codigo</a>
                    </div>
                </div>
                
                </div> 
                <div 
               
                className='project-image'>
                    <img 
                    src={UsersFilter} alt="fazendo operações em um caixa eletrônico" />
                </div>
            </div>

            <div 
              className='project'
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-offset="200"
            >

               <div 
               className="project-text-content">
               <div className='project-title'><h2>Api CRUD bancaria</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>#Back end</h4>

                    <p>Desenvolvi uma API REST com Express, Node e Nodemon. Oferece funcionalidades como: criar, listar, atualizar, excluir contas bancárias, depósito, saque, transferência, consulta de saldo e emissão de extrato. <br/> É eficiente e escalável para gestão simplificada de operações bancárias. Foi uma prova proposta pela Cubos Academy, onde tirei nota máxima.</p>
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
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-offset="200"
            >
               <div 
                
               className="project-text-content">
               <div className='project-title'><h2>Preparador de email</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>#Front end</h4>

                    <p className='email-text'>Esse foi um dos projetos que trouxe mais resultados do que beleza ou tecnologias usadas.<br/><br/> 
                    Ao chegar em uma empresa de nível estadual como estagiário, percebi um problema logo de cara: o envio excessivo de e-mails feito pelos estagiários a mão, uma hora era encaminhado com erros, às vezes de ortografia, às vezes os nomes de "professor fulano" eram trocados por "professora ciclana" e o corpo ficava todo confuso. <br/> <br/>
                    Eu estava aprendendo JavaScript e percebi que poderia solucionar esse problema, trazendo mais <span className='prod'>produtividade</span> e menos <span className='erro'>erros</span> para a empresa. Então, com muita vontade de resolver o erro, fiz um site simples, porém que fez sucesso no ambiente de trabalho, que resolvia ativamente esse problema. Desde então, os e-mails foram enviados com um índice extremamente baixo de erros pelos funcionários do local (imagine que vergonha para uma empresa de renome em todo o estado do Amazonas). <br/>
                    <span className='prod'>Foi um projeto simples, mas que resolveu um problema do mundo real!</span>
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
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-offset="200"
            >
            
               <div 
                
               className="project-text-content">
               <div className='project-title'><h2>Api PDV frente de caixa</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>#Back end</h4>

                    <p>AA API representou o projeto final da parceria entre a Cubos Academy e o iFood. Após seis meses intensos de aprendizado em backend, implementei meus conhecimentos e colaborei em equipe. Composto por mim e mais cinco colegas escolhidos aleatoriamente de uma turma de 120 pessoas, enfrentamos desafios de lógica de programação e divergência de horários.<br/><br />
                    A parte técnica até que foi fácil. Porém, o desafio de fazer o projeto todo funcionar com várias pessoas diferentes e com diferenças de horário foi uma experiência e tanto. Trabalhamos com Git, dividimos o trabalho em partes, utilizamos a metodologia ágil em forma de scrum e fizemos sprints toda semana para a entrega de partes do projeto a cada semana.
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
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-offset="200"
            >
            
               <div 
               className="project-text-content">
               <div className='project-title'><h2>Esse portifolio!</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>#Front end</h4>

                    <p>Projeto feito por mim do zero com muito amor e vontade de fazer algo diferente!<br/><br/>
                        Quando pensei em fazer um portfólio, quis fazer algo que fosse diferente dos outros, diferente do clássico tema escuro e bordas arredondadas. Rapidamente me veio em mente algo que eu gosto muito: o universo cyberpunk! <br/><br/>
                        Fazer esse projeto foi me arrancar da zona de conforto. Escolhi React e TypeScript pois acho a possibilidade de organizar componentes maravilhosa e extremamente prática.
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
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-offset="200"
            >
            
            <div 
            className="project-text-content">
            <div className='project-title'><h2>Buscador de CEP!</h2></div>

             <div className='project-text'>
                 <h4 className='project-stack'>#Full stack</h4>

                 <p>Essa foi a primeira vez que estilizei o backend :D.<br /><br />
                 Ao informar o CEP, o site retorna os dados da rua, bairro, complemento e a cidade e estado.<br/>
                 Nele, utilizei o Axios para consumir a API ViaCEP e fiz algumas validações para evitar erros por parte do usuário. <br />
                 A facilidade que o React tem em fazer isso me deixou impressionado. Fullstack é o melhor dos dois mundos!
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