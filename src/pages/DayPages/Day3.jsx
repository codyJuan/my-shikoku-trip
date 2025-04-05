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
          今天從高松移動到德島！早上先造訪了壯麗的栗林公園，拿著地圖在園區中穿梭，像是在玩一場有趣的大地遊戲。<br />
          <br />
          下午抵達德島後，前往阿波舞會館，深入了解這項傳統舞蹈的歷史與精神。除了欣賞表演，還能親自體驗阿波舞的節奏與步伐，搭配特有的眼湊樂器與節拍口號，讓人真切感受到傳承的力量。<br />
          <br />
          會館頂樓就是通往眉山纜車的搭乘處，雖然冬季夜間不營運，但白天的山景依然迷人。我們在山頂吹著涼風、曬著太陽時，天空竟然開始飄雪！<br />
          原本就已經很美的山景，搭配雪花緩緩落下的畫面，美得讓人屏息。那一刻彷彿一切剛剛好，就像命運總會以另一種方式，悄悄送來驚喜。我們真的很幸運。
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