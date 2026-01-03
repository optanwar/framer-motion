import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/Button";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
