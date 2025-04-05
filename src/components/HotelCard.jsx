export default function HotelCard({ name, link }) {
    if (!name || !link) return null;
  
    return (
      <div className="max-w-6xl mx-auto mt-4">
        <div className="md:ml-0 md:max-w-[40%] bg-[#fdf6ef] border border-[#e6e0da] rounded-xl px-5 py-4 shadow-sm font-serif flex items-center gap-4">
          <span className="text-2xl">🏨</span>
          <div>
            <p className="text-sm text-[#999] mb-1">住宿地點</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#504339] hover:text-[#e76f51] font-semibold transition"
            >
              {name}
            </a>
          </div>
        </div>
      </div>
    );
  }