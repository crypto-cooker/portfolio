import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { pages } from "../data/pages";
import { CSSTransition } from "react-transition-group";
import "react-tooltip/dist/react-tooltip.css";
import "animate.css";

const NavLink = styled.a`
  border-radius: 8px;
  flex: none;
  font-weight: 500;
  padding: 2px 6px;
  text-decoration: none;
  transition: background-color 200ms ease;
`;

function Navigation() {
  const router = useLocation();

  return (
    <div className="flex items-center justify-center w-full">
      <CSSTransition timeout={1000} classNames="fade">
        <div className="fixed z-50 flex gap-5 p-1 bg-black rounded-full bottom-3 dark:bg-opacity-10 backdrop-blur-lg animate__animated animate__fadeInUp animate__delay-2s bg-opacity-60">
          {pages.map((page, index) => (
            <NavLink
              as={Link}
              key={index}
              to={page.path}
              className="flex items-center justify-center "
            >
              <div
                className={`p-2 transition-all duration-300 hover:bg-red-600 hover:rounded-full hover:bg-opacity-20 relative tooltip ${
                  router.pathname === page.path &&
                  "bg-red-600 rounded-full bg-opacity-90"
                }`}
              >
                {page.icon}
                <span className="uppercase tooltiptext">{page.title}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}

export { Navigation };
