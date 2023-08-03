import styles from "./footer.module.css";
import { ImMobile } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import {ImGithub} from "react-icons/im";
import {FaLinkedin} from "react-icons/fa";


const Footer = () =>{
   return (
    <footer>
       <div className ={styles.footer}>
           Andrea Rivera @ 2023
       </div>
     <div className={styles.footer}>
       <a href="0469965685">
          <ImMobile className= {styles.icon} />
        </a>
        <a href="andita54@hotmail.com" >
          <MdEmail className= {styles.icon} />
        </a>
       <a href="https://github.com/Andrea-Rivera" target={"_blank"} rel={'noreferrer'}>
          <ImGithub className= {styles.icon} />
        </a>
       <a href="https://www.linkedin.com/in/andrea-rivera-pena/" target={"_blank"} rel={'noreferrer'}>
          <FaLinkedin className= {styles.icon} />
        </a>
       </div>
       </footer>
   )
}

export default Footer
