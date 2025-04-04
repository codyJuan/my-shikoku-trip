// src/pages/DayPages/Day2.jsx
import ShikokuMapSmall from "../../components/ShikokuMapSmall";
import ItinerarySection from "../../components/ItinerarySection";
import FoodForDay from "../../components/FoodForDay";
import DayNavigator from "../../components/DayNavigator";

const itineraryByDay = [
  {
    items: [
      {
        title: "丸龜城",
        description: "沿著陡坡爬上壯觀石垣，在至高處眺望瀨戶內風光。",
        images: [
          {
            src: "./images/takamatsu/takamatsu-castle-1.jpeg",
            position: 50
          },
          {
            src: "./images/takamatsu/takamatsu-castle-2.jpeg",
            position: 70
          },
          {
            src: "./images/takamatsu/takamatsu-castle-3.jpeg",
            position: 45
          },
        ],
      },
      {
        title: "金刀比羅宮",
        description: "在霧雨中挑戰785階石梯，神社籠罩薄霧，更添神秘與莊嚴氣息。",
        images: [
          {
            src: "./images/takamatsu/takamatsu-temple-1.jpeg",
            position: 50
          },
          {
            src: "./images/takamatsu/takamatsu-temple-2.jpeg",
            position: 40
          },
          {
            src: "./images/takamatsu/takamatsu-temple-3.jpeg",
            position: 50
          },
          {
            src: "./images/takamatsu/takamatsu-temple-4.jpeg",
            position: 60
          },
        ],
      },
    ],
  },

];

export default function Day2() {
  return (
    <div className="bg-[#fdf6ef] py-12 mt-12 px-4 font-serif">
      {/* 上方區塊：標題與地圖置中排版 */}
      <div className="max-w-4xl mx-auto text-center space-y-2 mb-12">
        <p className="text-sm text-[#888]">丸龜城・金刀比羅宮</p>
        <h1 className="text-4xl font-bold text-[#504339]">Day 2</h1>
        <p className="text-[#777] text-sm">2025.01.06</p>

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
        <FoodForDay date="2025-01-06" />
      </div>

      {/* 心得筆記 */}
      <div className="mt-20 max-w-3xl mx-auto text-[#504339] text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">📒 Day 2 心得筆記</h2>
        <p>
          這天雖然陰雨綿綿，但氣溫涼爽，是很適合健走的一天。早上我們來到丸龜城，沿著陡坡一路往上，雨天讓石階變得有點濕滑，下坡時尤其驚險，還好入口提供拐杖可以借用。雖然最後沒有進天守閣，但山頂風景遼闊，能俯瞰丸龜市與遠方海景，只可惜照片不小心誤刪了，變成一段只能用回憶保存的美景。<br /><br />

          下午挑戰了傳說中超硬的金刀比羅宮石梯，一路上「以為快到了」的錯覺反覆出現，每轉一個彎就是另一段看不到盡頭的階梯。前半段還能笑著走，後半段幾乎是靠意志力撐上去。雖然累爆，但最上方的神社在薄霧中若隱若現，彷彿進入仙境，讓人瞬間忘卻疲憊，心裡只剩下「值了」這兩個字。
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