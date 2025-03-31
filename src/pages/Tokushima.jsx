import ItinerarySection from "../components/ItinerarySection";
import CityIntro from "../components/CityIntro";

export default function Ehime() {
  const itineraryByDay = [
    {
      day: "Day 6 — 2025/1/9",
      items: [
        {
          title: "梅津寺站看夕陽",
          images: [
            "./images/ehime/ehime-beach.jpeg",
            "./images/ehime/ehime-station.gif",
          ],
          description: "從月台看出去剛好黃昏，很寧靜。推薦一定要來拍照！",
        },
      ],
    },
    {
      day: "Day 7 — 2025/1/10",
      items: [
        {
          title: "道後溫泉本館",
          images: [
            {
              src: "./images/ehime/ehime-onsen1.jpeg",
              position: "bottom"
            },
          ],
          description: "據說是《神隱少女》靈感來源的溫泉，本館旁邊有泡腳池，走累了剛好可以泡泡腳、放鬆一下！",
        },
      ],
    },
  ];
  return (
    <div className="bg-[#fdf6ef] py-12 px-4 font-serif">
      <CityIntro
        title="About Tokushima"
        subtitle="德島縣"
        imageSrc="./images/tokushima/tokushima-bridge.jpeg"
        imageAlt="Naruto Bridge"
        paragraphs={[
          "德島，是一座站在漩渦入口的城市。面向鳴門海峽，靜靜守著瀨戶內海與太平洋的交界。潮流在此奔湧、旋轉、交織出時而澎湃、時而平靜的風景。壯觀的漩渦並非日日可見，卻也因這份不可預期，更添想像與期待。",
          "每年夏日，阿波舞便喚醒城市的心跳。鼓聲與步伐讓街道騷動，平時靜謐的德島，也有屬於自己的熱情與節奏。",
        ]}
      />
      
      {itineraryByDay.map((day, idx) => (
        <ItinerarySection key={idx} title={day.day} items={day.items} />
      ))}
    </div>
  );
}