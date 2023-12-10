"use client";
import React, { ReactNode, useEffect, useState } from "react";

function Layout({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold as needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex w-full flex-grow mx-auto ${isMobile ? 'mobile-message' : ''}`}>
      {isMobile ? (
        <p className="text-center text-lg text-red-500 animate-pulse">
        You cant access this page on a mobile device.
      </p>
      ) : (
        children
      )}
    </div>
  );
}

export default Layout;
