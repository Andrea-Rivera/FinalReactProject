import HomeImage from "../projectList/images/picAndrea.JPG";
import CV from "../projectList/images/cvNew2022.pdf";
import { HiDownload } from "react-icons/hi";
import "./home.css";

const Home = () => {
  return (
    <section>
      <h1> Andrea Rivera Pena </h1>
      <div className="header">
        <img src={HomeImage} alt="Portfolio Projects" className="homeImage" />
      </div>
      <article className="home">
        <h2>Changing careers to become a great Programmer & Web Developer</h2>

        <p className="homeParagraph">
          "I am a career changer and a student of Code like a Girl scholarship.
          Currently, I am looking for opportunities to build more expertise in
          the web development industry to become an experienced programmer. I
          would like to become an expert in Front-end development. Then, a
          professional full stack developer".
        </p>
        <a href={CV} download className="btn">
          Download CV
          <HiDownload />
        </a>
      </article>
    </section>
  );
};

export default Home;
