// src/pages/DayPages/Day0.jsx
import ShikokuMapSmall from "../../components/ShikokuMapSmall";
import ItinerarySection from "../../components/ItinerarySection";
import FoodForDay from "../../components/FoodForDay";
import DayNavigator from "../../components/DayNavigator";

export default function Day0() {
  return (
    <div className="bg-[#fdf6ef] py-12 mt-12 px-4 font-serif">
      <div className="max-w-4xl mx-auto text-center space-y-2 mb-12">
        <p className="text-sm text-[#888]">桃園機場・高松機場</p>
        <h1 className="text-4xl font-bold text-[#504339]">Day 0</h1>
        <p className="text-[#777] text-sm">2025.01.04</p>

        <hr className="my-6 border-t border-[#e6e0da] max-w-[160px] mx-auto" />

        <div className="mt-4 flex justify-center">
          <div className="w-full lg:w-[400px] mt-4">
            <ShikokuMapSmall highlightRegions={["香川県"]} />
          </div>
        </div>
      </div>
      
      <ItinerarySection
        dates={["2025-01-04"]}
      />

      <div className="mt-16">
        <FoodForDay dates={["2025-01-04"]} />
      </div>

      <div className="mt-10 max-w-3xl mx-auto text-[#504339] text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">📒 Day 0 心得筆記</h2>
        <p>
          從台灣搭了三小時飛機來到四國。高松機場沒有地鐵接駁，但有依照班機時間運行的接駁巴士，準時又方便，很快就把我們送進市區。<br /><br />

          抵達高松時已經晚上八點多，我們從飯店出發，徒步走了十五分鐘去找超市。沿路上幾乎沒什麼人，街上的店也都早早打烊，才八點多就像走進深夜一樣。天空異常清澈，抬頭就能看到滿天星星，是城市中少見的寧靜與浪漫。<br /><br />

          走進超市後整個人都清醒了。壽司、生魚片、炸物、便當，每樣都看起來超新鮮，草莓又紅又甜，橘子爆汁又香，重點是價格都超便宜，讓人什麼都想拿。<br /><br />

          最後我們提著戰利品回到飯店，在暖呼呼的房間裡吃著超市晚餐，簡單卻超滿足。四國的旅程，就在這樣的夜裡開始了。
        </p>
      </div>
      <div className="mt-16">
        <DayNavigator
          prev="/day7"
          prevLabel="Day 7"
          next="/day1"
          nextLabel="Day 1"
          homeLink="/takamatsu"
        />
      </div>
    </div>
  );
}
