"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const CartoonCharacterModel: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e); // Dark purple-blue background

    // Camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(400, 400);

    // Mount renderer to DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Head Group
    const headGroup = new THREE.Group();
    scene.add(headGroup);

    // Head Geometry
    const headGeometry = new THREE.SphereGeometry(1, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({
      color: 0x7b5a29, // Skin tone matching the image
      shininess: 10,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    headGroup.add(head);

    // Hat (baseball cap)
    const capGeometry = new THREE.CylinderGeometry(1.2, 1.2, 0.3, 32);
    const capMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff, // White cap
      shininess: 20,
    });
    const cap = new THREE.Mesh(capGeometry, capMaterial);
    cap.rotation.x = Math.PI / 2;
    cap.position.y = 1.1; // Adjusted position for better fit
    headGroup.add(cap);

    // Curved cap brim
    const brimGeometry = new THREE.CylinderGeometry(1.4, 1.4, 0.1, 32);
    const brimMaterial = new THREE.MeshPhongMaterial({
      color: 0xcccccc, // Light gray brim
      shininess: 30,
    });
    const brim = new THREE.Mesh(brimGeometry, brimMaterial);
    brim.rotation.x = Math.PI / 2;
    brim.position.y = 0.85; // Adjusted position for better fit
    headGroup.add(brim);

    // Eyes (more stylized)
    const eyeGeometry = new THREE.CircleGeometry(0.15, 32); // Smaller eyes
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.25, 0.2, 0.9); // Adjusted position
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.25, 0.2, 0.9); // Adjusted position
    headGroup.add(rightEye);

    // Grin (simulating the character's expression)
    const grinGeometry = new THREE.CylinderGeometry(0.7, 0.7, 0.1, 32); // Adjusted size
    const grinMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const grin = new THREE.Mesh(grinGeometry, grinMaterial);
    grin.rotation.x = Math.PI / 2;
    grin.position.set(0, -0.35, 0.8); // Adjusted position
    grin.scale.x = 0.5;
    headGroup.add(grin);

    // Slight tilt and rotation to match image angle
    headGroup.rotation.y = -0.1; // Adjusted rotation
    headGroup.rotation.x = 0.1;

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: 400, height: 400 }} />;
};

export default CartoonCharacterModel;
