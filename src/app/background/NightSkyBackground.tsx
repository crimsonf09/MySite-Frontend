"use client";
const randomWhite = () => {
  const lightness = 50 + Math.random() * 40; // between 90% and 100%
  return `hsl(0, 0%, ${lightness}%)`;
};

export default function NightSkyBackground(){
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
                <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-indigo-400/20 blur-[160px] rounded-full animate-blob" />
                <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] bg-blue-300/10 blur-[120px] rounded-full animate-pulse-slower" />

                {/* 🌟 Floating shimmer particles */}
                {[...Array(150)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`, // clamp to 90% max to avoid overflow
                            animationDuration: `${2 + Math.random() * 4}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            background: randomWhite(),
                        }}
                    />
                ))}
            </div>
    )
}