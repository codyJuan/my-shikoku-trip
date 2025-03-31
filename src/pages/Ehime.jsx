import ItinerarySection from "../components/ItinerarySection";
import CityIntro from "../components/CityIntro";

export default function Ehime() {
  const itineraryByDay = [
    {
      day: "Day 6 — 2025/1/9",
      items: [
        {
          title: "梅津寺站看夕陽",
          images: [
            "/images/ehime/ehime-beach.jpeg",
            "/images/ehime/ehime-station.gif",
          ],
          description: "從月台看出去剛好黃昏，很寧靜。推薦一定要來拍照！",
        },
        {
          title: "高島屋摩天輪",
          images: [
            "/images/ehime/ehime-wheel.jpeg",
          ],
          description: "可以眺望整個松山市區的夜景，很漂亮！",
        },
      ],
    },
    {
      day: "Day 7 — 2025/1/10",
      items: [
        {
          title: "道後溫泉本館",
          images: [
            {
              src: "/images/ehime/ehime-onsen1.jpeg",
              position: "bottom"
            },
            {
              src: "/images/ehime/ehime-onsen2.jpeg",
              position: "bottom"
            },
            {
              src: "/images/ehime/ehime-onsen3.jpeg",
              position: "bottom"
            },
            {
              src: "/images/ehime/ehime-onsen4.jpeg",
              position: "center"
            },
          ],
          description: "據說是《神隱少女》靈感來源的溫泉，本館旁邊有泡腳池，走累了剛好可以泡泡腳、放鬆一下！",
        },
        {
          title: "松山城纜車",
          image: "/images/ehime-cable.jpg",
          description: "從上面可以眺望整座城市與遠方大海～",
        },
      ],
    },
  ];
  return (
    <div className="bg-[#fdf6ef] py-12 px-4 font-serif">

      <div className="max-w-6xl mx-auto pt-5 grid grid-cols-1 md:grid-cols-12 gap-10 md:items-end">
        <div className="md:col-span-5">
          <img
            src="/images/ehime/ehime-cable.jpeg"
            alt="Ehime lift view"
            className="rounded-lg shadow-md w-full h-full max-h-[500px] object-cover object-center"
          />
        </div>

        <div className="md:col-span-7 text-[#504339]">
          <h3 className="text-xl mb-2">愛媛縣</h3>
          <h2 className="text-4xl font-bold tracking-wide mb-6">About Ehime</h2>
          <p className="leading-relaxed text-lg mb-4">
            愛媛是一座充滿橘子活力與鯛魚香氣的城市。一路進便能感受到滿滿的鮮甜與熱情。
            市區距離海邊不到十五分鐘的路程，讓人隨時都能搭上路面電車，飽覽壯麗的海岸風光。
          </p>
          <p className="leading-relaxed text-lg">
            當旅途的疲憊漸漸湧現時，不妨前往道後溫泉 —— 傳說中《神隱少女》湯屋的靈感來源，
            在氤氳蒸氣中放鬆身心，彷彿走進奇幻電影世界。
          </p>
        </div>
      </div>
      {itineraryByDay.map((day, idx) => (
        <ItinerarySection key={idx} title={day.day} items={day.items} />
      ))}
    </div>
  );
}