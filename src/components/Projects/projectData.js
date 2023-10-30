import Christmas from "./images/christmasShop.JPG";
import bookAll from "./images/bookAll.JPG";
import weatherApp from "./images/weather.png";
import news from "./images/news_style.png";
import crowdfunding from "./images/crowdfundingApp.png"
import mentorship from "./images/mentorship.png"




const ProjectData = [
  {
    id: 1,
    image: Christmas,
    title: "Christmas Shopping website",
    description: "HTML, CSS and Javascript project to practice Forms, Links, Flexbox, DOM Manipulation ",
    demo: "https://rococo-sunflower-9b8f02.netlify.app/",
    github: "https://github.com/Andrea-Rivera/CLG_FirstProject",
   
  },
  {
    id: 2,
    image: bookAll,
    title: "Books App",
    description: "In this React project I practiced useState() ,and learned about axios and how to use google Books API. ",
    demo: "https://adorable-kangaroo-e933a4.netlify.app/",
    github: "https://github.com/Andrea-Rivera/BooksAllReact",
  },

  {
    id: 3,
    image: news,
    title: "News App",
    description: "This project was done to practice Python and Django concepts by building different features.",
    demo: "https://she-codes-news.fly.dev/news/",
    github: "https://github.com/Andrea-Rivera/news_project",
  },
  {
    id: 4,
    image: crowdfunding,
    title: "crowdfunding App",
    description: "This project was done to practice DRF and React concepts by building different features.",
    demo: "https://frontend-crowdfunding.netlify.app/",
    github: "https://github.com/Andrea-Rivera/crowdfunding-frontend",
  },
  {
    id: 5,
    image: mentorship,
    title: "MentorShip App",
    description: "This project was a group project to practice DRF and React concepts but also to learn more the use of github and team work.",
    demo: "https://mentorship-shecodes.netlify.app/",
    github: "https://github.com/SheCodesAus/layer_8_victory_frontend_bris_2023",
  },
    {
    id: 6,
    image: weatherApp,
    title: "Phyton Weather Project",
    description: "The purpose of this project was to create scripts that manage weather data. ",
    github: "https://github.com/Andrea-Rivera/weather_project",
    isDisabled: true,
    
  },
];

export default ProjectData;
