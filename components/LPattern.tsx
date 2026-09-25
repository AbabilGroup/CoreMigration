export default function LPattern() {
    const lines = [
        12, 11, 9, 7, 5, 3, 2, 1
    ];

    return (
        <div className="absolute left-10 top-14 md:top-30 flex flex-col gap-6 opacity-70 z-10 pointer-events-none">
            {lines.map((count, lineIndex) => (
                <div key={lineIndex} className="flex gap-4">
                    {Array.from({ length: count }).map((_, i) => {
                        const opacity = Math.max(0.1, 1 - (i * 0.08) - (lineIndex * 0.05));
                        return (
                            <span
                                key={i}
                                className="text-white text-[8px] md:text-xs font-bold"
                                style={{ opacity, textShadow: '0px 0px 4px rgba(0,0,0,0.5)' }}
                            >
                                L
                            </span>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
