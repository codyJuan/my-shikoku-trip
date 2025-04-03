// src/pages/DayPages/Day2.jsx
import ShikokuMapSmall from "../../components/ShikokuMapSmall";
import ItinerarySection from "../../components/ItinerarySection";
import FoodForDay from "../../components/FoodForDay";
import DayNavigator from "../../components/DayNavigator";

const itineraryByDay = [
  {
    day: "上午：栗林公園",
    items: [
      {
        title: "日式庭園散策",
        description: "在日本名園中感受寧靜與松風。",
        images: ["/images/day2/ritsuringarden.jpg"],
      },
    ],
  },
  {
    day: "下午：高松港與藝術探索",
    items: [
      {
        title: "紅燈塔、藝術作品",
        description: "欣賞瀨戶內海邊的當代藝術與悠閒港景。",
        images: ["/images/day2/takamatsu-art.jpg"],
      },
    ],
  },
];

export default function Day2() {
  return (
    <div className="bg-[#fdf6ef] py-12 mt-12 px-4 font-serif">
      {/* 上方區塊：標題與地圖置中排版 */}
      <div className="max-w-4xl mx-auto text-center space-y-2 mb-12">
        <p className="text-sm text-[#888]">栗林公園・高松港</p>
        <h1 className="text-4xl font-bold text-[#504339]">Day 2</h1>
        <p className="text-[#777] text-sm">2025.01.08</p>

        <hr className="my-6 border-t border-[#e6e0da] max-w-[160px] mx-auto" />

        <div className="mt-4 flex justify-center">
          <div className="w-full lg:w-[400px] mt-4">
            <ShikokuMapSmall highlightRegions={["香川県"]} />
          </div>
        </div>
      </div>

      {/* 行程區塊 */}
      {itineraryByDay.map((day, idx) => (
        <ItinerarySection key={idx} title={day.day} items={day.items} />
      ))}

      {/* 當天吃了什麼 */}
      <div className="mt-16">
        <FoodForDay date="2025-01-08" />
      </div>

      {/* 心得筆記 */}
      <div className="mt-20 max-w-3xl mx-auto text-[#504339] text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">📒 Day 2 心得筆記</h2>
        <p>
          高松是一座充滿文化與寧靜的城市。栗林公園的美讓人屏息，高松港則展現瀨戶內海的魅力，是最能感受四國藝術氣息的一天。
        </p>
      </div>
      <div className="mt-16">
        <DayNavigator
          prev="/day1"
          prevLabel="Day 1"
          next="/day3"
          nextLabel="Day 3"
          homeLink="/takamatsu"
        />
      </div>
    </div>
  );
}