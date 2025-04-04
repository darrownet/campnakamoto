"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [playbackRate] = useState(2);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date('October 10, 2025 12:00:00');
    const now = new Date();
    const difference = Number(Number(targetDate) - Number(now));

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    let animationFrameId: number;
    if (!videoReady && !videoError && canvasRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });

      const updateSize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };

      updateSize();

      const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
      const material = new THREE.MeshBasicMaterial({ color: 0xF7931A, wireframe: true });
      const torus = new THREE.Mesh(geometry, material);

      scene.add(torus);
      camera.position.z = 30;

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        renderer.render(scene, camera);
      };

      animate();

      window.addEventListener('resize', updateSize);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', updateSize);
      };
    }
  }, [videoReady, videoError]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('canplay', () => setVideoReady(true));
      videoRef.current.addEventListener('error', () => setVideoError(true));
    }
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
      <div
          className="relative w-full h-screen flex items-center justify-center overflow-hidden hero-container">
        <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://v.nostr.build/PjTl8NCpnQec2iJl.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-copy">
          <motion.h2
              className="sm:text-4xl md:text-5xl lg:text-6xl mx-auto"
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
          >
            An Island Bitcoin Retreat
          </motion.h2>
          <div className="hero-logo">
            <img src="/images/camp-nakamoto-badge.png"/>
          </div>
          <motion.h3
              className="text-xl sm:text-2xl md:text-3xl mb-8"
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
          >
            Friday, October 10<sup>th</sup> – Monday, October 13<sup>th</sup> 2025
          </motion.h3>

          <motion.h3 className="text-xl sm:text-2xl md:text-3xl mb-8">
            <div>
              <span>{timeLeft.days} days </span>
              <span>{timeLeft.hours} hours </span>
              <span>{timeLeft.minutes} minutes </span>
            </div>
          </motion.h3>

          <div className="flex justify-center items-center">
            <motion.button
                className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 transform transition-all duration-300 ease-in-out"
                whileHover={{scale: 1.05, boxShadow: "0 0 8px rgb(34 197 94 / 60%)"}}
                whileTap={{scale: 0.95}}
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
            >
              <a target="_blank" href="https://massadoptionbtc.ticketspice.com/camp-nakamoto" rel="noopener noreferrer">
                Buy Tickets
              </a>
            </motion.button>
            <h3 className="ml-4">ONLY 55 Tickets Left!</h3>
          </div>
        </div>
      </div>
  );
};

export default Hero;
