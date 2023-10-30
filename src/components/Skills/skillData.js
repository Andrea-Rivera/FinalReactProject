import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiCsswizardry } from "react-icons/si";
import { SiPython } from "react-icons/si" ;
import htmlImage from "../Cards/images/html.png";
import jsImage from "../Cards/images/js.png";
import reactImage from "../Cards/images/react.png";


const SkillData = [
  {
    id: 1,
    icon: <ImHtmlFive />,
    title: "HTML",
    description:
      "I learned to structure images, links ,div, span, tables, inputs and other concepts such as headers,articles,sections.",
    certificate: (
      <a
        href="https://api.au.badgr.io/public/assertions/txVo6Yy2RiGtMTBnpsG30w?identity__email=andita54%40hotmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={htmlImage}
          alt="HTML & CSS badge"
          style={{ width: "80px", height: "80px" }}
        />
      </a>
    ),
  },
  {
    id: 2,
    icon: <SiCsswizardry />,
    title: "CSS",
    description:
      "I learned about colours, fonts, css selectors, responsive design , flexbox, accesibility",
  },
  {
    id: 3,
    icon: <SiJavascript />,
    title: "Javascript",
    description:
      "I learned variables, data types,loops, functions , Web Apis, arrays, objects, ajax and fetch Api",
    certificate: (
      <a
        href="https://api.au.badgr.io/public/assertions/-xxscIJjSqap3Psy7BtmlA?identity__email=andita54%40hotmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={jsImage}
          alt="HTML & CSS badge"
          style={{ width: "60px", height: "60px" }}
        />
      </a>
    ),
  },
  {
    id: 4,
    icon: <SiReact />,
    title: "React",
    description:
      "I learned about ES6, components, props, routing, working with APIs, react hooks such as useState, useEffect, useContext ",
    certificate: (
      <a
        href="https://api.au.badgr.io/public/assertions/sWI0AKS8TBuGZsS4LJL4Ag?identity__email=andita54%40hotmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={reactImage}
          alt="HTML & CSS badge"
          style={{ width: "60px", height: "60px" }}
        />
      </a>
    ),
  },
  {
    id: 5,
    icon: <SiPython />,
    title: "Python and Django",
    description:
     "I learned to work with models, views, templates, and authentication modules. Currently implementing serializers and building APIs  ",
  },
];

export default SkillData;