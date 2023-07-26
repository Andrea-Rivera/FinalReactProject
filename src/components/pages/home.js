import HomeImage from "../projectList/images/picAndrea.JPG";
import CV from "../projectList/images/NEW-CV 2023.pdf";
import { HiDownload } from "react-icons/hi";
import "./home.css";

const Home = () => {
  return (
  <section>
      <h1> Andrea Rivera Pena </h1>
      <div className="header">
        <img src={HomeImage} alt="Portfolio Projects" className="homeImage" />
        <a href={CV} download className="homeButton">
          Download CV
          <HiDownload />
        </a>
      </div>

      <article className="home">
         <div className="fade_In">
        <h2>Changing careers to become a great Programmer & Web Developer</h2>

        <p className="homeParagraph">
          "I am a web development graduate looking for opportunities as a Front- End developer 
          also with an interest in the Back-end. I am transitioning from the electronics to the 
          software industry where I can continue automating processes and creating interesting apps."
        </p>
        </div>
      </article>
    </section>
  );
};

export default Home;
