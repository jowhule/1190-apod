import { useEffect, useRef } from "react";

const StarsCanvas = ({ starCount = 120 }) => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize stars
    stars.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      delta: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? -1 : 1),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let star of stars.current) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#bb86fc";
        ctx.fill();

        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) {
          star.delta *= -1;
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [starCount]);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
};

export default StarsCanvas;
