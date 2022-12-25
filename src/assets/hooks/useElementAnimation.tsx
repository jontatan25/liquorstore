import React, {useState, useEffect } from "react";

export const useElementAnimation = (
  elemRef: React.RefObject<HTMLImageElement>,
  threshold: number
) => {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  useEffect(() => {
    const options = {
      threshold: threshold,
    };
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      const currentitemPosition = elemRef.current!.getBoundingClientRect();
      if (entry.isIntersecting) {
        setElementIsVisible(true);
      } else if (!entry.isIntersecting) {
        // Checking if viewport is above or below element
        if (currentitemPosition.y > 0) {
          setElementIsVisible(false);
        }
      }
    }, options);
    observer.observe(elemRef.current!);
  }, [elementIsVisible]);

  return [elementIsVisible] as const;
};
