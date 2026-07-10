import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';
import { Group } from 'three';
import { Box, Torus, Dodecahedron, MeshDistortMaterial } from '@react-three/drei';

interface ModelProps {
  category: 'amplify' | 'echo' | 'stage';
}

const DynamicModel = ({ category }: ModelProps) => {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const t = useRef(0);

  useFrame((state, delta) => {
    if (groupRef.current) {
      t.current += delta;
      
      // Rotación base elegante e inclinada
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.1;

      // Interacción con mouse al hacer hover
      if (hovered) {
        const targetX = state.pointer.y * 1.2;
        const targetY = state.pointer.x * 1.2;
        
        groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.08;
        groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.08;
      }
    }
  });

  // Configuración de materiales idéntica al estilo de la esfera (Translúcido + Vector de oro pulido)
  const renderShape = (isWireframe: boolean) => {
    const distortProps = {
      color: isWireframe ? "#ffd700" : "#ffa600",
      emissive: isWireframe ? "#cc8800" : "#ff3a00",
      emissiveIntensity: isWireframe ? 0.3 : 0.8,
      roughness: isWireframe ? 0.05 : 0.03,
      metalness: isWireframe ? 0.95 : 0.05,
      distort: 0.35,
      speed: 1.5,
      wireframe: isWireframe,
      transparent: true,
      opacity: isWireframe ? 0.8 : 1,
      // Propiedades físicas para simular vidrio líquido en el núcleo
      ...(isWireframe ? {} : {
        transmission: 0.88,
        thickness: 2.2,
        ior: 1.5,
        clearcoat: 1.0,
        clearcoatRoughness: 0.02
      })
    };

    if (category === 'amplify') {
      // 1. Cubo para Amplify (Tecnología / Negocios)
      const size = isWireframe ? 1.52 : 1.5;
      return (
        <Box args={[size, size, size]}>
          <MeshDistortMaterial {...distortProps} />
        </Box>
      );
    } else if (category === 'echo') {
      // 2. Torus (Dona) para Echo (Marketing Inmersivo)
      const r = isWireframe ? 0.86 : 0.85;
      const tRadius = isWireframe ? 0.31 : 0.3;
      return (
        <Torus args={[r, tRadius, isWireframe ? 12 : 32, isWireframe ? 24 : 64]}>
          <MeshDistortMaterial {...distortProps} />
        </Torus>
      );
    } else {
      // 3. Dodecaedro para Stage (Experiencias Físicas)
      const r = isWireframe ? 1.12 : 1.1;
      return (
        <Dodecahedron args={[r, 0]}>
          <MeshDistortMaterial {...distortProps} />
        </Dodecahedron>
      );
    }
  };

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Núcleo líquido traslúcido */}
      {renderShape(false)}
      {/* Rejilla de vectores pulidos */}
      {renderShape(true)}
    </group>
  );
};

interface FluorescentModelProps {
  category?: 'amplify' | 'echo' | 'stage';
}

export default function FluorescentModel({ category = 'amplify' }: FluorescentModelProps) {
  const { i18n } = useTranslation();

  const getCategoryDetails = () => {
    switch (category) {
      case 'amplify':
        return {
          tag: 'AMPLIFY · 01',
          es: 'Tecnología para mejorar tu negocio',
          en: 'Technology to improve your business'
        };
      case 'echo':
        return {
          tag: 'ECHO · 02',
          es: 'Marketing inmersivo',
          en: 'Immersive marketing'
        };
      case 'stage':
        return {
          tag: 'STAGE · 03',
          es: 'Experiencias físicas con tech',
          en: 'Physical experiences with tech'
        };
      default:
        return {
          tag: 'AMPLIFY · 01',
          es: 'Tecnología para mejorar tu negocio',
          en: 'Technology to improve your business'
        };
    }
  };

  const details = getCategoryDetails();

  return (
    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-[60%] max-w-[180px] md:max-w-[220px] aspect-square flex flex-col shadow-2xl z-20 pointer-events-auto rounded-2xl overflow-hidden bg-black/5 backdrop-blur-xl border border-white/10 group cursor-pointer">
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 4.5], fov: 45 }}
          gl={{ antialias: true, alpha: true, toneMappingExposure: 1.2 }}
        >
          <ambientLight intensity={0.2} />
          {/* Luz principal para brillos especulares blancos */}
          <pointLight position={[6, 6, 4]} intensity={4.5} color="#ffffff" />
          {/* Luz de relleno cálida */}
          <pointLight position={[-6, 2, 4]} intensity={2} color="#ffaa00" />
          {/* Retroiluminación para el cuerpo traslúcido */}
          <pointLight position={[0, -2, -5]} intensity={5.5} color="#ff3c00" />
          {/* Luz de borde superior */}
          <directionalLight position={[0, 4, 0]} intensity={1} color="#ffea00" />
          <DynamicModel category={category} />
        </Canvas>
      </div>
      
      {/* Capa de texto overlay dinámico */}
      <div className="relative z-10 p-4 md:p-6 flex flex-col justify-end h-full w-full pointer-events-none transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
        <div className="w-full h-[1px] bg-white/50 mb-2 md:mb-4"></div>
        <p className="font-mono text-[8px] md:text-[10px] text-white/70 uppercase tracking-widest mb-1 md:mb-2 mix-blend-difference">{details.tag}</p>
        <p className="font-serif italic text-white text-base md:text-xl leading-tight break-words drop-shadow-md">
          {i18n.language === 'es' ? details.es : details.en}
        </p>
      </div>
    </div>
  );
}
