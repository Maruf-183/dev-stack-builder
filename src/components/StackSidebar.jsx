function StackSidebar({ stack, onRemove, onRemoveAll }) {
  const isEmpty = stack.length === 0;

  return (
    <aside className="bg-white border border-gray-200 rounded-2xl p-5 h-fit sticky top-24">
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
      <p className="text-sm text-gray-400 mt-1">{isEmpty ? "No technologies selected yet." : `${stack.length} Technology Selected`}</p>
      {isEmpty ? (
        <div className="mt-4 border border-dashed border-gray-200 rounded-xl py-10 text-center text-sm text-gray-400">Your stack is empty.</div>
      ) : (
        <>
          <div className="mt-4 flex flex-col gap-3">
            {stack.map((tech) => (
              <div key={tech.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
                  <div><p className="text-sm font-semibold text-gray-900">{tech.name}</p><p className="text-xs text-gray-400">{tech.category}</p></div>
                </div>
                <button onClick={() => onRemove(tech.id)} className="text-gray-300 hover:text-red-500 font-bold px-1" aria-label={`Remove ${tech.name}`}>✕</button>
              </div>
            ))}
          </div>
          <button onClick={onRemoveAll} className="mt-5 w-full py-2.5 rounded-full text-sm font-semibold border border-red-200 text-red-500 hover:bg-red-50 transition">Remove All</button>
        </>
      )}
    </aside>
  );
}

export default StackSidebar;
