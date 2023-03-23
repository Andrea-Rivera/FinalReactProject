import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiCsswizardry } from "react-icons/si";
import { SiSharp } from "react-icons/si";

const Skilldata = [
  {
    id: 1,
    icon: <ImHtmlFive />,
    title: "HTML",
    description:
      "I have learned to structure images, links ,div, span, tables, inputs and some modern concepts such as headers,articles,sections. I believe that I have a good understanding of HTML",
       certificate: (
      <a href="https://api.au.badgr.io/public/assertions/txVo6Yy2RiGtMTBnpsG30w?identity__email=andita54%40hotmail.com">
        HTML & CSS Badge
      </a>
    ),
  },
  {
    id: 2,
    icon: <SiCsswizardry />,
    title: "CSS",
    description:
      "I have learned about colours, fonts, css selectors, responsive design , flexbox, accesibility",
  },
  {
    id: 3,
    icon: <SiJavascript />,
    title: "Javascript",
    description:
      "I have learned variables, data types,loops, functions , Web Apis, arrays, objects, ajax and fetch Api",
      certificate: (
      <a href="https://api.au.badgr.io/public/assertions/-xxscIJjSqap3Psy7BtmlA?identity__email=andita54%40hotmail.com">
        Javascript Badge
      </a>
    ),
  },
  {
    id: 4,
    icon: <SiReact />,
    title: "React",
    description:
      "I have learned about ES6, components, props, routing, working with APIs, react hooks such as useState, useEffect, useContext ",
      certificate: (
      <a href="https://api.au.badgr.io/public/assertions/sWI0AKS8TBuGZsS4LJL4Ag?identity__email=andita54%40hotmail.com">
        React Badge
      </a>
    ),
  },
  {
    id: 5,
    icon: <SiSharp />,
    title: "C#",
    description:"I have learned about classes, methods, properties and concepts like inheritance and abstraction",
  },
];

export default Skilldata;
