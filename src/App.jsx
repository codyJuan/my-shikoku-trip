import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Takamatsu from "./pages/Takamatsu";
import Tokushima from "./pages/Tokushima";
import Matsuyama from "./pages/Matsuyama";
import Food from "./pages/Food";
import Day1 from "./pages/DayPages/Day1";
import Day2 from "./pages/DayPages/Day2";
import Day3 from "./pages/DayPages/Day3";
import Day4 from "./pages/DayPages/Day4";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHashElement from "./components/ScrollToHashElement";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <ScrollToHashElement />
      <Routes>
        {/* 整站通用 Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/takamatsu" element={<Takamatsu />} />
          <Route path="/tokushima" element={<Tokushima />} />
          <Route path="/matsuyama" element={<Matsuyama />} />
          <Route path="/food" element={<Food />} />

          {/* 新增每日行程頁面 */}
          <Route path="/day1" element={<Day1 />} />
          <Route path="/day2" element={<Day2 />} />
          <Route path="/day3" element={<Day3 />} />
          <Route path="/day4" element={<Day4 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;