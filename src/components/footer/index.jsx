import styles from "./footer.module.css";
import { ImMobile } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import {ImGithub} from "react-icons/im";
import {FaLinkedin} from "react-icons/fa";


const Footer = () =>{
   return (
    <footer>
       <div className ={styles.footer}>
           Andrea Rivera @ 2022
       </div>
       <div className={styles.footer}>
       <ImMobile className= {styles.icon}/>
       <MdEmail className= {styles.icon}/>
       <ImGithub className= {styles.icon}/>
       <FaLinkedin className= {styles.icon}/>
       </div>
       </footer>
   )
}

export default Footer
