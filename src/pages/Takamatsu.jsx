import CityIntro from "../components/CityIntro";
import FoodForDay from "../components/FoodForDay";

export default function Takamatsu() {
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

      {/* 當天吃了什麼（來自 foodData） */}
      <FoodForDay date="2025-01-07" />
    </div>
  );
}