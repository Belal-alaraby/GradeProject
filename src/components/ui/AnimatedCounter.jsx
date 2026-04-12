import React, { useState, useEffect, useRef } from 'react';

// A custom animated counter component showcasing JS logic and hooks
export const AnimatedCounter = ({ endValue, suffix = "", prefix = "", floating = false }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    let startTime = null;
    let observer = null;
    let animationFrame = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(endValue * easeOut);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting) {
        animationFrame = requestAnimationFrame(animate);
        // Disconnect once we start animating so it only happens once
        if (observer) observer.disconnect();
      }
    };

    observer = new IntersectionObserver(handleIntersect, { threshold: 0.1 });
    
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [endValue]);

  return (
    <span ref={nodeRef}>
      {prefix}
      {floating ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
};
