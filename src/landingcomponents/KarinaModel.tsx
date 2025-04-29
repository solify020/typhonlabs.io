import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const RotatingModel: React.FC = () => {
  const modelRef = useRef<THREE.Group | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  // Load the GLTF model
  const { scene, animations } = useGLTF("/model.glb") as unknown as {
    scene: THREE.Group;
    animations: THREE.AnimationClip[];
  };

  useEffect(() => {
    if (animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixerRef.current!.clipAction(clip);
        action.play();
      });
    }

    // Cleanup: Stop animations when component unmounts
    return () => {
      mixerRef.current?.stopAllAction();
    };
  }, [scene, animations]);

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
    mixerRef.current?.update(delta);
  });

  return <primitive ref={modelRef} object={scene} scale={0.2} />;
};

export default RotatingModel;
