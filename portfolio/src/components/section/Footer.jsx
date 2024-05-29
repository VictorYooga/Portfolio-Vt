import sx from './Footer.module.css';
import { FaFigma, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <div className={sx.footer}>
            <div className={sx.contacts}>
            <p>Meu contato:<br/>48 99601-6444</p>
            <p>Email:<br/>victor10romao@gmail.com</p> 
            </div>
        <div>
            <ul>
                <li><a href='https://github.com/VictorYooga' target='_blank'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/victor10romao/' target='_blank'><FaLinkedin size={30}/></a></li>
                <li><a href='https://www.figma.com/file/O2j7uVVhXUnV6dadZc2MMw/Desafio-03%3A-Desenvolva-um-portfólio-com-React-hooks?type=design&node-id=0-1&mode=design&t=RKGkU5Vc57lJZxN0-0' target='_blank'><FaFigma size={30}/></a></li>
            </ul>
        </div>
      </div>
    )
}

export default Footer