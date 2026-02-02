import { useEffect, useRef } from 'react';

const AntigravityBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const colors = [
      { r: 139, g: 92, b: 246 },   // Purple
      { r: 6, g: 182, b: 212 },    // Cyan
      { r: 244, g: 114, b: 182 },  // Pink
      { r: 59, g: 130, b: 246 },   // Blue
      { r: 16, g: 185, b: 129 },   // Green
    ];

    const createParticles = () => {
      const particles = [];
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
      
      for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 40 + 20;
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          size: size,
          color: color,
          vx: 0,
          vy: 0,
          // Wobble effect
          wobblePhase: Math.random() * Math.PI * 2,
          wobbleSpeed: Math.random() * 0.03 + 0.02,
          wobbleAmplitude: Math.random() * 3 + 2,
          // Float effect
          floatPhase: Math.random() * Math.PI * 2,
          floatSpeed: Math.random() * 0.015 + 0.01,
          floatAmplitude: Math.random() * 15 + 10,
          // Pulse effect
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.04 + 0.02,
          // Rotation
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          // Shape type
          shape: Math.random() > 0.5 ? 'circle' : 'blob',
          // Opacity variation
          baseOpacity: Math.random() * 0.3 + 0.15,
        });
      }
      return particles;
    };

    const drawBlob = (x, y, size, rotation, color, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      
      ctx.beginPath();
      const points = 6;
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wobble = Math.sin(angle * 3 + rotation * 2) * size * 0.15;
        const r = size / 2 + wobble;
        const px = Math.cos(angle) * r;
        const py = Math.sin(angle) * r;
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
      gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`);
      gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.restore();
    };

    const drawCircle = (x, y, size, color, opacity, pulseScale) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      
      const actualSize = (size / 2) * pulseScale;
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, actualSize);
      gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 1.5})`);
      gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
      
      ctx.beginPath();
      ctx.arc(x, y, actualSize, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        // Antigravity effect - particles flee from cursor
        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * 2;
          particle.vy -= Math.sin(angle) * force * 2;
        }

        // Return to original position with spring effect
        const springStrength = 0.008;
        particle.vx += (particle.baseX - particle.x) * springStrength;
        particle.vy += (particle.baseY - particle.y) * springStrength;

        // Update wobble
        particle.wobblePhase += particle.wobbleSpeed;
        const wobbleX = Math.sin(particle.wobblePhase) * particle.wobbleAmplitude;
        const wobbleY = Math.cos(particle.wobblePhase * 0.7) * particle.wobbleAmplitude;

        // Update float
        particle.floatPhase += particle.floatSpeed;
        const floatY = Math.sin(particle.floatPhase) * particle.floatAmplitude * 0.1;

        // Update pulse
        particle.pulsePhase += particle.pulseSpeed;
        const pulseScale = 1 + Math.sin(particle.pulsePhase) * 0.15;

        // Update rotation
        particle.rotation += particle.rotationSpeed;

        // Apply friction
        particle.vx *= 0.94;
        particle.vy *= 0.94;

        // Update position with wobble
        particle.x += particle.vx + wobbleX * 0.1;
        particle.y += particle.vy + floatY + wobbleY * 0.1;

        // Draw particle
        const opacity = particle.baseOpacity * (0.8 + Math.sin(particle.pulsePhase) * 0.2);
        
        if (particle.shape === 'blob') {
          drawBlob(particle.x, particle.y, particle.size * pulseScale, particle.rotation, particle.color, opacity);
        } else {
          drawCircle(particle.x, particle.y, particle.size, particle.color, opacity, pulseScale);
        }
      });
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleResize = () => {
      resizeCanvas();
      particlesRef.current = createParticles();
    };

    resizeCanvas();
    particlesRef.current = createParticles();
    animationRef.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default AntigravityBackground;
