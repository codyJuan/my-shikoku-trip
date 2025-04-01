import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Takamatsu from "./pages/Takamatsu";
import Tokushima from "./pages/Tokushima";
import Matsuyama from "./pages/Matsuyama";
import Food from "./pages/Food";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* 整站通用 Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/takamatsu" element={<Takamatsu />} />
          <Route path="/tokushima" element={<Tokushima />} />
          <Route path="/matsuyama" element={<Matsuyama />} />
          <Route path="/food" element={<Food />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
