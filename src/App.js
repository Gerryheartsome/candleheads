import Home from "./pages/home";
import Landing from "./pages/landing";
import {Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";



function App() {
  const location = useLocation();
  return (
    <>
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing/>} />
        <Route path="home" element={<Home/>}/>
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;
