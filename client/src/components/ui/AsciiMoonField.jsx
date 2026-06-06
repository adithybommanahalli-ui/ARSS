import React, { useState, useRef, useEffect } from 'react';

export const AsciiMoonField = ({ className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const chars = ['◯', '●', '○', '·', '∘', '⊙', '⊡', '▪'];

    const render = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#ffffff';
      ctx.font = '10px monospace';

      const cols = Math.ceil(width / 12);
      const rows = Math.ceil(height / 16);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * 12;
          const y = j * 16;
          const char = chars[Math.floor(Math.random() * chars.length)];
          const opacity = Math.random() * 0.6 + 0.2;
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fillText(char, x, y + 12);
        }
      }

      // Draw moon circle
      const moonX = width * 0.7;
      const moonY = height * 0.4;
      const moonRadius = 80;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw craters
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      for (let k = 0; k < 8; k++) {
        const angle = (Math.PI * 2 * k) / 8;
        const cx = moonX + Math.cos(angle) * moonRadius * 0.5;
        const cy = moonY + Math.sin(angle) * moonRadius * 0.5;
        const r = Math.random() * 10 + 5;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    render();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
};
