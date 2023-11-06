import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiPython } from "react-icons/si" ;
import {TbBrandCSharp}from "react-icons/tb" ;
import htmlImage from "../Cards/images/html.png";
import jsImage from "../Cards/images/js.png";
import reactImage from "../Cards/images/react.png";


const SkillData = [
  {
    id: 1,
    icon: <ImHtmlFive />,
    title: "HTML/CSS",
   
    description:
      "HTML: Structure images, links ,div, span, tables, inputs and other concepts such as headers,articles,sections.CSS: I learned about colours, fonts, css selectors, responsive design , flexbox, accesibility",
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
    icon: <SiJavascript />,
    title: "Javascript",
    description:
      "Variables, data types,loops, functions , Web Apis, arrays, objects, ajax and fetch Api",
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
    id: 3,
    icon: <SiReact />,
    title: "React",
    description:
      "ES6, components, props, routing, working with APIs, react hooks such as useState, useEffect, useContext ",
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
    id: 4,
    icon: <SiPython />,
    title: "Python and Django",
    description:
     "I learned to work with models, views, templates, and authentication modules. Currently implementing serializers and building APIs  ",
  },
  {
    id: 5,
    icon: <TbBrandCSharp />,
    title: "C#",
    description:
      "Variables,Methods, Classes, OOP priciples. ASP.NET: MVC(Model. View, Controller) ,Web API's, Linq Queries",
  },



];

export default SkillData;
