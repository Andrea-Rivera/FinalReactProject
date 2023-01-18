import HomeImage from "../projectList/images/picAndrea.JPG";
import CV from "../projectList/images/cvNew2022.pdf";
import { HiDownload } from "react-icons/hi";
import homeStyles from "./home.module.css";

const Home = () => {
  return (
    <section style={{ height: "100vh" }}>
      <article className="home">
        <h1> Andrea Rivera Pena </h1>
        <h2>Changing careers to become a great Programmer & Web Developer</h2>
        <img
          className={homeStyles.img}
          src={HomeImage}
          alt="Andrea Rivera"
          style={{ alignItems: "center", height: "20vh", width: "20vh" }}
        />

        <p className={homeStyles.p}>
          "I am a career changer and a student of Code like a Girl scholarship.
          Currently, I am looking for opportunities to build more expertise in
          the web development industry to become an experienced programmer. I
          would like to become an expert in Front-end development. Then, a
          professional full stack developer".
        </p>

        <a href={CV} download className="btn primary">
          Download CV
          <HiDownload />
        </a>
      </article>
    </section>
  );
};

export default Home;
