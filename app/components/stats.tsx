interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            {stat.value}
          </div>
          <div className="text-foreground-muted text-sm uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
