"use client";
import React, { useState } from "react";

const LandingNav = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 5 });

  const navLinks = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "How it works", link: "#How" },
  ];

  function handleNav(e: React.MouseEvent<HTMLElement>) {
    const target = e.currentTarget;
    const left = target.offsetLeft;
    const width = target.offsetWidth;

    setIndicatorStyle({ left, width });
  }

  return (
    <nav className="px-6 h-18 flex items-center justify-between text-white sticky top-0 bg-dark-violet z-20 md:px-10 2xl:px-24">
      {/* Logo */}
      <h1 className="font-bold text-xl md:text-3xl">FundChain</h1>

      {/* nav list */}
      <div className="relative flex items-center text-sm w-fit md:gap-3 ">
        {/* moving bg */}
        <span
          className="absolute h-8 bg-violet rounded-lg transition-all duration-300"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />
        {navLinks.map((item, index) => (
          <a
            href={item.link}
            onClick={handleNav}
            className="z-20 text-sm transition-colors  p2-2 px-3 rounded-sm md:text-lg"
            key={index}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default LandingNav;
