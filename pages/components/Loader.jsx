import React, { useEffect, useState } from "react";
import gsap from 'gsap';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if loader has been shown before
    if (sessionStorage.getItem('loaderShown')) {
      setIsLoading(false);
      return;
    }

    // Animate loader sliding up after delay
    const timer = setTimeout(() => {
      gsap.to(".loading", {
        duration: 1,
        y: "-100%", 
        ease: "power3.inOut",
        onComplete: () => {
          setIsLoading(false);
          sessionStorage.setItem('loaderShown', 'true');
        }
      });
    }, 2500); // Match video duration

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#fafafb] z-[9999] flex items-center justify-center loading">
      <div className="flex flex-col items-center">
        <video
          autoPlay
          muted
          playsInline
          className="w-[200px] h-[200px] object-cover"
        >
          <source src="/images/loader.mp4" type="video/mp4" />
        </video>
        <p className="text-xl font-semibold ">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
