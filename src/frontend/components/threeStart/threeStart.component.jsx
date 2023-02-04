import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import '../../stylesheets/threeStart.stylesheet.css';

const ThreeStart = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [renderer, setRenderer] = useState(null);

  let rotationSpeed = 0.0025;

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create a renderer
    const newRenderer = new THREE.WebGLRenderer();
    newRenderer.setSize(width, height);


    // Add the renderer to the container
    containerRef.current.appendChild(newRenderer.domElement);

    // Create a cube
    const cubeGeometry = new THREE.BoxGeometry(0.1, 2, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00AABB });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // Create an outline for the cube
    const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    cube.add(edges);

    camera.position.z = 5;

    // const points = [];
    // const radius = 1;
    // const segments = 32;
    // for (let i = 0; i < Math.PI * 2; i += Math.PI * 2 / segments) {
    //   points.push(new THREE.Vector2(Math.cos(i) * radius, Math.sin(i) * radius));
    // }

    // const roundedEdgeGeometry = new THREE.LatheGeometry(points, segments);
    // const roundedEdge = new THREE.Mesh(roundedEdgeGeometry, material);

    // scene.add(roundedEdge);
  
    // Raycaster for handling mouse events
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Handle mouse events
    const onMouseMove = (event) => {
      // Calculate mouse position in normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update the raycaster to use the current mouse position
      raycaster.setFromCamera(mouse, camera);

      // Check if the ray from the mouse intersects with the pressable geometry
      const intersects = raycaster.intersectObjects([cube]);
      if (intersects.length > 0) {
        newRenderer.domElement.style.cursor = 'pointer';
        cube.material.color.set(0x00ff00);
        rotationSpeed = 0.015;

      } else {
        newRenderer.domElement.style.cursor = 'auto';
        cube.material.color.set(0x00AABB);
        rotationSpeed = 0.0025;
      }
    };

    const onMouseClick = (event) => {
      // Update the raycaster to use the current mouse position
      raycaster.setFromCamera(mouse, camera);

      // Check if the ray from the mouse intersects with the pressable geometry
      const intersects = raycaster.intersectObjects([cube]);
      if (intersects.length > 0) {
        console.log("CLICK!");
      }
    };


    // Attach mouse event listeners
    newRenderer.domElement.addEventListener('mousemove', onMouseMove);
    newRenderer.domElement.addEventListener('click', onMouseClick);


    // Animate the scene
    const animate = function() {
      requestAnimationFrame(animate);
      cube.rotation.y += rotationSpeed;
      newRenderer.render(scene, camera);
    };
    animate();
    setRenderer(newRenderer);
  }, [width, height]);

  useEffect(() => {
    setWidth(containerRef.current.offsetWidth);
    setHeight(containerRef.current.offsetHeight);
  }, []);
  
  useEffect(() => {
    const onResize = () => {
      if (renderer) {
        containerRef.current.removeChild(renderer.domElement);
      }
      setWidth(containerRef.current.offsetWidth);
      setHeight(containerRef.current.offsetHeight);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [renderer]);

  return (
    <div id='container' ref={containerRef} />
  );
}

export default ThreeStart