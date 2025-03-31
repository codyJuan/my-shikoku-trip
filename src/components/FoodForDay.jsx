import { useState } from "react";
import foodData from "../data/foodData";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";

// 類別與 emoji 對應
const typeMap = {
  拉麵: "🍜",
  烏龍麵: "🍥",
  冰品: "🍦",
};
const allowedTypes = ["拉麵", "烏龍麵", "冰品"];

export default function FoodForDay({ date }) {
  const foods = foodData
    .filter((f) => f.days.includes(date))
    .map((f) => ({
      ...f,
      displayType: allowedTypes.includes(f.type) ? f.type : "其他",
    }));

  if (foods.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-4 mt-12 font-serif text-[#504339]">
      <h2 className="text-2xl font-bold mb-4">🍱 當天吃了這些</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
}

function FoodCard({ food }) {
  const hasMultipleImages = food.images?.length > 1;
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="relative bg-white p-4 rounded-xl shadow">
      {/* 圖片區域包一層 container，讓標籤可超出圖片 */}
      <div className="relative">
        {/* 類別標籤：超出圖片右上角 */}
        <span className="absolute -top-3 -right-3 z-10 bg-white/90 text-xs px-3 py-1 rounded-full text-gray-700 shadow">
          {typeMap[food.displayType] || "🍴"} {food.displayType}
        </span>

        <div ref={sliderRef} className="keen-slider overflow-hidden rounded">
          {(food.images || [food.image]).map((imgObj, idx) => {
            const src = typeof imgObj === "string" ? imgObj : imgObj.src;
            const pos = typeof imgObj === "string" ? (food.imagePositionPercent ?? 50) : (imgObj.position ?? 50);
            return (
              <div key={idx} className="keen-slider__slide">
                <img
                  src={src}
                  alt={`${food.name} ${idx + 1}`}
                  className="w-full h-40 object-cover"
                  style={{
                    objectPosition: `center ${100 - pos}%`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {hasMultipleImages && (
          <>
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {(food.images || [food.image]).map((_, i) => (
                <button
                  key={i}
                  onClick={() => instanceRef.current?.moveToIdx(i)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === i ? "bg-[#504339]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 文字區 */}
      <h3 className="mt-2 text-lg font-semibold">{food.name}</h3>
      <p className="text-sm text-gray-600 mb-1">{food.description}</p>
      {food.location && (
        <p className="text-xs text-gray-500 mb-1">📍 {food.location}</p>
      )}
      {food.googleMapUrl && (
        <a
          href={food.googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600 hover:underline"
        >
          在 Google 地圖查看 →
        </a>
      )}
    </div>
  );
}