"use client";

import { useEffect } from "react";

export function ScrollAnimateObserver() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    if (!animatedElements.length) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      animatedElements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      animatedElements.forEach((el) => el.classList.add("visible"));
    }
  }, []);

  return null;
}
