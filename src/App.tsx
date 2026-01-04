import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/Button";
import Home from "./components/Home";
import CardsComponents from "./components/Card";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<AboutPage />} />
        <Route path="/card" element={<CardsComponents />} />
      </Routes>
    </>
  );
};

export default App;
