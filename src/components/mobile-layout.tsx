"use client";

import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
  hideBottomNav?: boolean;
}

export function MobileLayout({ children, hideBottomNav = false }: MobileLayoutProps) {
  return (
    <div className={hideBottomNav ? "" : "pb-20 md:pb-0"}>
      {children}
    </div>
  );
}

export function PageWrapper({ children }: { children: ReactNode }) {
  return <div className="pb-20 md:pb-0">{children}</div>;
}