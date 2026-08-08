import React, { useRef, useEffect } from 'react';

const NODE_COUNT = 55;
const LINK_DISTANCE = 140;
const MOUSE_RADIUS = 180;

function createNodes(width, height) {
  return Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    radius: Math.random() * 1.5 + 1,
    pulse: Math.random() * Math.PI * 2,
  }));
}

const NeuralNetworkCanvas = () => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const stateRef = useRef({ nodes: [], mouse: { x: -9999, y: -9999 }, pulses: [] });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      if (stateRef.current.nodes.length === 0) {
        stateRef.current.nodes = createNodes(w, h);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      stateRef.current.mouse = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    const spawnPulse = (from, to) => {
      stateRef.current.pulses.push({
        fromX: from.x,
        fromY: from.y,
        toX: to.x,
        toY: to.y,
        t: 0,
        speed: 0.012 + Math.random() * 0.018,
      });
      if (stateRef.current.pulses.length > 12) {
        stateRef.current.pulses.shift();
      }
    };

    const draw = () => {
      if (!ctx) return;
      const { nodes, mouse, pulses } = stateRef.current;

      ctx.clearRect(0, 0, w, h);

      if (!prefersReduced) {
        nodes.forEach((n) => {
          n.x += n.vx;
          n.y += n.vy;
          n.pulse += 0.04;

          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;

          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.02;
            n.x -= (dx / dist) * force * 40;
            n.y -= (dy / dist) * force * 40;
          }
        });
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.35;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(34, 211, 238, ${alpha})`);
            grad.addColorStop(1, `rgba(167, 139, 250, ${alpha})`);
            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.6;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();

            if (!prefersReduced && Math.random() < 0.0008) {
              spawnPulse(a, b);
            }
          }
        }
      }

      stateRef.current.pulses = pulses.filter((p) => {
        p.t += p.speed;
        if (p.t >= 1) return false;

        const x = p.fromX + (p.toX - p.fromX) * p.t;
        const y = p.fromY + (p.toY - p.fromY) * p.t;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 8);
        glow.addColorStop(0, 'rgba(34, 211, 238, 0.9)');
        glow.addColorStop(1, 'rgba(34, 211, 238, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });

      nodes.forEach((n) => {
        const glow = 0.5 + Math.sin(n.pulse) * 0.3;
        ctx.beginPath();
        ctx.fillStyle = `rgba(34, 211, 238, ${0.25 * glow})`;
        ctx.arc(n.x, n.y, n.radius * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `rgba(167, 139, 250, ${0.7 * glow})`;
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      aria-hidden="true"
    />
  );
};

export default NeuralNetworkCanvas;
