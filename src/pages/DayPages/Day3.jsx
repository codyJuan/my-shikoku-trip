// src/pages/DayPages/Day3.jsx
import ShikokuMapSmall from "../../components/ShikokuMapSmall";
import ItinerarySection from "../../components/ItinerarySection";
import FoodForDay from "../../components/FoodForDay";
import DayNavigator from "../../components/DayNavigator";

const itineraryByDay = [
  {
    day: "上午：道後溫泉街",
    items: [
      {
        title: "道後溫泉本館",
        description: "探訪日本最古老的溫泉，感受傳統浴場文化。",
        images: ["/images/day4/dogo-onsen.jpg"],
      },
    ],
  },
  {
    day: "下午：松山城",
    items: [
      {
        title: "天守閣巡禮",
        description: "登上松山城，俯瞰整座城市與周圍山景。",
        images: ["/images/day4/matsuyama-castle.jpg"],
      },
    ],
  },
];

export default function Day3() {
  return (
    <div className="bg-[#fdf6ef] py-12 mt-12 px-4 font-serif">
      {/* 上方區塊：標題與地圖置中排版 */}
      <div className="max-w-4xl mx-auto text-center space-y-2 mb-12">
        <p className="text-sm text-[#888]">道後・松山城</p>
        <h1 className="text-4xl font-bold text-[#504339]">Day 3</h1>
        <p className="text-[#777] text-sm">2025.01.9</p>

        <hr className="my-6 border-t border-[#e6e0da] max-w-[160px] mx-auto" />

        <div className="mt-4 flex justify-center">
          <div className="w-full lg:w-[400px] mt-4">
            <ShikokuMapSmall highlightRegions={["香川県", "徳島県"]} />
          </div>
        </div>
      </div>

      {/* 行程區塊 */}
      {itineraryByDay.map((day, idx) => (
        <ItinerarySection key={idx} title={day.day} items={day.items} />
      ))}

      {/* 當天吃了什麼 */}
      <div className="mt-16">
        <FoodForDay date="2025-01-09" />
      </div>

      {/* 心得筆記 */}
      <div className="mt-20 max-w-3xl mx-auto text-[#504339] text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">📒 Day 3 心得筆記</h2>
        <p>
          松山的溫泉與城堡都充滿歷史韻味，從文化到自然景觀都令人印象深刻，是個完美的旅程收尾。
        </p>
      </div>
      <div className="mt-16">
        <DayNavigator
          prev="/day2"
          prevLabel="Day 2"
          next="/tokushima"
          nextLabel="Day 4"
          homeLink="/takamatsu"
        />
      </div>
    </div>
  );
}
