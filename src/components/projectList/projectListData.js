import Christmas from "./images/christmasShop.JPG";
import bookAll from "./images/bookAll.JPG";
import weatherApp from "./images/weather.png";
import news from "./images/news_style.png";



const ProjectListData = [
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
    image: weatherApp,
    title: "Phyton Weather Project",
    description: "The purpose of this project was to create scripts that manage weather data. ",
    github: "https://github.com/Andrea-Rivera/weather_project",
    isDisabled: true,
  },
    {
    id: 4,
    image: news,
    title: "News App",
    description: "This project was done to practice python and Django concepts by building different features.",
    github: "https://github.com/Andrea-Rivera/news_project",
    isDisabled: true,
  },
];

export default ProjectListData;
