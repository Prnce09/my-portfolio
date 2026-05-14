import { useEffect, useState } from "react";

export default function MouseGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
    >
      <div
        className="absolute w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-3xl transition-all duration-100"
        style={{
          left: position.x - 150,
          top: position.y - 150,
        }}
      />
    </div>
  );
}