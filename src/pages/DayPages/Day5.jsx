// src/pages/DayPages/Day5.jsx
import ShikokuMapSmall from "../../components/ShikokuMapSmall";
import ItinerarySection from "../../components/ItinerarySection";
import FoodForDay from "../../components/FoodForDay";
import DayNavigator from "../../components/DayNavigator";

export default function Day5() {
  return (
    <div className="bg-[#fdf6ef] py-12 mt-12 px-4 font-serif">
      <div className="max-w-4xl mx-auto text-center space-y-2 mb-12">
        <p className="text-sm text-[#888]">梅津寺・高島屋摩天輪</p>
        <h1 className="text-4xl font-bold text-[#504339]">Day 5</h1>
        <p className="text-[#777] text-sm">2025.01.09</p>

        <hr className="my-6 border-t border-[#e6e0da] max-w-[160px] mx-auto" />

        <div className="mt-4 flex justify-center">
          <div className="w-full lg:w-[400px] mt-4">
            <ShikokuMapSmall highlightRegions={["愛媛県"]} />
          </div>
        </div>
      </div>

      {/* 行程區塊 */}
      <ItinerarySection
        dates={["2025-01-09-1", "2025-01-09-2"]}
      />

      {/* 當天吃了什麼 */}
      <div className="mt-16">
        <FoodForDay dates={["2025-01-09-1", "2025-01-09-2"]} />
      </div>

      {/* 心得筆記 */}
      <div className="mt-10 max-w-3xl mx-auto text-[#504339] text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">📒 Day 5 心得筆記</h2>
        <p>
        今天從德島移動到松山！一大早在德島車站吃了暖呼呼的烏龍麵當早餐後，搭了四小時的火車一路來到松山。到達時正好趕上夕陽，我們馬上衝去傳說中的梅津寺車站看日落。月台旁邊就是海灘，乾淨的海水配上夕陽，美到無話可說。車站旁還有橘子主題的紀念品店，我們買了橘子鹽和七味粉（超好吃）。<br />
        <br />
        晚上去了高島屋頂樓搭摩天輪，15 分鐘內就能將整個松山市的夜景盡收眼底。萬家燈火與遠方山景交織，氣氛寧靜又浪漫，而且外國遊客還享有半價優惠，這樣的體驗真的太值得了！<br />
        <br />
        松山不愧是靠海的城市，在超市就能買到超新鮮的真鯛生魚片，油脂豐富、鮮甜無腥，重點價格還超便宜，應該多買幾盒才對！
        我們還順手買了三種橘子來盲測，每種風味都不同，果粒香甜又多汁，一個晚上就把三袋吃光光了，愛媛的橘子真的太強！
        </p>
      </div>
      <div className="mt-16">
        <DayNavigator
          prev="/day4"
          prevLabel="Day 4"
          next="/day6"
          nextLabel="Day 6"
          homeLink="/tokushima"
        />
      </div>
    </div>
  );
}