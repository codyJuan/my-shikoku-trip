// ✅ 修改後的 Day1.jsx
import ShikokuMapSmall from "../../components/ShikokuMapSmall";
import ItinerarySection from "../../components/ItinerarySection";
import FoodForDay from "../../components/FoodForDay";
import DayNavigator from "../../components/DayNavigator";

const itineraryByDay = [
  {
    // day: "上午：小豆島橄欖公園",
    items: [
      {
        title: "小豆島橄欖公園",
        description: "沿著橄欖樹林漫步，感受地中海風情。",
        images: [
          {
            src: "./images/takamatsu/takamatsu-olive-park.jpeg",
            position: "bottom"
          },
          {
            src: "./images/takamatsu/takamatsu-olive-broom.jpeg",
            position: "bottom"
          },
          {
            src: "./images/takamatsu/takamatsu-olive-witch.jpeg",
            position: 45
          },
        ],
      },
      {
        title: "醬油之鄉",
        description: "擁有百年歷史的釀造工廠，空氣中飄著濃濃醬香，感受小豆島的職人文化。",
        images: [
          {
            src: "./images/takamatsu/takamatsu-olive-soy-1.jpeg",
            position: 50
          },
          {
            src: "./images/takamatsu/takamatsu-olive-soy-2.jpeg",
            position: 40
          },
          {
            src: "./images/takamatsu/takamatsu-olive-soy-3.jpeg",
            position: 30
          },
        ],
      },
      {
        title: "草壁港",
        description: "跟可愛的小豆島橄欖公車合照 🚌🫒📸",
        images: [
          {
            src: "./images/takamatsu/takamatsu-port-1.jpeg",
            position: 40
          },
          {
            src: "./images/takamatsu/takamatsu-port-2.jpeg",
            position: 40
          },
          {
            src: "./images/takamatsu/takamatsu-port-3.jpeg",
            position: 30
          },
        ],
      },
    ],
  },
];

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

      {itineraryByDay.map((day, idx) => (
        <ItinerarySection key={idx} title={day.day} items={day.items} />
      ))}

      <div className="mt-16">
        <FoodForDay date="2025-01-05" />
      </div>

      <div className="mt-20 max-w-3xl mx-auto text-[#504339] text-lg leading-relaxed">
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
