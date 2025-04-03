import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";

export default function DayNavigator({ prev, prevLabel, next, nextLabel, homeLink }) {
  return (
    <div className="mt-12 font-serif text-[#504339]">
      <div className="grid grid-cols-3 items-center max-w-4xl mx-auto px-4 gap-4">
        {/* 左：上一頁 */}
        <div className="flex justify-start">
          {prev ? (
            <Link
              to={prev}
              className="flex items-center gap-2 px-4 py-2 border border-[#ccc] rounded hover:bg-[#fdf3e6] transition text-sm sm:text-base"
            >
              <ArrowLeft size={18} />
              {prevLabel}
            </Link>
          ) : (
            <div className="w-[120px]" />
          )}
        </div>

        {/* 中：Home */}
        <div className="flex justify-center">
          <Link
            to={`${homeLink}#day-cards`}
            className="flex items-center gap-2 px-4 py-2 border border-[#ccc] rounded hover:bg-[#fdf3e6] transition text-sm sm:text-base"
          >
            <Home size={18} />
            Home
          </Link>
        </div>

        {/* 右：下一頁 */}
        <div className="flex justify-end">
          {next ? (
            <Link
              to={next}
              className="flex items-center gap-2 px-4 py-2 border border-[#ccc] rounded hover:bg-[#fdf3e6] transition text-sm sm:text-base"
            >
              {nextLabel}
              <ArrowRight size={18} />
            </Link>
          ) : (
            <div className="w-[120px]" />
          )}
        </div>
      </div>
    </div>
  );
}