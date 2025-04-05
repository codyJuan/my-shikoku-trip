// src/pages/DayPages/Day1.jsx
import ShikokuMapSmall from "../../components/ShikokuMapSmall";
import ItinerarySection from "../../components/ItinerarySection";
import FoodForDay from "../../components/FoodForDay";
import DayNavigator from "../../components/DayNavigator";

export default function Day1() {
  return (
    <div className="bg-[#fdf6ef] py-12 mt-12 px-4 font-serif">
      <div className="max-w-4xl mx-auto text-center space-y-2 mb-12">
        <p className="text-sm text-[#888]">小豆島・橄欖公園</p>
        <h1 className="text-4xl font-bold text-[#504339]">Day 1</h1>
        <p className="text-[#777] text-sm">2025.01.05</p>

        <hr className="my-6 border-t border-[#e6e0da] max-w-[160px] mx-auto" />

        <div className="mt-4 flex justify-center">
          <div className="w-full lg:w-[400px] mt-4">
            <ShikokuMapSmall highlightRegions={["香川県"]} />
          </div>
        </div>
      </div>
      
      <ItinerarySection
        dates={["2025-01-05"]}
      />

      <div className="mt-16">
        <FoodForDay dates={["2025-01-05"]} />
      </div>

      <div className="mt-10 max-w-3xl mx-auto text-[#504339] text-lg leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">📒 Day 1 心得筆記</h2>
        <p>
        這趟小豆島之旅充滿了意外與驚喜。為了搭上前往小豆島的船，我們特地早起，卻親眼看著船從眼前駛離，下一班還得再等一個小時。沒想到回程時也發生一樣的情況，在島上又多待了一個小時。不過旅行的樂趣，也正是在這些不確定與插曲中展現出來的吧！<br /><br />

        島上有可愛的橄欖公車可搭乘前往各大景點，但務必要先查好時刻表，不然可能會像我們一樣需要等上許久。比較可惜的是，通往寒霞溪纜車的公車剛好停駛了 😢，只好把這段遺憾留待下次補上。<br /><br />

        小豆島的步調很慢、風景很美，是個適合放慢腳步、好好享受的地方。一邊欣賞蔚藍海景，一邊感受島上的寧靜與悠閒，再配上當地特產的橄欖油料理，真的讓人難忘！
        </p>
      </div>
      <div className="mt-16">
        <DayNavigator
          next="/day2"
          nextLabel="Day 2"
          homeLink="/takamatsu"
        />
      </div>
    </div>
  );
}
