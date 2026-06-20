"use client";

import { MotionConfig } from "framer-motion";

interface ClientProvidersProps {
  children: React.ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
