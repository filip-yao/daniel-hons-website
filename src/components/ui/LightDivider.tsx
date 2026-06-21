interface LightDividerProps {
  className?: string;
}

export function LightDivider({ className = "" }: LightDividerProps) {
  return (
    <div className={`site-container ${className}`} aria-hidden="true">
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(229,231,235,0.95),transparent)]" />
    </div>
  );
}
