import { ChevronDown } from "lucide-react";

export default function Banner({ title, subtitle, imageUrl }) {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="text-center font-serif">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-lg mt-2">{subtitle}</p>
      </div>

      {/* ⬇️ Scroll 提示按鈕 */}
      <a
        href="#nav-cards"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white opacity-70 hover:opacity-100 transition"
        aria-label="Scroll to navigation"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </a>
    </div>
  );
}