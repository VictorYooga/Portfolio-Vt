import sx from "./Projects.module.css";
import Card from "../elements/Card";
import desafio from "../../images/project1.png";
import landing from "../../images/project2.png";
import ccxp from "../../images/project3.png";
import weather from "../../images/weather.png";

function Projects() {
  return (
    <div id="projects" className={sx.projects}>
      <h1>Projetos</h1>
    
        <div className={sx.cardContainer}>
          
          <Card
            img={desafio}
            link="https://dasafio.netlify.app/"
            title="Primeiro Desafio"
            text="Meu primeiro teste no curso de programação foi uma experiência emocionante e desafiadora. Foi a primeira vez que pude aplicar meus conhecimentos de forma independente, sem orientação direta. O desafio envolvia criar uma landing page para uma empresa de arquitetura."
            repo="https://github.com/VictorYooga/Desafio/tree/main?tab=readme-ov-file"
            className={sx.card}
          />
          <Card
            img={weather}
            link="https://newweatheer.netlify.app/"
            title="Weather"
            text="No segundo desafio avaliativo do curso, mergulhamos no universo das APIs para resolver uma tarefa específica: obter dados do CEP e fornecer previsões meteorológicas com base em coordenadas geográficas. Foi uma jornada empolgante e enriquecedora, onde pudemos aplicar nossas habilidades de programação de maneira prática e realista"
            repo="https://github.com/VictorYooga/Weather/tree/main"
            className={sx.card}
          />
          <Card
            img={landing}
            link="https://projetto-landing-page.netlify.app/"
            title="Landing Page"
            text="Minha estreia na programação foi marcada pela criação de uma página web simples, desenvolvida durante meu curso introdutório. Utilizei HTML para organizar o conteúdo e CSS para conferir estilo e um design atraente."
            repo="https://github.com/VictorYooga/Projeto-Landing-Page"
            className={sx.card}
          />
          <Card
            img={ccxp}
            link="https://ccxpp22.netlify.app/"
            title="CCXP"
            text="Este projeto foi concebido com uma abordagem tecnológica diversificada, utilizando HTML, CSS, JavaScript, Git e Figma. Essa combinação de ferramentas permitiu uma implementação robusta e eficiente, desde a estruturação inicial até a prototipagem e o controle de versão."
            repo="https://github.com/VictorYooga/Projeto-CCXP22/tree/main"
            className={sx.card}
          />
        
      </div>
    </div>
  );
}

export default Projects;