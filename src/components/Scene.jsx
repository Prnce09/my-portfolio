
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";

function Sphere({ reduceMotion }) {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (!meshRef.current || reduceMotion) return;

    // Smooth, subtle rotation
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.15;

    // Gentle floating motion
    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
  });

  return (
    <mesh ref={meshRef} scale={1.12}>
      <icosahedronGeometry args={[2, 1]} />

      <meshStandardMaterial
        color="#00e5ff"
        emissive="#0088aa"
        emissiveIntensity={0.3}
        wireframe
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

export default function Scene() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    >
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 55,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
        }}
      >
        <ambientLight intensity={1} />

        <directionalLight
          position={[2, 2, 5]}
          intensity={1.5}
        />

        {/* Subtle background stars */}
        <Stars
          radius={50}
          depth={20}
          count={900}
          factor={2}
          saturation={0}
          fade={!reduceMotion}
          speed={reduceMotion ? 0 : 0.3}
        />

        {/* Brighter, slightly larger sphere */}
        <Sphere reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}
