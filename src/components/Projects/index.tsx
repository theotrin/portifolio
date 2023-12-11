import './style.css'
import project_0_image from '../../assets/na-operacao-atm-do-banco-digite-a-senha.jpg'
import * as React from 'react';
import tilt from 'vanilla-tilt';

function Projects(){
    const ref = React.useRef(null);
    React.useEffect(() => {
        const div:HTMLDivElement = ref.current;
        tilt.init(div);
        function onTiltChange(e) {
          div.dataset['tiltStartx'] = '10';
          div.dataset['tiltStarty'] = '10';
        }
        div.addEventListener('tiltChange', onTiltChange);
        return () => {
          div.removeEventListener('tiltChange', onTiltChange);
          (div as any).vanillaTilt.destroy(ref.current);
        };
      }, []);
    
    return(
        <div>

            <h2 className='project-main-title'>Projetos</h2>
          
            <div className='project'>
            
               <div className="project-text-content">
               <div className='project-title'><h2>Api CRUD bancaria</h2></div>

                <div className='project-text'>
                    <h4 className='project-stack'>backend</h4>

                    <p>Desenvolvi uma API REST com Express, Node e Nodemon. Oferece funcionalidades como: criar/listar/atualizar/excluir contas bancárias/depósito/saque/transferência/ consulta de saldo e emissão de extrato. <br/> Eficiente e escalável para gestão simplificada de operações bancárias.foi uma prova proposta pela Cubos academy onde tirei nota máxima</p>
                    <div className='buttons-container'>
                    <button className='cta-buttons'>Ver projeto</button>
                    <a  href='https://github.com/theotrin/api-de-banco'target='blank'  className='cta-buttons github-button'>Ver codigo</a>
                    </div>
                </div>
                
                </div> 
                <div 
                ref={ref}
                data-tilt
                data-tilt-max="4"
                data-tilt-glare="true"
                data-tilt-max-glare="0.5"

                className='project-image'>
                    <img 
                    src={project_0_image} width={800} height={500} alt="fazendo operações em um caixa eletrônico" />
                </div>
            </div>


        </div>
    )
}


export default Projects