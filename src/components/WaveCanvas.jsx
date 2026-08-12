import { useEffect, useRef } from 'react';

export default function WaveCanvas() {
  const canvasRef = useRef(null);
  const animFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const hero = canvas.parentElement;

    let W, H, DPR;
    const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = hero.clientWidth;
      H = hero.clientHeight;
      canvas.width = Math.round(W * DPR);
      canvas.height = Math.round(H * DPR);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const sm = window.innerWidth < 768;
    const COLS = sm ? 26 : 46;
    const ROWS = sm ? 14 : 22;
    
    // Grid geometry points
    const pts = [];
    for (let r = 0; r < ROWS; r++) {
      const zN = r / (ROWS - 1);
      for (let c = 0; c < COLS; c++) {
        pts.push({
          xN: c / (COLS - 1),
          zN,
          r,
          c,
          j: Math.random() * 0.5 + 0.75,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    }

    // Stars / celestial depth particles
    const stars = Array.from({ length: sm ? 60 : 110 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.65,
      d: Math.random() * 0.8 + 0.2,
      tw: Math.random() * Math.PI * 2,
      sp: Math.random() * 0.5 + 0.3,
    }));

    // Floating ambient micro-particles
    const floaters = Array.from({ length: sm ? 18 : 35 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.35 - 0.1,
      size: Math.random() * 1.6 + 0.6,
      alpha: Math.random() * 0.4 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Data stream packets flowing across grid lines
    const dataStreams = Array.from({ length: sm ? 5 : 9 }, () => ({
      col: Math.floor(Math.random() * COLS),
      progress: Math.random(),
      speed: Math.random() * 0.006 + 0.003,
      length: Math.random() * 0.18 + 0.1,
      brightness: Math.random() * 0.4 + 0.6,
    }));

    let mx = 0, my = 0, tmx = 0, tmy = 0;
    const handleMouseMove = (e) => {
      const r = hero.getBoundingClientRect();
      tmx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      tmy = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const handleMouseLeave = () => {
      tmx = 0;
      tmy = 0;
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    const ease = (p) => Math.pow(p, 1.75);
    const wave = (xN, zN, t) =>
      Math.sin(xN * 6.5 + t * 0.5 + zN * 2.8) * 0.45 +
      Math.sin(xN * 12 - t * 0.7 + zN * 4.5) * 0.2 +
      Math.sin(zN * 5.2 + t * 0.28) * 0.32;

    let t = 0;

    const draw = () => {
      if (!noMotion) t += 0.015;
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;
      ctx.clearRect(0, 0, W, H);

      // 1. Draw Star Particle Field
      for (const s of stars) {
        const tw = 0.5 + 0.5 * Math.sin(t * 1.2 * s.sp + s.tw);
        ctx.beginPath();
        ctx.fillStyle = `rgba(180, 222, 255, ${0.15 + 0.45 * tw * s.d})`;
        const px = s.x * W + mx * 12 * s.d;
        const py = s.y * H * 0.9 + my * 8 * s.d;
        ctx.arc(px, py, 0.4 + s.d * 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Project 3D Grid Points
      const hy = H * 0.42;
      const fy = H * 1.08;
      const proj = pts.map((p) => {
        const dT = ease(p.zN);
        const sc = 0.30 + dT * 1.62;
        return {
          px: W / 2 + (p.xN - 0.5) * sc * W * 1.28 + mx * 25 * sc,
          py: hy + (fy - hy) * dT + wave(p.xN, p.zN, t) * (6 + dT * 32) + my * 15 * sc,
          sc,
          zN: p.zN,
          r: p.r,
          c: p.c,
          j: p.j,
          pulseOffset: p.pulseOffset,
        };
      });

      // 3. Draw Grid Lines (Horizontal & Perspective Depth)
      ctx.lineWidth = 1;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const i = r * COLS + c;
          const pt = proj[i];
          const al = 0.04 + ease(pt.zN) * 0.38;

          // Horizontal grid line
          if (c < COLS - 1) {
            const nextX = proj[i + 1];
            ctx.strokeStyle = `rgba(93, 174, 255, ${al * 0.75})`;
            ctx.beginPath();
            ctx.moveTo(pt.px, pt.py);
            ctx.lineTo(nextX.px, nextX.py);
            ctx.stroke();
          }

          // Depth grid line
          if (r < ROWS - 1) {
            const nextZ = proj[i + COLS];
            ctx.strokeStyle = `rgba(93, 174, 255, ${al * 0.55})`;
            ctx.beginPath();
            ctx.moveTo(pt.px, pt.py);
            ctx.lineTo(nextZ.px, nextZ.py);
            ctx.stroke();
          }
        }
      }

      // 4. Draw Flowing Data Streams across the Grid
      if (!noMotion) {
        dataStreams.forEach((stream) => {
          stream.progress += stream.speed;
          if (stream.progress > 1.2) {
            stream.progress = -0.2;
            stream.col = Math.floor(Math.random() * COLS);
          }

          // Trace stream down the column
          for (let r = 0; r < ROWS - 1; r++) {
            const zNorm = r / (ROWS - 1);
            const dist = Math.abs(zNorm - stream.progress);
            if (dist < stream.length) {
              const streamAlpha = (1 - dist / stream.length) * stream.brightness * ease(zNorm);
              if (streamAlpha > 0.05) {
                const idx1 = r * COLS + stream.col;
                const idx2 = (r + 1) * COLS + stream.col;
                const p1 = proj[idx1];
                const p2 = proj[idx2];
                if (p1 && p2) {
                  ctx.strokeStyle = `rgba(165, 230, 255, ${streamAlpha})`;
                  ctx.lineWidth = 1.8;
                  ctx.beginPath();
                  ctx.moveTo(p1.px, p1.py);
                  ctx.lineTo(p2.px, p2.py);
                  ctx.stroke();
                  ctx.lineWidth = 1;
                }
              }
            }
          }
        });
      }

      // 5. Draw Glowing Grid Nodes
      const sortedPts = proj.slice().sort((a, b) => a.zN - b.zN);
      sortedPts.forEach((pt) => {
        const pulse = 0.65 + 0.35 * Math.sin(t * 2.0 + pt.pulseOffset + pt.r * 0.4 + pt.c * 0.2);
        const sz = Math.max(0.35, (0.75 + pt.sc * 1.9) * pulse * pt.j);
        const al = Math.min(1, 0.18 + pt.zN * 0.82);

        ctx.beginPath();
        if (pt.zN > 0.60) {
          ctx.shadowColor = 'rgba(140, 215, 255, 0.85)';
          ctx.shadowBlur = 8;
          ctx.fillStyle = `rgba(200, 238, 255, ${al})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(100, 185, 255, ${al * 0.9})`;
        }
        ctx.arc(pt.px, pt.py, sz, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      // 6. Draw Floating Ambient Dust Particles
      floaters.forEach((f) => {
        if (!noMotion) {
          f.y += f.vy;
          f.x += f.vx;
          if (f.y < -10) {
            f.y = H + 10;
            f.x = Math.random() * W;
          }
        }
        const pAlpha = f.alpha * (0.6 + 0.4 * Math.sin(t * 1.5 + f.pulse));
        ctx.beginPath();
        ctx.fillStyle = `rgba(160, 215, 255, ${pAlpha})`;
        ctx.arc(f.x + mx * 8, f.y + my * 6, f.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrameId.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return <canvas id="wave" ref={canvasRef} aria-hidden="true" />;
}
