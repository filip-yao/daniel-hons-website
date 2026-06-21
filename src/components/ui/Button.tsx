import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark border border-primary/80 shadow-sm",
  secondary:
    "border border-stone-300 text-[#1a1a1a] hover:bg-stone-100 bg-white",
  dark: "bg-white text-[#1a1a1a] border border-stone-300 hover:bg-stone-50",
  ghost:
    "text-primary underline-offset-4 hover:underline bg-transparent border border-transparent px-0",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg sharp-button ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
