import React, { useState, useEffect } from "react";
import sx from "./Presentation.module.css";
import Button from "../elements/Button";

function Presentation() {
  const [text, setText] = useState("");
  const phrases = ["eu sou Léo", "eu sou desenvolvedor!!"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typingDirection, setTypingDirection] = useState("typing");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentText = phrases[currentPhraseIndex];
      if (typingDirection === "typing") {
        setText((prevText) => currentText.substring(0, prevText.length + 1));
        if (text === currentText) {
          setTypingDirection("deleting");
          clearInterval(interval);
        }
      } else if (typingDirection === "deleting") {
        setText((prevText) => prevText.substring(0, prevText.length - 1));
        if (text === "") {
          setTypingDirection("typing");
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
          clearInterval(interval);
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, [text, typingDirection, currentPhraseIndex, phrases]);

  return (
    <div className={sx.presentation}>
      <h4>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </h4>
      <h1>Olá, {text}</h1>
      <p>
        Estou comprometido em avançar na minha carreira profissional
        <br />
        através de estudos diários e enfrentando desafios constantes.
        <br />
        Com uma sólida experiência em front-end, meu objetivo é evoluir
        <br />
        para um desenvolvedor full-stack. Tenho uma paixão profunda por
        <br />
        tecnologia e uma constante vontade de aprender e crescer
        <br />
        Desejo contribuir com soluções inovadoras em projetos de grande
        <br />
        impacto, trazendo criatividade e eficiência para cada desafio.
        <br />
      </p>
      <div className={sx.button}>
        <Button
          
          link="https://github.com/VictorYooga"
          text="Saber Mais"
        />
      </div>
    </div>
  );
}

export default Presentation;