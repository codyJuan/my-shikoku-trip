// src/pages/DayPages/Day3.jsx
import ShikokuMapSmall from "../../components/ShikokuMapSmall";
import ItinerarySection from "../../components/ItinerarySection";
import FoodForDay from "../../components/FoodForDay";
import DayNavigator from "../../components/DayNavigator";

export default function Day3() {
  return (
    <div className="bg-[#fdf6ef] py-12 mt-12 px-4 font-serif">
      <div className="max-w-4xl mx-auto text-center space-y-2 mb-12">
        <p className="text-sm text-[#888]">栗林公園・阿波舞會館</p>
        <h1 className="text-4xl font-bold text-[#504339]">Day 3</h1>
        <p className="text-[#777] text-sm">2025.01.07</p>

        <hr className="my-6 border-t border-[#e6e0da] max-w-[160px] mx-auto" />

        <div className="mt-4 flex justify-center">
          <div className="w-full lg:w-[400px] mt-4">
            <ShikokuMapSmall highlightRegions={["香川県", "徳島県"]} />
          </div>
        </div>
      </div>

      {/* 行程區塊 */}
      <ItinerarySection
        dates={["2025-01-07-1", "2025-01-07-2"]}
      />

      {/* 當天吃了什麼 */}
      <div className="mt-16">
        <FoodForDay dates={["2025-01-07-1", "2025-01-07-2"]} />
      </div>

      {/* 心得筆記 */}
      <div className="mt-10 max-w-3xl mx-auto text-[#504339] text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">📒 Day 3 心得筆記</h2>
        <p>
          這天雖然陰雨綿綿，但氣溫涼爽，是很適合健走的一天。早上我們來到丸龜城，沿著陡坡一路往上，雨天讓石階變得有點濕滑，下坡時尤其驚險，還好入口提供拐杖可以借用。雖然最後沒有進天守閣，但山頂風景遼闊，能俯瞰丸龜市與遠方海景，只可惜照片不小心誤刪了，變成一段只能用回憶保存的美景。<br /><br />

          下午挑戰了傳說中超硬的金刀比羅宮石梯，一路上「以為快到了」的錯覺反覆出現，每轉一個彎就是另一段看不到盡頭的階梯。前半段還能笑著走，後半段幾乎是靠意志力撐上去。雖然累爆，但最上方的神社在薄霧中若隱若現，彷彿進入仙境，讓人瞬間忘卻疲憊，心裡只剩下「值了」這兩個字。
        </p>
      </div>
      <div className="mt-16">
        <DayNavigator
          prev="/day2"
          prevLabel="Day 2"
          next="/day4"
          nextLabel="Day 4"
          homeLink="/takamatsu"
        />
      </div>
    </div>
  );
}