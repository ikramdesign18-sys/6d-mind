import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';

export default function NeuralBrain() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const prefersReducedMotion = useReducedMotion();

  // Create particles
  const { positions, colors, lineIndices } = useMemo(() => {
    const particleCount = 600;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    // Primary Color: hsl(235, 85%, 55%) -> approx RGB (0.2, 0.3, 1.0)
    // Accent Color: hsl(190, 90%, 45%) -> approx RGB (0.0, 0.8, 0.9)
    const color1 = new THREE.Color(0.2, 0.3, 1.0);
    const color2 = new THREE.Color(0.0, 0.8, 0.9);
    const color3 = new THREE.Color(0.8, 0.8, 0.9); // light metallic

    for (let i = 0; i < particleCount; i++) {
      // Create a somewhat brain-like elongated sphere shape
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      const r = 2.5 + Math.random() * 0.5; // Radius
      const x = r * Math.sin(phi) * Math.cos(theta) * 1.2; // slightly wider
      const y = r * Math.cos(phi) * 0.9; // slightly shorter
      const z = r * Math.sin(phi) * Math.sin(theta) * 1.4; // deeper
      
      // Add some "lobes" and irregularities
      const noise = Math.sin(x*2) * Math.cos(y*2) * Math.sin(z*2) * 0.3;
      
      positions[i * 3] = x + noise;
      positions[i * 3 + 1] = y + noise;
      positions[i * 3 + 2] = z + noise;

      const mixedColor = color1.clone().lerp(color2, Math.random());
      if(Math.random() > 0.8) mixedColor.lerp(color3, 0.8);
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    // Connect close particles
    const lineIndices = [];
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;
        
        // Connect if close enough, but keep line count manageable
        if (distSq < 1.2 && Math.random() > 0.5) {
          lineIndices.push(i, j);
        }
      }
    }

    return { positions, colors, lineIndices: new Uint16Array(lineIndices) };
  }, []);

  useFrame((state) => {
    if (prefersReducedMotion) return;
    
    if (pointsRef.current && linesRef.current) {
      // Gentle rotation
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      
      linesRef.current.rotation.y += 0.001;
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

      // Cursor reactivity
      const targetRotationY = (state.pointer.x * Math.PI) * 0.1;
      const targetRotationX = -(state.pointer.y * Math.PI) * 0.1;
      
      pointsRef.current.rotation.y += (targetRotationY - pointsRef.current.rotation.y + (state.clock.elapsedTime * 0.1)) * 0.05;
      pointsRef.current.rotation.x += (targetRotationX - pointsRef.current.rotation.x) * 0.05;
      
      linesRef.current.rotation.y = pointsRef.current.rotation.y;
      linesRef.current.rotation.x = pointsRef.current.rotation.x;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="index"
            count={lineIndices.length}
            array={lineIndices}
            itemSize={1}
            args={[lineIndices, 1]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#a0aabf"
          transparent
          opacity={0.15}
        />
      </lineSegments>
    </group>
  );
}
