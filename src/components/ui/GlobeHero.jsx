import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

const Globe = ({ rotationSpeed = 0.0015, radius = 2.2 }) => {
  const group = useRef();
  const wire = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += rotationSpeed;
      group.current.rotation.x = Math.sin(group.current.rotation.y * 0.3) * 0.08;
    }
  });

  return (
    <group ref={group}>
      {/* Outer wireframe sphere */}
      <mesh ref={wire}>
        <sphereGeometry args={[radius, 48, 48]} />
        <meshBasicMaterial
          color="#C8F04A"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>
      {/* Inner solid faint sphere for depth */}
      <mesh>
        <sphereGeometry args={[radius * 0.985, 64, 64]} />
        <meshBasicMaterial color="#0A0A0A" transparent opacity={0.55} />
      </mesh>
      {/* Equator ring accent */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius * 1.005, 0.005, 8, 128]} />
        <meshBasicMaterial color="#C8F04A" transparent opacity={0.35} />
      </mesh>
      {/* Tilted ring */}
      <mesh rotation={[Math.PI / 2.4, 0.3, 0]}>
        <torusGeometry args={[radius * 1.05, 0.003, 8, 128]} />
        <meshBasicMaterial color="#C8F04A" transparent opacity={0.22} />
      </mesh>
    </group>
  );
};

export const GlobeHero = ({
  rotationSpeed = 0.0012,
  globeRadius = 1.8,
  className = '',
  id,
  children,
}) => {
  return (
    <section
      id={id}
      className={`relative w-full min-h-screen overflow-hidden bg-bg-base text-white ${className}`}
    >
      {/* z-0 — dot grid background (mask only fades the dots, NOT children) */}
      <div
        aria-hidden
        className="dot-grid-bg pointer-events-none absolute inset-0 z-0"
      />

      {/* z-0 — lime glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(50% 45% at 82% 50%, rgba(200,240,74,0.10) 0%, rgba(200,240,74,0.03) 40%, transparent 70%)',
        }}
      />

      {/* z-[1] — globe canvas, right-side, subtle */}
      <div className="pointer-events-none absolute right-[-8%] top-[4%] z-[1] h-[80vh] w-[60vw] opacity-40 md:opacity-50">
        <Canvas
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
          <ambientLight intensity={0.35} />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#C8F04A" />
          <Suspense fallback={null}>
            <Globe rotationSpeed={rotationSpeed} radius={globeRadius} />
          </Suspense>
        </Canvas>
      </div>

      {/* z-[2] — readability gradient sits above globe, below content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-black via-black/75 to-black/20"
      />

      {/* z-10 — content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default GlobeHero;
