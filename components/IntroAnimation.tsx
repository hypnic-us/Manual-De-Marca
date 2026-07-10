import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ─────────────────────────────────────────────
// Esfera 3D — oro líquido, rotación lenta y
// respiración sutil (elegancia > espectáculo)
// ─────────────────────────────────────────────
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    t.current += delta;
    // Rotación suave para mover los reflejos de luz de forma natural
    meshRef.current.rotation.x += delta * 0.12;
    meshRef.current.rotation.y += delta * 0.18;
    // Efecto de respiración suave en la escala
    const s = 1 + Math.sin(t.current * 0.8) * 0.03;
    meshRef.current.scale.setScalar(s);
  });

  return (
    <Sphere ref={meshRef} args={[1.4, 128, 128]}>
      <MeshDistortMaterial
        color="#ffa600"            // Base ámbar/oro
        emissive="#ff3a00"         // Brillo interno rojizo/naranja cálido
        emissiveIntensity={0.9}    // Intensidad del brillo interior
        roughness={0.03}           // Superficie sumamente pulida y brillante
        metalness={0.05}           // Baja metalicidad para actuar como vidrio/gel
        distort={0.42}             // Deformación fluida orgánica (tipo gota)
        speed={1.8}                // Velocidad de movimiento del fluido
        transmission={0.88}        // Translucidez/Transmisión de luz alta
        thickness={2.5}            // Grosor de refracción para distorsión tipo lente
        ior={1.55}                 // Índice de refracción de líquido espeso
        clearcoat={1.0}            // Capa externa de laca brillante (reflexión extra)
        clearcoatRoughness={0.02}  // Capa externa súper pulida
      />
    </Sphere>
  );
};

// ─────────────────────────────────────────────
// Intro estilo Apple: una sola secuencia continua.
//   · La esfera emerge del negro (blur → foco)
//   · El nombre aparece con tracking que se asienta
//   · Zoom sutil + fundido revela la landing
// ─────────────────────────────────────────────

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setLeaving(true), 2700), // comienza la salida
      setTimeout(onComplete, 3550),             // landing toma el control
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{ duration: 0.85, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Halo ambiental detrás de la esfera */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: leaving ? 0 : 0.55, scale: leaving ? 1.3 : 1 }}
        transition={{ duration: 1.6, ease: EASE_OUT }}
        style={{
          position: 'absolute',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,180,0,0.16) 0%, rgba(255,120,0,0.05) 45%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Esfera: emerge desenfocada, enfoca y se asienta; zoom sutil al salir */}
      <motion.div
        initial={{ opacity: 0, scale: 0.55, filter: 'blur(24px)' }}
        animate={
          leaving
            ? { opacity: 1, scale: 1.14, filter: 'blur(0px)' }
            : { opacity: 1, scale: 1, filter: 'blur(0px)' }
        }
        transition={
          leaving
            ? { duration: 0.9, ease: 'easeIn' }
            : { duration: 1.5, ease: EASE_OUT }
        }
        style={{ width: '280px', height: '280px', position: 'relative' }}
      >
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          style={{ width: '100%', height: '100%' }}
          gl={{ antialias: true, alpha: true, toneMappingExposure: 1.2 }}
        >
          <ambientLight intensity={0.2} />
          {/* Luz principal para los reflejos blancos brillantes (superior derecha frontal) */}
          <pointLight position={[6, 6, 4]} intensity={5} color="#ffffff" />
          {/* Luz cálida de relleno (izquierda frontal) */}
          <pointLight position={[-6, 2, 4]} intensity={2.5} color="#ffaa00" />
          {/* Retroiluminación intensa para encender la translucidez del ámbar */}
          <pointLight position={[0, -2, -5]} intensity={6} color="#ff3c00" />
          {/* Luz de borde superior */}
          <directionalLight position={[0, 5, 0]} intensity={1.5} color="#ffea00" />
          <AnimatedSphere />
        </Canvas>
      </motion.div>

      {/* Nombre: tracking amplio que se asienta, blur → nítido (keynote style) */}
      <motion.span
        initial={{ opacity: 0, letterSpacing: '0.6em', filter: 'blur(10px)', y: 12 }}
        animate={{ opacity: 1, letterSpacing: '0.28em', filter: 'blur(0px)', y: 0 }}
        transition={{ delay: 0.9, duration: 1.1, ease: EASE_OUT }}
        style={{
          marginTop: '48px',
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: '15px',
          fontWeight: 500,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.92)',
          whiteSpace: 'nowrap',
        }}
      >
        Juan Manuel Montoya
      </motion.span>

      <motion.span
        initial={{ opacity: 0, filter: 'blur(6px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ delay: 1.5, duration: 0.9, ease: 'easeOut' }}
        style={{
          marginTop: '14px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(255,200,0,0.55)',
          whiteSpace: 'nowrap',
        }}
      >
        Brand · Technology · Strategy
      </motion.span>
    </motion.div>
  );
}
