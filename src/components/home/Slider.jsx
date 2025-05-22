"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/home/hero.module.css";

export default function Slider() {
  const images = [
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg4Smx-L._SL1500_.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === current ? styles.active : ""
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              fill
              
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
