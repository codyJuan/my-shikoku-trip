// src/pages/DayPages/Day4.jsx
import ShikokuMapSmall from "../../components/ShikokuMapSmall";
import ItinerarySection from "../../components/ItinerarySection";
import FoodForDay from "../../components/FoodForDay";
import DayNavigator from "../../components/DayNavigator";

export default function Day4() {
  return (
    <div className="bg-[#fdf6ef] py-12 mt-12 px-4 font-serif">
      <div className="max-w-4xl mx-auto text-center space-y-2 mb-12">
        <p className="text-sm text-[#888]">鳴門大橋・渦之道</p>
        <h1 className="text-4xl font-bold text-[#504339]">Day 4</h1>
        <p className="text-[#777] text-sm">2025.01.08</p>

        <hr className="my-6 border-t border-[#e6e0da] max-w-[160px] mx-auto" />

        <div className="mt-4 flex justify-center">
          <div className="w-full lg:w-[400px] mt-4">
            <ShikokuMapSmall highlightRegions={["徳島県"]} />
          </div>
        </div>
      </div>

      {/* 行程區塊 */}
      <ItinerarySection
        dates={["2025-01-08"]}
      />

      {/* 當天吃了什麼 */}
      <div className="mt-16">
        <FoodForDay dates={["2025-01-08"]} />
      </div>

      {/* 心得筆記 */}
      <div className="mt-10 max-w-3xl mx-auto text-[#504339] text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">📒 Day 4 心得筆記</h2>
        <p>
          今天是期待已久的漩渦之旅！我們前往連接四國與淡路島的鳴門大橋，橋下正是以壯觀漩渦聞名的鳴門海峽。<br />
          <br />
          橋體旁設有「渦之道」，可以從海平面約 45 公尺高的空中步道俯瞰腳下翻騰的海流。一邊讚嘆橋梁工程的巧妙設計，一邊凝視著自然的力量在腳下悄悄流動，那畫面壯觀卻又寧靜。雖然我們去的時候不是大潮時間，沒有緣分看到傳說中的巨大漩渦，但能親眼目睹這片海峽的景象，已經讓人心滿意足。<br />
          <br />
          由於到得太早，離中潮還有一段時間，我們先晃了一圈後，到旁邊的「渦見茶屋」吃飯。這家夫妻小店的鳴門鯛非常新鮮，做成生魚片蓋飯能吃出真鯛的甜度和 Q 彈口感，鯛魚炊飯也香氣十足，兩道都讓人驚艷！<br />
          <br />
          晚上我們又回到德島市區的 AEON MALL 採購補貨。其實昨天就已經大買一波，還因為錯過末班車差點回不了飯店，幸好有熱心的司機幫我們指路，才順利轉乘回到市區。今天還首次嘗試了藍紋起司，結果…真的太衝擊，完全是汽油味！最後是靠麵包和牛奶才勉強吃完，算是一種難忘的新體驗吧（笑）。<br />
          </p>
      </div>
      <div className="mt-16">
        <DayNavigator
          prev="/day3"
          prevLabel="Day 3"
          next="/day5"
          nextLabel="Day 5"
          homeLink="/tokushima"
        />
      </div>
    </div>
  );
}