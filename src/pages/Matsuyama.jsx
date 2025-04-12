import CityIntro from "../components/CityIntro";
import DayCard from "../components/DayCard";
import ItinerarySection from "../components/ItinerarySection";
import FoodForDay from "../components/FoodForDay";
import HotelCard from "../components/HotelCard";

export default function matsuyama() {
  const days = [
    { day: "Day5", image: "./images/day5-2-nav.jpeg", link: "/day5" },
    { day: "Day6", image: "./images/day6-nav.jpeg", link: "/day6" },
    { day: "Day7", image: "./images/day7-nav.jpeg", link: "/day7" },
  ];
  
  return (
    <div className="bg-[#fdf6ef] py-12 px-4 font-serif">
      <div className="max-w-6xl mx-auto pt-5 grid grid-cols-1 md:grid-cols-12 gap-10 md:items-end">
        <div className="md:col-span-5">
          <img
            src="./images/matsuyama/matsuyama-Home.jpeg"
            alt="matsuyama lift view"
            className="rounded-lg shadow-md w-full h-full max-h-[500px] object-cover object-center"
          />
        </div>

        <div className="md:col-span-7 text-[#504339]">
          <h3 className="text-xl mb-2">愛媛縣 松山市</h3>
          <h2 className="text-4xl font-bold tracking-wide mb-6">About Matsuyama</h2>
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

      <HotelCard
        name="Smile Hotel - Matsuyama"
        link="https://maps.app.goo.gl/pdWFgmNLeSp8ZjPi9"
      />

      <div
        id="day-cards" 
        className="max-w-5xl mx-auto pt-10 mt-12 px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 font-serif"
      >
        {days.map((item) => (
          <DayCard key={item.day} image={item.image} day={item.day} link={item.link} />
        ))}
      </div>

      <div className="mt-16">
      <ItinerarySection
        title="🏯 松山景點紀錄"
        dates={["2025-01-09-2", "2025-01-10"] }
      />
    </div>

    <div className="mt-16">
      <FoodForDay dates={["2025-01-09-2", "2025-01-10", "2025-01-11-1"]} title="🍴 松山美食紀錄"/>
    </div>
    </div>
  );
}