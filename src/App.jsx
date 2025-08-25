import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import PageTransition from "./components/PageTransition.jsx";
import StairTransition from "./components/StairTransition .jsx";

export default function App() {
  const location = useLocation();

  return (
    <>
      <StairTransition />

      <NavBar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
