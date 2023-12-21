import { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import { pages } from "../data/pages";
import { AppContext } from "./AppContext";
import { Page } from "./Page";

function Pages() {
  const location = useLocation();
  const appContext = useContext(AppContext);

  if (appContext) {
    return (
      <PageTransition
        preset={"cubeToTop"}
        transitionKey={location.pathname}
        enterAnimation={appContext.enterAnimation || ""}
        exitAnimation={appContext.exitAnimation || ""}
      >
        <Routes location={location}>
          {pages.map((page, index) => {
            return (
              <Route
                key={index}
                path={page.path}
                element={<Page page={page} />}
              />
            );
          })}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </PageTransition>
    );
  }

  return null;
}

export { Pages };
