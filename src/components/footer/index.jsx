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
       <ImMobile />
       <MdEmail/>
       <ImGithub/>
       <FaLinkedin/>
       </div>
       </footer>
   )
}

export default Footer