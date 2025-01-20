"use client";

// src/components/Header.js
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Logo from "./../components/Logo";
import RightActions from "./RightActions";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const NAVIGATION_ITEMS = [
  { label: "Features", sectionId: "features" },
  { label: "Cards", sectionId: "cards" },
  { label: "Stocks", sectionId: "stocks" },
  { label: "Crypto", sectionId: "crypto" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const actionsRef = useRef(null);
  const containerRef = useRef(null);
  const navRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: section, offsetY: 100 },
        ease: "power2.inOut"
      });
    }
  };

  useEffect(() => {
    // Initial animation for header elements
    gsap.fromTo(
      containerRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.75)",
      }
    );

    gsap.fromTo(
      [logoRef.current, navRef.current, actionsRef.current],
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
        stagger: 0.1,
        ease: "power2.out",
      }
    );

    // Create scroll triggers for each section
    NAVIGATION_ITEMS.forEach(({ sectionId }) => {
      ScrollTrigger.create({
        trigger: `#${sectionId}`,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) {
            setActiveSection(sectionId);
          }
        }
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 flex justify-center w-full px-4 py-5"
      style={{ zIndex: 1000 }}
    >
      <div
        ref={containerRef}
        className={`max-w-6xl mx-auto grid grid-cols-12 items-center px-8 py-3 rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            : "bg-white/50 backdrop-blur-sm"
        }`}
      >
        <div ref={logoRef} className="col-span-3">
          <Logo />
        </div>
        
        <nav ref={navRef} className="flex justify-center col-span-6 gap-6">
          {NAVIGATION_ITEMS.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`text-sm font-medium transition-all duration-300 relative ${
                activeSection === sectionId
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {label}
              {activeSection === sectionId && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div ref={actionsRef} className="flex justify-end col-span-3">
          <RightActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
