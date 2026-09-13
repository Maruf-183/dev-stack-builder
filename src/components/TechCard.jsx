const categoryStyles = {
  Frontend: "bg-sky-50 text-sky-600",
  Backend: "bg-emerald-50 text-emerald-600",
  Database: "bg-blue-50 text-blue-600",
  Language: "bg-amber-50 text-amber-600",
  Styling: "bg-cyan-50 text-cyan-600",
  DevOps: "bg-indigo-50 text-indigo-600",
  Tools: "bg-gray-100 text-gray-600",
};

const badgeStyles = {
  Popular: "bg-sky-50 text-sky-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  Standard: "bg-violet-50 text-violet-600",
  Async: "bg-lime-50 text-lime-600",
  "Top SQL": "bg-blue-50 text-blue-600",
  Cache: "bg-rose-50 text-rose-600",
  Ubiquitous: "bg-yellow-50 text-yellow-700",
  Essential: "bg-indigo-50 text-indigo-600",
  Robust: "bg-red-50 text-red-600",
  Modern: "bg-teal-50 text-teal-600",
  Containers: "bg-cyan-50 text-cyan-600",
};

function TechCard({ tech, isAdded, onAdd }) {
  const categoryClass = categoryStyles[tech.category] || "bg-gray-100 text-gray-600";
  const badgeClass = badgeStyles[tech.badge] || "bg-gray-100 text-gray-600";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-9 w-9 object-contain" />
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeClass}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-gray-900">{tech.name}</h3>
      <p className="mt-1 text-sm text-gray-500 flex-1">{tech.description}</p>

      <div className="mt-4 flex items-center gap-2 flex-wrap text-xs font-medium">
      <span className={`px-2.5 py-1 rounded-full ${categoryClass}`}>{tech.category}</span>
      <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">{tech.difficulty}</span>
      <span className="ml-auto text-gray-700 flex items-center gap-1">
        <span className="text-amber-500">★</span> {tech.rating}
      </span>
    </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full py-2.5 rounded-full text-sm font-semibold transition ${
          isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechCard;