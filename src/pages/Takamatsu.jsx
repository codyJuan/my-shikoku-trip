import CityIntro from "../components/CityIntro";
import DayCard from "../components/DayCard";

export default function Takamatsu() {
  const days = [
    { day: "Day1", image: "./images/day1-nav.jpeg", link: "/day1" },
    { day: "Day2", image: "./images/day2-nav.jpeg", link: "/day2" },
    { day: "Day3", image: "./images/day3-1-nav.jpeg", link: "/day3" },
  ];

  return (
    <div className="bg-[#fdf6ef] py-12 px-4 font-serif">
      {/* 城市介紹區塊 */}
      <CityIntro
        title="About Takamatsu"
        subtitle="香川縣 高松市"
        imageSrc="./images/takamatsu/takamatsu-ferry.jpeg"
        imageAlt="Takamatsu ferry"
        paragraphs={[
          "高松，是一座被烏龍麵香氣輕輕包圍的城市。無論是清晨的熱湯烏龍、午後的冷麵，或是回國前匆忙吃下的最後一碗沾麵，每一口都像是在嚐四國的日常。",
          "鄰近的小豆島則以橄欖聞名，在陽光與海風中散發著地中海的氣息。橄欖、醬油，與島上的溫柔步調，讓人一不小心就想停留久一點。",
        ]}
      />

      {/* 行程卡片區塊 */}
      <div
        id="day-cards" 
        className="max-w-5xl mx-auto pt-10 mt-12 px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 font-serif"
      >
        {days.map((item) => (
          <DayCard key={item.day} image={item.image} day={item.day} link={item.link} />
        ))}
      </div>
    </div>
  );
}