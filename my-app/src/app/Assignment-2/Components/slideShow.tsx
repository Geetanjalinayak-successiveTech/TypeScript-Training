"use client";

import { useState, useEffect } from "react";

export default function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setISPlaying] = useState<boolean>(true);

  const slides: string[] = [
    "/images/c0cb1eca075ae50f27bb1079c573a181.jpg",
    "/images/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
    "/images/download (2).jpeg",
  "/images/download (3).jpeg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      (prev + 1) % slides.length);
  };

  const toggle = () => {
    setISPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div style={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
      <h1 style={{color:"red"}}>Welcome to Slide Show </h1>
      <div>
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide}`}
          style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={toggle}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
