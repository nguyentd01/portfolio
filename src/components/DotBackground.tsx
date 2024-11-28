import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  dx: number;
  dy: number;
}

export default function DotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      const particles: Particle[] = [];
      const spacing = 50;
      const rows = Math.ceil(canvas.height / spacing);
      const cols = Math.ceil(canvas.width / spacing);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          particles.push({
            x: j * spacing,
            y: i * spacing,
            targetX: j * spacing,
            targetY: i * spacing,
            dx: 0,
            dy: 0
          });
        }
      }
      particlesRef.current = particles;
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = document.documentElement.classList.contains('dark') 
        ? 'rgba(255, 255, 255, 1)' 
        : 'rgba(0, 0, 0, 1)';

      particlesRef.current.forEach((particle) => {
        const distX = mouseRef.current.x - particle.x;
        const distY = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(distX * distX + distY * distY);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.1;
          particle.dx = distX * force;
          particle.dy = distY * force;
        }

        particle.x += particle.dx;
        particle.y += particle.dy;

        particle.dx *= 0.95;
        particle.dy *= 0.95;

        particle.x += (particle.targetX - particle.x) * 0.05;
        particle.y += (particle.targetY - particle.y) * 0.05;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}