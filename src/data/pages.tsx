import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiLogoMicrosoft } from "react-icons/bi";
export type PageType = {
  path: string;
  title: string;
  icon: JSX.Element;
  module: any;
};

const pages: PageType[] = [
  {
    path: "/home",
    title: "home",
    icon: <BiSolidHomeAlt2 size={23} />,
    module: <Home />,
  },
  {
    path: "/about",
    title: "about  ",
    icon: <BiSolidUser size={23} />,
    module: <About />,
  },
  {
    path: "/portfolio",
    title: "portfolio",
    icon: <BiLogoMicrosoft size={23} />,
    module: <Portfolio />,
  },
  {
    path: "/contact",
    title: "contact",
    icon: <BiSolidMessageSquareDetail size={23} />,
    module: <Contact />,
  },
];

export { pages };
