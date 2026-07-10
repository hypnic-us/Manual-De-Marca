import React, { useRef, useEffect } from 'react';

export default function BackgroundTerrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    let time = 0;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const render = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;
      
      // Smooth out scroll velocity
      scrollVelocity = scrollVelocity * 0.85 + Math.min(scrollDelta, 100) * 0.15;
      
      // Increase time faster if there is scroll velocity
      time += 0.002 + (scrollVelocity * 0.002);
      
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);
      
      const spacing = 18;
      // Define a grid size
      const gridSize = 35;
      
      ctx.fillStyle = 'rgba(255, 255, 255, 1)'; 

      const offsetX = (mouseX - width / 2) * 0.03;
      const offsetY = (mouseY - height / 2) * 0.03;
      
      // Center of the screen
      const cx = width / 2;
      const cy = height / 2;

      // Draw 3 layers like the reference image
      for (let plane = 2; plane >= 0; plane--) {
        const planeOffsetY = (plane - 1) * 200; 
        
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            
            // Center the grid around 0,0
            const gridX = (i - gridSize / 2) * spacing;
            const gridY = (j - gridSize / 2) * spacing;
            
            // Distance from center to create a circular mask
            const dist = Math.sqrt(gridX * gridX + gridY * gridY);
            const maxDist = (gridSize / 2) * spacing;
            if (dist > maxDist) continue;
            
            // Edge fade out
            const edgeFade = Math.max(0, 1 - (dist / maxDist));
            
            // Noise for elevation (different phase for each plane)
            const nx = gridX * 0.005;
            const ny = gridY * 0.005;
            const elevation = 
              (Math.sin(nx * 2 + time + plane) * Math.cos(ny * 2 + time + plane) * 30 +
              Math.sin(nx * 4 - time) * Math.cos(ny * 4 + time * 0.5) * 15) * edgeFade;

            // Isometric projection
            const isoX = (gridX - gridY) * Math.cos(Math.PI / 6);
            const isoY = (gridX + gridY) * Math.sin(Math.PI / 6);
            
            // Parallax based on plane depth
            const planeParallaxX = offsetX * (plane + 1) * 0.5;
            const planeParallaxY = offsetY * (plane + 1) * 0.5;

            const finalX = cx + isoX - planeParallaxX;
            const finalY = cy + isoY + planeOffsetY - elevation - planeParallaxY;

            // Size and opacity based on elevation and fade
            const zNorm = (elevation + 45) / 90; // approx 0 to 1
            const size = Math.max(0.5, zNorm * 2 * edgeFade + 0.5);
            let opacity = Math.max(0, Math.min(1, zNorm * edgeFade * 1.5));
            
            // Dim lower planes
            if (plane === 1) opacity *= 0.5;
            if (plane === 2) opacity *= 0.2;
            
            if (opacity <= 0.01) continue;

            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.arc(finalX, finalY, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40 mix-blend-screen"
    />
  );
}
