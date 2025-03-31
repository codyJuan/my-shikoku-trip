import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Takamatsu from "./pages/Takamatsu";
import Tokushima from "./pages/Tokushima";
import Ehime from "./pages/Ehime";
import Food from "./pages/Food";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* 整站通用 Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/takamatsu" element={<Takamatsu />} />
          <Route path="/tokushima" element={<Tokushima />} />
          <Route path="/ehime" element={<Ehime />} />
          <Route path="/food" element={<Food />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
