"use client";

import React, { useState, useRef } from "react";
import Logo from "./../components/Logo";
import RightActions from "./RightActions";

// Navigation items configuration
const NAVIGATION_ITEMS = [
  { label: "Features", sectionId: "features" },
  { label: "Docs", url: "https://docs.mileston.co" },
  {
    label: "Company",
    submenu: [
      { label: "About Us", sectionId: "sendMoneyForm" },
      { label: "Careers", url: "https://www.linkedin.com/company/mileston/jobs/" }
    ]
  },
  { label: "Contact Us", url: "mailto:ahmed@mileston.co" }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const actionsRef = useRef(null);
  const containerRef = useRef(null);
  const navRef = useRef(null);

  // Smoothly scrolls to a section with the provided ID
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handles clicks for navigation items and submenu items
  const handleNavItemClick = (item) => {
    if (item.sectionId) {
      scrollToSection(item.sectionId);
    } else if (item.url && item.url.startsWith("mailto:")) {
      window.location.href = item.url;
    } else if (item.url) {
      window.open(item.url, "_blank");
    }
  };

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
        {/* Logo Section */}
        <div ref={logoRef} className="col-span-6 lg:col-span-3 flex justify-start">
          <Logo />
        </div>

        {/* Navigation */}
        <nav ref={navRef} className="hidden lg:flex justify-center col-span-6 gap-6 relative">
          {NAVIGATION_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.submenu && setIsCompanyOpen(true)}
              onMouseLeave={() => item.submenu && setIsCompanyOpen(false)}
            >
              {item.submenu ? (
                <>
                  <button className="text-sm font-medium transition-all duration-300 text-gray-600 hover:text-black">
                    {item.label}
                  </button>

                  {/* Dropdown Menu */}
                  {isCompanyOpen && (
                    <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-lg p-2 w-48 transition-all duration-200 opacity-100 scale-100">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => handleNavItemClick(subItem)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md text-left w-full"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => handleNavItemClick(item)}
                  className={`text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.sectionId ? "text-black" : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.label}
                  {activeSection === item.sectionId && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black rounded-full" />
                  )}
                </button>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions Section */}
        <div ref={actionsRef} className="flex justify-end col-span-6 lg:col-span-3">
          <RightActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
