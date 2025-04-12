// src/pages/DayPages/Day6.jsx
import ShikokuMapSmall from "../../components/ShikokuMapSmall";
import ItinerarySection from "../../components/ItinerarySection";
import FoodForDay from "../../components/FoodForDay";
import DayNavigator from "../../components/DayNavigator";

export default function Day6() {
  return (
    <div className="bg-[#fdf6ef] py-12 mt-12 px-4 font-serif">
      <div className="max-w-4xl mx-auto text-center space-y-2 mb-12">
        <p className="text-sm text-[#888]">松山城・道後溫泉</p>
        <h1 className="text-4xl font-bold text-[#504339]">Day 6</h1>
        <p className="text-[#777] text-sm">2025.01.10</p>

        <hr className="my-6 border-t border-[#e6e0da] max-w-[160px] mx-auto" />

        <div className="mt-4 flex justify-center">
          <div className="w-full lg:w-[400px] mt-4">
            <ShikokuMapSmall highlightRegions={["愛媛県"]} />
          </div>
        </div>
      </div>

      {/* 行程區塊 */}
      <ItinerarySection
        dates={["2025-01-10"]}
      />

      {/* 當天吃了什麼 */}
      <div className="mt-16">
        <FoodForDay dates={["2025-01-10"]} />
      </div>

      {/* 心得筆記 */}
      <div className="mt-10 max-w-3xl mx-auto text-[#504339] text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">📒 Day 6 心得筆記</h2>
        <p>
        今天是松山市區一日遊！早上先參觀松山城，我們選擇搭乘新奇的吊椅上山，主城天守閣內有許多實體展示，重現過去士兵如何攻防作戰。登上天守閣俯瞰整個松山市，視野遼闊，風景非常漂亮，非常值得買票進入。<br /><br />
        下午搭松山電車前往據說是《神隱少女》靈感來源的道後溫泉。由於溫泉需分開泡，我們選擇在本館旁的足湯步道稍作休息。當天氣溫接近零度，前幾天又走了很多路，雙腳泡進溫熱的溫泉水後，疲憊感瞬間消散，就算上半身吹著冷風也不覺得冷。當時幾乎沒有其他遊客，我們靜靜地泡了足湯一個多小時，才前往熱鬧的道後溫泉商店街。
        商店街中各式紀念品與特產店林立，我們在那吃到超好吃的現烤醬油仙貝，還特地買了一包帶回台灣。<br /><br />
        晚上則是大街道商店街的瘋狂購物行程！先在「秋嘉」享用鼎鼎大名的松山鯛魚飯——炊飯吸滿鯛魚香氣，濃郁又細緻；生魚片蓋飯則滑嫩 Q 彈，讓人欲罷不能。額外加點的炸魚排與涼拌魚皮也非常出色，清爽與酥香交織，每道都令人滿意。吃飽後，我們整晚都在唐吉訶德和藥妝店大肆採買，滿載而歸！
        </p>
      </div>
      <div className="mt-16">
        <DayNavigator
          prev="/day5"
          prevLabel="Day 5"
          next="/day7"
          nextLabel="Day 7"
          homeLink="/matsuyama"
        />
      </div>
    </div>
  );
}