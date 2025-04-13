import React, { useEffect, useState, useRef } from "react";
import gsap from 'gsap';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if loader has been shown before
    if (sessionStorage.getItem('loaderShown')) {
      setIsLoading(false);
      return;
    }

    // Start video playback programmatically
    if (videoRef.current) {
      // Try to play the video immediately
      const playPromise = videoRef.current.play();
      
      // Handle potential play() promise rejection (happens on some mobile browsers)
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Auto-play was prevented. This is normal on some devices.", error);
          
          // Fallback for mobile devices where autoplay fails
          const fallbackTimer = setTimeout(() => {
            // Try playing again or proceed with animation
            videoRef.current?.play().catch(() => {
              console.log("Second play attempt failed, continuing with loader animation");
            });
          }, 500);
          
          return () => clearTimeout(fallbackTimer);
        });
      }
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
    }, 3000); // Increased duration to ensure video plays on mobile

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#fafafb] z-[9999] flex items-center justify-center loading">
      <div className="flex flex-col items-center px-4">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover"
          poster="/images/loader-poster.jpg" // Add a poster image as fallback
        >
          <source src="/images/loader.mp4" type="video/mp4" />
          {/* Fallback content for browsers that don't support video */}
          <img src="/images/loader-fallback.jpg" alt="Loading" className="w-full h-full object-cover" />
        </video>
        <p className="text-lg sm:text-xl font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
