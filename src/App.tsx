import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/Button";
import Home from "./components/Home";
import CardsComponents from "./components/Card";
import AdvanedCard from "./components/AdvancedCard";
import Sidebar from "./components/Sidebar";
import ScrollBase from "./components/ScrollBase";
import LayoutsInMotion from "./components/LayoutsInMotion";
import TextAnimaiton from "./components/TextAnimaiton";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<AboutPage />} />
        <Route path="/card" element={<CardsComponents />} />
        <Route path="/card-advanced" element={<AdvanedCard />} />
        <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/scroll" element={<ScrollBase />} />
          <Route path="/layouts-in-motion" element={<LayoutsInMotion />} />
          <Route path="/text-animation" element={<TextAnimaiton />} />

      </Routes>
    </>
  );
};

export default App;
