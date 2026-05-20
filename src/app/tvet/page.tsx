"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TVETRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/initiatives/tvet");
  }, [router]);

  return (
    <div className="min-h-screen bg-institutional-navy flex items-center justify-center">
      <div className="text-warm-white">Redirecting to TVET Initiative...</div>
    </div>
  );
}