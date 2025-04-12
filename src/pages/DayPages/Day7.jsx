// src/pages/DayPages/Day7.jsx
import ShikokuMapSmall from "../../components/ShikokuMapSmall";
import ItinerarySection from "../../components/ItinerarySection";
import FoodForDay from "../../components/FoodForDay";
import DayNavigator from "../../components/DayNavigator";

export default function Day7() {
  return (
    <div className="bg-[#fdf6ef] py-12 mt-12 px-4 font-serif">
      <div className="max-w-4xl mx-auto text-center space-y-2 mb-12">
        <p className="text-sm text-[#888]">高松機場</p>
        <h1 className="text-4xl font-bold text-[#504339]">Day 7</h1>
        <p className="text-[#777] text-sm">2025.01.11</p>

        <hr className="my-6 border-t border-[#e6e0da] max-w-[160px] mx-auto" />

        <div className="mt-4 flex justify-center">
          <div className="w-full lg:w-[400px] mt-4">
            <ShikokuMapSmall highlightRegions={["愛媛県", "香川県"]} />
          </div>
        </div>
      </div>

      {/* 行程區塊 */}
      <ItinerarySection
        dates={["2025-01-11-1", "2025-01-11-2"]}
      />

      {/* 當天吃了什麼 */}
      <div className="mt-16">
        <FoodForDay dates={["2025-01-11-1", "2025-01-11-2"]} />
      </div>

      {/* 心得筆記 */}
      <div className="mt-10 max-w-3xl mx-auto text-[#504339] text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">📒 Day 7 心得筆記</h2>
        <p>
          最後一天從松山搭火車回高松搭飛機。早上先在松山市區吃了這趟旅行的最後一碗拉麵，是二郎系風格，鋪滿了現炒豆芽，份量超足，吃得很滿足！<br /><br />

          吃完就到松山車站搭車離開愛媛。本來以為列車直達高松，沒想到這班特急列車和另一班往岡山的列車併車，我們一開始還坐錯了車廂，直到發現目的地不對才趕快換位子，幸好最後有順利找到前往高松的那節車廂，真的驚險！<br /><br />

          一路上邊吃橘子邊看著窗外海景，時間過得飛快，不知不覺又回到這趟旅程的起點——高松站。我們抓緊時間衝去無印良品掃貨，帶了一整袋棉花糖和海苔仙貝。<br /><br />

          回到高松機場後，距離登機還有一些時間，就決定吃最後一碗烏龍麵當作結尾。本來沒抱太大期待，沒想到超級驚艷！簡單的蔥花和醬油醬汁，就讓人一口接一口，加點的炸魚外酥內嫩，連骨頭都能一起吃，滿滿的魚鮮味，真的是完美收尾。<br /><br />

          八天七夜的旅程就在這碗烏龍麵中畫下句點。四國給人的感覺不是那種驚喜連連，但卻有著讓人放鬆、難以忘懷的魔力。沒有大城市的喧鬧，卻有著讓人想再回來一次的平靜與溫柔。
        </p>
      </div>
      <div className="mt-16">
        <DayNavigator
          prev="/day6"
          prevLabel="Day 6"
          next="/day0"
          nextLabel="Day 0"
          homeLink="/matsuyama"
        />
      </div>
    </div>
  );
}