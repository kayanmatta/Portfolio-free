// src/components/CustomCursor.tsx

import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Throttle mouse movement updates to improve performance
      const now = performance.now();
      if (previousTimeRef.current && now - previousTimeRef.current < 16) { // ~60fps limit
        return;
      }
      previousTimeRef.current = now;

      setPosition({ x: e.clientX, y: e.clientY });

      // Verifica se o cursor está sobre um link ou botão
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .project-card, .service-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const dotStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: 'transform 0.1s ease-out', // Added transition for smoother movement
  };

  const outlineStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: 'transform 0.15s ease-out', // Added transition for smoother movement
  };

  return (
    <>
      <div 
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`} 
        style={dotStyle} 
      />
      <div 
        className={`cursor-outline ${isHovering ? 'hovering' : ''}`} 
        style={outlineStyle} 
      />
    </>
  );
};

export default CustomCursor;