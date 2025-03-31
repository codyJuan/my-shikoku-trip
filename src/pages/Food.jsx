import { useState } from "react";
import foodData from "../data/foodData";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
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

function FoodCard({ food }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const parsedImages = (food.images || [food.image]).map((img) =>
    typeof img === "string" ? { src: img } : img
  );
  const hasMultipleImages = parsedImages.length > 1;

  return (
    <div className="relative bg-white p-4 rounded-xl shadow overflow-hidden">
      <div className="relative">
        <span className="absolute -top-3 -right-3 z-10 bg-white/90 text-xs px-3 py-1 rounded-full text-gray-700 shadow">
          {typeMap[food.displayType] || "🍴"} {food.displayType}
        </span>

        <div ref={sliderRef} className="keen-slider overflow-hidden rounded">
          {parsedImages.map((img, idx) => (
            <div key={idx} className="keen-slider__slide">
              <img
                src={img.src}
                alt={`${food.name} ${idx + 1}`}
                className="w-full h-48 sm:h-40 object-cover cursor-pointer"
                style={{ objectPosition: `center ${100 - (img.position ?? 50)}%` }}
                onClick={() => setLightboxOpen(true)}
              />
            </div>
          ))}
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
              {parsedImages.map((_, i) => (
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

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentSlide}
        slides={parsedImages.map((img) => ({ src: img.src }))}
      />

      <h3 className="mt-2 text-lg font-semibold">{food.name}</h3>
      <p className="text-sm text-gray-600 mb-1">{food.description}</p>
      {food.location && (
        <p className="text-xs text-gray-500">📍 {food.location}</p>
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