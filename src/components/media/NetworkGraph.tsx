import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  id: string;
}

export function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createNodes = () => {
      const nodeCount = 6;
      const colors = isDark 
        ? ['#00FF88', '#00CC6A', '#00994F'] 
        : ['#2563EB', '#3B82F6', '#60A5FA'];
      
      nodes = Array.from({ length: nodeCount }, (_, i) => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 4 + Math.random() * 4,
        color: colors[i % colors.length],
        id: `node-${i}`,
      }));
    };

    const drawNode = (node: Node) => {
      // Glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = node.color;
      
      // Node circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.fill();
      
      // Inner white dot
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? '#FFFFFF' : '#FFFFFF';
      ctx.fill();
    };

    const drawConnections = () => {
      ctx.shadowBlur = 0;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = isDark 
              ? `rgba(0, 255, 136, ${opacity})` 
              : `rgba(37, 99, 235, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        
        // Connect to mouse
        const dx = mouseX - nodes[i].x;
        const dy = mouseY - nodes[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const opacity = (1 - distance / 200) * 0.3;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = isDark 
            ? `rgba(0, 255, 136, ${opacity})` 
            : `rgba(37, 99, 235, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    };

    const updateNodes = () => {
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.offsetWidth) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.offsetHeight) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.offsetWidth, node.x));
        node.y = Math.max(0, Math.min(canvas.offsetHeight, node.y));
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      drawConnections();
      nodes.forEach(drawNode);
      updateNodes();
      
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    resize();
    createNodes();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createNodes();
    });
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [isDark]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-30"
        style={{ pointerEvents: 'auto' }}
      />
    </div>
  );
}