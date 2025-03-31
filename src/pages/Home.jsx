import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const navCards = [
  {
    name: "Takamatsu",
    image: "/images/nav-takamatsu.jpeg",
    link: "/takamatsu",
  },
  {
    name: "Tokushima",
    image: "/images/nav-tokushima.jpeg",
    link: "/tokushima",
  },
  {
    name: "Ehime",
    image: "/images/nav-ehime.jpeg",
    link: "/ehime",
  },
];

export default function Home() {
  return (
    <div>
      <Banner
        title="SHIKOKU"
        subtitle="沒有驚喜萬分，卻讓人難以忘懷。"
        imageUrl="/images/home-banner.jpeg"
      />

      <div className="max-w-5xl mx-auto px-4 mt-6 space-y-4 text-gray-700 text-center font-serif">
        <p>本網站記錄了我在日本四國地區旅行的體驗，包括高松、德島、愛媛等地的景點、美食與人文風景。</p>
        <p>請透過導覽列，探索每個城市的故事，並感受我在旅途中捕捉的瞬間。</p>
      </div>

      <div 
        id="nav-cards"
        className="max-w-5xl mx-auto mt-12 px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 font-serif"
      >
        {navCards.map((card, idx) => (
          <Link
            to={card.link}
            key={idx}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-[#504339cc] text-white text-lg px-4 py-2 rounded shadow">
                {card.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}