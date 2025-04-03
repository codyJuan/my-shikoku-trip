import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ItinerarySection({ title, items }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-[#504339] mb-6 font-serif">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <ItineraryCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}

function ItineraryCard({ item }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // 支援：images 是 array of string 或 object
  const parsedImages = (item.images || []).map((img) =>
    typeof img === "string" ? { src: img } : img
  );

  const hasMultipleImages = parsedImages.length > 1;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* 圖片滑動區 */}
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {parsedImages.map((img, i) => (
            <div key={i} className="keen-slider__slide">
              <img
                src={img.src}
                alt={`${item.title} ${i + 1}`}
                className="w-full h-48 object-cover cursor-pointer"
                style={{
                  objectPosition:
                    typeof img.position === "number"
                      ? `center ${img.position}%`
                      : img.position || "center",
                }}
                onClick={() => setLightboxOpen(true)}
              />
            </div>
          ))}
        </div>

        {/* 左右按鈕 */}
        {hasMultipleImages && (
          <>
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* 小圓點 */}
        {hasMultipleImages && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {parsedImages.map((_, i) => (
              <button
                key={i}
                onClick={() => instanceRef.current?.moveToIdx(i)}
                className={`w-2 h-2 rounded-full transition ${
                  currentSlide === i ? "bg-[#504339]" : "bg-gray-300"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox 預覽 */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentSlide}
        slides={parsedImages.map((img) => ({ src: img.src }))}
      />

      {/* 文字區 */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#504339]">{item.title}</h3>
        {item.date && <p className="text-sm text-gray-500">{item.date}</p>}
        <p className="text-sm text-gray-700 mt-2">{item.description}</p>
      </div>
    </div>
  );
}