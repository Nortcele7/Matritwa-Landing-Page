interface SDGBadgeProps {
  number: number;
  title: string;
  color: string;
}

export default function SDGBadge({ number, title, color }: SDGBadgeProps) {
  return (
    <div className="flex items-center space-x-3 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <div
        className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-2xl"
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-500 uppercase tracking-wide">SDG {number}</p>
        <p className="font-semibold text-gray-800 text-sm">{title}</p>
      </div>
    </div>
  );
}
