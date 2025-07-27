export default function StatsWidget() {
  const stats = [
    { number: 4, label: "Languages" },
    { number: 6, label: "Tools" },
    { number: 8, label: "Years of Experience" },
  ];

  return (
    <div className="hidden lg:flex flex-col gap-6 bg-[#1a1a1a] p-6 rounded-2xl shadow-md">
      {stats.map(({ number, label }) => (
        <div key={label} className="text-center">
          <div className="text-cyan-400 text-3xl font-bold">{number}</div>
          <div className="text-sm text-gray-300">{label}</div>
        </div>
      ))}
    </div>
  );
}
