"use client";

export function HeroWave() {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        <svg
          viewBox="0 0 1440 400"
          className="w-full max-w-4xl animate-wave"
          style={{ transform: "rotateX(60deg)" }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Grid lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 20}
              x2="1440"
              y2={i * 20}
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 40 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 40}
              y1="0"
              x2={i * 40}
              y2="400"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="1"
            />
          ))}
          
          {/* Main wave */}
          <path
            d="M0,200 C200,280 400,120 600,200 C800,280 1000,120 1200,200 C1300,240 1380,180 1440,200 L1440,400 L0,400 Z"
            fill="url(#waveGradient)"
            filter="url(#glow)"
            opacity="0.6"
          />
          
          {/* Secondary wave */}
          <path
            d="M0,220 C240,300 480,140 720,220 C960,300 1200,140 1440,220"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />
          
          {/* Tertiary wave */}
          <path
            d="M0,180 C180,260 360,100 540,180 C720,260 900,100 1080,180 C1260,260 1350,160 1440,180"
            fill="none"
            stroke="rgba(6, 182, 212, 0.5)"
            strokeWidth="1.5"
          />

          {/* Highlight points */}
          {[200, 600, 1000, 1400].map((x, i) => (
            <circle
              key={i}
              cx={x}
              cy={200 + Math.sin(i * 2) * 40}
              r="4"
              fill="#3b82f6"
              filter="url(#glow)"
            >
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur={`${2 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </div>
      
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/20 blur-3xl rounded-full" />
    </div>
  );
}

