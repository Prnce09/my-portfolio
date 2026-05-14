import { Canvas } from "@react-three/fiber";

import {
  Float,
  OrbitControls,
  Stars,
} from "@react-three/drei";

function Sphere() {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >

      <mesh>

        <icosahedronGeometry args={[2, 1]} />

        <meshStandardMaterial
          color="#00d9ff"
          wireframe
        />

      </mesh>

    </Float>
  );
}

export default function Scene() {

  return (
    <div className="absolute inset-0 z-0">

      <Canvas
        camera={{ position: [0, 0, 8] }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >

        <ambientLight intensity={1} />

        <directionalLight position={[2, 2, 5]} />

        <Stars
          radius={50}
          depth={20}
          count={2000}
          factor={2}
          saturation={0}
          fade
          speed={1}
        />

        <Sphere />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />

      </Canvas>

    </div>
  );
}