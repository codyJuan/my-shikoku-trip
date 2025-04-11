import { useState } from "react";
import foodData from "../data/foodData";
import FoodCard from "../components/FoodCard";
import "keen-slider/keen-slider.min.css";
import "yet-another-react-lightbox/styles.css";

// 類別限定
const categories = ["全部", "拉麵", "烏龍麵", "冰品", "其他"];
const typeMap = {
  拉麵: "🍜",
  烏龍麵: "🍥",
  冰品: "🍦",
};

export default function Food() {
  const [selected, setSelected] = useState("全部");

  const filtered = foodData
    .map((f) => ({
      ...f,
      displayType: categories.includes(f.type) ? f.type : "其他",
    }))
    .filter((f) => selected === "全部" || f.displayType === selected);

  return (
    <div className="max-w-6xl mx-auto pt-20 px-4 py-12 font-serif text-[#504339]">
      <h1 className="text-3xl font-bold mb-6">🍽️ 四國美食總覽</h1>

      {/* 分類切換 */}
      <div className="flex overflow-x-auto whitespace-nowrap gap-3 mb-6 pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1 rounded-full border shrink-0 ${
              selected === cat
                ? "bg-[#504339] text-white"
                : "text-[#504339] border-[#ccc]"
            }`}
          >
            {typeMap[cat] || "🍴"} {cat}
          </button>
        ))}
      </div>

      {/* 卡片區 */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

