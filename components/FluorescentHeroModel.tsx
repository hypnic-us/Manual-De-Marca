import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group, Mesh } from 'three';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useTranslation } from 'react-i18next';

const InteractiveSphere = ({ isWireframe }: { isWireframe: boolean }) => {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const t = useRef(0);

  useFrame((state, delta) => {
    if (groupRef.current) {
      t.current += delta;
      
      // Rotación base continua y muy elegante
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.08;

      // Interacción interactiva basada en el movimiento del cursor
      if (hovered) {
        const targetX = state.pointer.y * 1.5;
        const targetY = state.pointer.x * 1.5;
        
        groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.06;
        groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.06;
      }
    }
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* 1. Núcleo líquido traslúcido pulido */}
      <Sphere args={[1.35, 128, 128]}>
        <MeshDistortMaterial
          color="#ffa600"            // Base de oro/ámbar líquido
          emissive="#ff3a00"         // Resplandor cálido interno
          emissiveIntensity={0.8}
          roughness={0.03}           // Súper pulido
          metalness={0.05}
          distort={0.35}             // Deformación del fluido
          speed={1.5}
          transmission={0.88}        // Altamente traslúcido
          thickness={2.2}            // Grosor de refracción
          ior={1.5}                  // Refracción tipo gel/vidrio
          clearcoat={1.0}            // Capa externa brillante
          clearcoatRoughness={0.02}
        />
      </Sphere>

      {/* 2. Estructura de vectores pulidos (Wireframe metálico superpuesto) */}
      {/* Se utiliza una densidad de rejilla intermedia (32x32) para ver las líneas del vector con total nitidez */}
      <Sphere args={[1.37, 32, 32]}>
        <MeshDistortMaterial
          color="#ffd700"            // Vectores de oro pulido
          emissive="#cc8800"
          emissiveIntensity={0.3}
          roughness={0.05}           // Metal pulido brillante
          metalness={0.95}           // Máximo brillo metálico
          distort={0.35}             // Misma distorsión para ir en perfecta sincronía
          speed={1.5}
          wireframe={true}           // Activa la rejilla de vectores
          transparent={true}
          opacity={0.8}
        />
      </Sphere>
    </group>
  );
};

export default function FluorescentHeroModel({ isWireframe = true }: { isWireframe?: boolean }) {
  const { i18n } = useTranslation();

  const text = i18n.language === 'es'
    ? "Tus productos y servicios al máximo nivel • "
    : "Your products and services at the highest level • ";
  const repeatedText = `${text}${text}`;

  return (
    <div className="w-full h-full z-0 pointer-events-auto mix-blend-screen cursor-pointer relative flex items-center justify-center">
      <Canvas 
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, toneMappingExposure: 1.2 }}
        style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
      >
        <ambientLight intensity={0.2} />
        {/* Luz principal para los brillos blancos pulidos de los vectores y el líquido */}
        <pointLight position={[8, 8, 5]} intensity={4.5} color="#ffffff" />
        {/* Luz de relleno cálida */}
        <pointLight position={[-6, 3, 5]} intensity={2} color="#ffa500" />
        {/* Retroiluminación intensa para encender el interior líquido ámbar */}
        <pointLight position={[0, -3, -5]} intensity={5.5} color="#ff3a00" />
        {/* Luz de borde superior */}
        <directionalLight position={[0, 4, 0]} intensity={1} color="#ffea00" />
        <InteractiveSphere isWireframe={isWireframe} />
      </Canvas>

      {/* Halo de texto rotativo (órbita alrededor de la esfera) */}
      <svg 
        viewBox="0 0 200 200" 
        className="absolute w-full h-full pointer-events-none z-10 animate-spin"
        style={{ animationDuration: '38s' }}
      >
        <path
          id="heroTextPath"
          d="M 100, 100 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
          fill="none"
        />
        <text className="font-mono text-[5.5px] fill-white/45 tracking-[0.16em] uppercase">
          <textPath href="#heroTextPath" startOffset="0%">
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
