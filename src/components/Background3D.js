import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShapes() {
  const group = useRef();
  
  // Create multiple geometric shapes with better variety
  const shapes = useMemo(() => {
    const temp = [];
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.5, 8, 6),
      new THREE.OctahedronGeometry(0.6),
      new THREE.TetrahedronGeometry(0.7),
      new THREE.IcosahedronGeometry(0.4)
    ];
    
    for (let i = 0; i < 30; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(
          Math.random() * 0.2 + 0.5, // Blue to purple range
          0.6,
          0.4 + Math.random() * 0.3
        ),
        transparent: true,
        opacity: 0.2 + Math.random() * 0.3,
        wireframe: true
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      temp.push({ 
        mesh, 
        speed: Math.random() * 0.01 + 0.005,
        floatSpeed: Math.random() * 0.5 + 0.5
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    shapes.forEach(({ mesh, speed, floatSpeed }) => {
      mesh.rotation.x += speed;
      mesh.rotation.y += speed * 0.7;
      mesh.rotation.z += speed * 0.5;
      
      // Gentle floating motion
      mesh.position.y += Math.sin(state.clock.elapsedTime * floatSpeed + mesh.position.x) * 0.002;
      mesh.position.x += Math.cos(state.clock.elapsedTime * floatSpeed * 0.5 + mesh.position.y) * 0.001;
    });
  });

  return (
    <group ref={group}>
      {shapes.map(({ mesh }, index) => (
        <primitive key={index} object={mesh} />
      ))}
    </group>
  );
}

function Particles() {
  const points = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      const time = Math.random() * 100;
      const factor = Math.random() * 20 + 10;
      const speed = Math.random() * 0.01;
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      
      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      particle.time += particle.speed;
      const { x, y, z } = particle;
      points.current.geometry.attributes.position.array[i * 3] = x + Math.cos(particle.time) * particle.factor;
      points.current.geometry.attributes.position.array[i * 3 + 1] = y + Math.sin(particle.time) * particle.factor;
      points.current.geometry.attributes.position.array[i * 3 + 2] = z + Math.sin(particle.time) * particle.factor;
    });
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={new Float32Array(particles.length * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        color="#6366f1"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

function Background3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <FloatingShapes />
        <Particles />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}

export default Background3D; 