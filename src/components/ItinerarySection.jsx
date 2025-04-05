import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import itineraryData from "../data/itineraryData.js";

export default function ItinerarySection({ title, dates }) {
  const items = itineraryData.filter((item) =>
    dates.some((date) => item.days?.includes(date))
  );

  if (items.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
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

  const parsedMedia = (item.images || []).map((media) =>
    typeof media === "string" ? { src: media, type: "image" } : { type: "image", ...media }
  );

  const hasMultipleSlides = parsedMedia.length > 1;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {parsedMedia.map((media, i) => (
            <div key={i} className="keen-slider__slide">
              {media.type === "video" ? (
                <video
                  controls
                  className="w-full h-48 object-cover rounded"
                  style={{ objectPosition: media.position || "center" }}
                >
                  <source src={media.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={media.src}
                  alt={`${item.title} ${i + 1}`}
                  className="w-full h-48 object-cover cursor-pointer"
                  style={{
                    objectPosition:
                      typeof media.position === "number"
                        ? `center ${media.position}%`
                        : media.position || "center",
                  }}
                  onClick={() => setLightboxOpen(true)}
                />
              )}
            </div>
          ))}
        </div>

        {hasMultipleSlides && (
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

        {hasMultipleSlides && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {parsedMedia.map((_, i) => (
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

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentSlide}
        slides={parsedMedia
          .filter((media) => media.type !== "video")
          .map((media) => ({ src: media.src }))}
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#504339]">{item.title}</h3>
        {item.date && <p className="text-sm text-gray-500">{item.date}</p>}
        <p className="text-sm text-gray-700 mt-2">{item.description}</p>
      </div>
    </div>
  );
}
