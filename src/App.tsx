import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/Button";
import Home from "./components/Home";
import CardsComponents from "./components/Card";
import AdvanedCard from "./components/AdvancedCard";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<AboutPage />} />
        <Route path="/card" element={<CardsComponents />} />
        <Route path="/card-advanced" element={<AdvanedCard />} />
      </Routes>
    </>
  );
};

export default App;
