import { Component, ReactNode, Suspense, lazy, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';

const NeuralBrain = lazy(() => import('./Brain'));

function StaticNeuralFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center opacity-30">
      <div className="w-64 h-64 border border-primary rounded-full flex items-center justify-center">
        <span className="font-mono text-sm tracking-widest text-primary">NEURAL_CORE_ACTIVE</span>
      </div>
    </div>
  );
}

/** Catches WebGL context-creation failures (unsupported/disabled GPU, sandboxed
 * environments) so a 3D rendering failure never crashes the whole page. */
class CanvasErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn('3D brain scene failed to initialize, falling back to static visual:', error.message);
  }

  render() {
    if (this.state.hasError) {
      return <StaticNeuralFallback />;
    }
    return this.props.children;
  }
}

function isWebglAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function BrainScene() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [webglAvailable, setWebglAvailable] = useState(true);

  useEffect(() => {
    setMounted(true);
    setWebglAvailable(isWebglAvailable());
  }, []);

  if (!mounted) return null;

  if (prefersReducedMotion || !webglAvailable) {
    return <StaticNeuralFallback />;
  }

  return (
    <div className="w-full h-full absolute inset-0 z-0 opacity-80 pointer-events-none md:pointer-events-auto">
      <CanvasErrorBoundary>
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (e) => e.preventDefault());
        }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <Suspense fallback={null}>
            <NeuralBrain />
          </Suspense>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate={false} 
            maxPolarAngle={Math.PI / 1.5} 
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
