export default function CityIntro({
    title,
    subtitle,
    paragraphs = [],
    imageSrc,
    imageAlt = "",
    imageRatio = 5,
    textRatio = 7,
  }) {
    return (
      <div className="bg-[#fdf6ef] font-serif">
        <div className="max-w-6xl mx-auto pt-5 grid grid-cols-1 md:grid-cols-12 gap-10 md:items-end">
          {/* 左側圖片 */}
          <div className={`md:col-span-${imageRatio}`}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg shadow-md w-full h-full max-h-[500px] object-cover object-center"
            />
          </div>
  
          {/* 右側文字 */}
          <div className={`md:col-span-${textRatio} text-[#504339]`}>
            <h3 className="text-xl mb-2">{subtitle}</h3>
            <h2 className="text-4xl font-bold tracking-wide mb-6">{title}</h2>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed text-lg ${i !== 0 ? "mt-4" : "mb-4"}`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }