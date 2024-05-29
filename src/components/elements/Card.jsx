import sx from "./Card.module.css";
import Button from "./Button";

function Card({ link, img, title, text, repo }) {
  return (
    <div className={sx.card}>
    
      <a href={link} target="u_blank">
        <img src={img} />
      </a>
      <h3>{title}</h3>
      <p>
        <strong>{text}</strong>
      </p>
      
     
      <div className={sx.btn}>
        <Button link={repo} text="Repositório" />
      </div>
    </div>
  );
}

export default Card;