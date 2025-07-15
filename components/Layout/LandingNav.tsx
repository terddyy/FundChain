"use client";
import React, { useState } from "react";

const LandingNav = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const navLinks = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "How it works", link: "#How" },
  ];

  function handleNav(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.currentTarget;
    const left = target.offsetLeft;
    const width = target.offsetWidth;

    setIndicatorStyle({ left, width });
  }

  return (
    <nav className="px-6 h-14 flex items-center justify-between text-white sticky top-0 bg-dark-violet z-20">
      {/* Logo */}
      <h1 className="font-bold  text-xl">FundChain</h1>

      {/* nav list */}
      <div className="flex items-center text-sm w-fit">
        {/* moving bg */}
        {/* Indicator */}
        <span
          className="absolute h-8 bg-violet rounded-lg transition-all duration-300"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />
        {navLinks.map((item, index) => (
          <button
            onClick={handleNav}
            className="z-20 text-sm transition-colors  p2-2 px-3 rounded-sm"
            key={index}
          >
            <a href={item.link}>{item.name}</a>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default LandingNav;
