import sx from "./Aboutme.module.css";
import timeline from "../../images/timeline.png";

function Aboutme() {
  return (
    <div id="aboutme" className={sx.aboutme}>
      <h1>Sobre Mim</h1>
      <div className={sx.years}>
        <p>2024</p>
        <p>2024</p>
        <p>2024</p>
        <p>2024</p>
      </div>
      <div className={sx.timeline}>
        <img src={timeline} />
      </div>
      <div className={sx.text}>
        <p>
        Iniciei minha jornada na programação com projetos introdutórios,
        consolidando os fundamentos ao construir uma página web funcional
        utilizando HTML, CSS e JavaScript.
        </p>
        <p>
        Avancei para desafios mais avançados envolvendo integrações
        de APIs, onde aprofundei meu conhecimento em solicitações HTTP,
        manipulação de dados JSON e integração de respostas de APIs em minhas aplicações.
        </p>
        <p>
        Enquanto mergulhava no desenvolvimento fullstack, destaquei-me com meu
        portfólio criado com React e Vite, representando um marco significativo
        que ilustra minhas competências tanto no front-end quanto no back-end.
        </p>
        <p>
        Cada projeto e desafio enfrentado durante o curso representou um marco
        significativo em minha jornada de desenvolvimento como programador,
        possibilitando um aprendizado contínuo e um crescimento substancial
        em minhas habilidades técnicas.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;