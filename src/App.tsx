import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./components/AppContext";
import { Navigation } from "./components/Navigation";
import { Routes } from "./components/Routes";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <ThemeSwitcher />
        <Navigation />
        <Routes />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
