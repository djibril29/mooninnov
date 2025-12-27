import Link from "next/link";

interface LogoProps {
  variant?: "default" | "full";
  theme?: "dark" | "light";
  className?: string;
  showLink?: boolean;
}

export function Logo({ 
  variant = "default", 
  theme = "dark",
  className = "",
  showLink = true 
}: LogoProps) {
  const bgColor = theme === "dark" ? "#0a0f1a" : "#ffffff";
  const textColor = theme === "dark" ? "#ffffff" : "#1a1a2e";
  const mutedColor = theme === "dark" ? "#9CA3AF" : "#6B7280";
  
  const logoContent = (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Moon Icon */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <circle cx="20" cy="20" r="18" fill="#E86B47"/>
        <circle cx="28" cy="13" r="13" fill={bgColor}/>
      </svg>
      
      {/* Text */}
      <div className="flex flex-col">
        <span 
          className="text-lg font-semibold leading-tight tracking-tight"
          style={{ color: textColor }}
        >
          <span style={{ color: textColor }}>M</span>
          <span style={{ color: mutedColor }}>OON</span>
          <span style={{ color: textColor }}>.INNOV</span>
        </span>
        
        {variant === "full" && (
          <span 
            className="text-[8px] tracking-[0.15em] uppercase"
            style={{ color: mutedColor }}
          >
            Création de solutions digitales
          </span>
        )}
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link href="/" className="group hover:opacity-90 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

// Standalone Moon Icon component
export function MoonIcon({ 
  size = 32, 
  bgColor = "#0a0f1a",
  className = "" 
}: { 
  size?: number; 
  bgColor?: string;
  className?: string;
}) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="18" fill="#E86B47"/>
      <circle cx="28" cy="13" r="13" fill={bgColor}/>
    </svg>
  );
}

