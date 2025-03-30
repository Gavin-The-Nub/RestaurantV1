"use client";

import { useState, useEffect } from "react";

export const useMobile = (width = 768) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < width : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevents errors in SSR

    const handleResize = () => {
      setIsMobile(window.innerWidth < width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isMobile;
};
