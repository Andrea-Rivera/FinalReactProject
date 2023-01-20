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
      "I have learnt to structure images, links ,div, span, tables, inputs and some modern concepts such as headers,articles,sections. I believe that I have a good understanding of HTML",
  },
  {
    id: 2,
    icon: <SiCsswizardry />,
    title: "CSS",
    description:
      "I have learnt about colours, fonts, css selectors, responsive design , flexbox, accesibility",
  },
  {
    id: 3,
    icon: <SiJavascript />,
    title: "Javascript",
    description:
      "I have learnt variables, data types,loops, functions , Web Apis, arrays, objects, ajax and fetch Api",
  },
  {
    id: 4,
    icon: <SiReact />,
    title: "React",
    description:
      "I have learnt about ES6, components, props, routing, working with APIs, react hooks such as useState, useEffect, useContext ",
  },
  {
    id: 5,
    icon: <SiSharp />,
    title: "C#",
    description:"I have learnt about classes, methods, properties and concepts like inheritance and abstraction",
  },
];

export default Skilldata;
