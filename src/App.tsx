import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/Button";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
