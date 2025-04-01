// src/pages/Home.jsx
import Banner from "../components/Banner";
import ShikokuMap from "../components/ShikokuMap";

export default function Home() {
  return (
    <div>
      <Banner
        title="SHIKOKU"
        subtitle="沒有驚喜萬分，卻讓人難以忘懷。"
        imageUrl="./images/home-banner.jpeg"
      />
      
      <div className="max-w-5xl mx-auto px-4 mt-6 space-y-4 text-gray-700 text-center font-serif">
        <p>本網站記錄了我在日本四國地區旅行的體驗，包括高松、德島、愛媛等地的景點、美食與人文風景。</p>
        <p>請透過下方地圖探索各城市的故事，並感受我在旅途中捕捉的瞬間。</p>
      </div>

      <div id="shikoku-map">
        <ShikokuMap />
      </div>
    </div>
  );
}