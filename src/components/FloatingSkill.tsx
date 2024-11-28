import React, { useRef, useEffect } from 'react';

interface FloatingSkillProps {
  skill: string;
}

export default function FloatingSkill({ skill }: FloatingSkillProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const container = element.parentElement;
    if (!container) return;

    // Random initial position within container
    positionRef.current = {
      x: Math.random() * (container.clientWidth - element.clientWidth),
      y: Math.random() * (container.clientHeight - element.clientHeight)
    };

    // Random initial velocity
    velocityRef.current = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    };

    const animate = () => {
      if (!element || !container || isDraggingRef.current) return;

      // Update position
      positionRef.current.x += velocityRef.current.x;
      positionRef.current.y += velocityRef.current.y;

      // Bounce off walls
      if (positionRef.current.x <= 0 || positionRef.current.x >= container.clientWidth - element.clientWidth) {
        velocityRef.current.x *= -0.8;
      }
      if (positionRef.current.y <= 0 || positionRef.current.y >= container.clientHeight - element.clientHeight) {
        velocityRef.current.y *= -0.8;
      }

      // Keep within bounds
      positionRef.current.x = Math.max(0, Math.min(positionRef.current.x, container.clientWidth - element.clientWidth));
      positionRef.current.y = Math.max(0, Math.min(positionRef.current.y, container.clientHeight - element.clientHeight));

      // Apply friction
      velocityRef.current.x *= 0.99;
      velocityRef.current.y *= 0.99;

      // Update element position
      element.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;

      requestAnimationFrame(animate);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      const rect = element.getBoundingClientRect();
      dragOffsetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const containerRect = container.getBoundingClientRect();
      positionRef.current = {
        x: Math.max(0, Math.min(e.clientX - containerRect.left - dragOffsetRef.current.x, container.clientWidth - element.clientWidth)),
        y: Math.max(0, Math.min(e.clientY - containerRect.top - dragOffsetRef.current.y, container.clientHeight - element.clientHeight))
      };

      element.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    element.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="absolute cursor-grab active:cursor-grabbing bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-full text-sm font-light text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors select-none"
      style={{ transform: 'translate(0, 0)' }}
    >
      {skill}
    </div>
  );
}