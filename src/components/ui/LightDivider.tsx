interface LightDividerProps {
  className?: string;
}

export function LightDivider({ className = "" }: LightDividerProps) {
  return (
    <div className={`site-container ${className}`} aria-hidden="true">
      <div className="h-px w-full bg-light-divider opacity-90" />
    </div>
  );
}
