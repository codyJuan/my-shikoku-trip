// src/components/DayCard.jsx
import { Link } from "react-router-dom";

export default function DayCard({ image, day, link }) {
  return (
    <Link
      to={link}
      className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
    >
      <img
        src={image}
        alt={day}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 brightness-[0.9]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-[#504339cc] text-white text-lg px-4 py-2 rounded shadow font-serif">
          {day}
        </span>
      </div>
    </Link>
  );
}