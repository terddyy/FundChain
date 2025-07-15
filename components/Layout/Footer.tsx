import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Contact"],
    },
    {
      title: "Support",
      links: ["Help Center", "Terms of Service", "Privacy Policy", "FAQs"],
    },
    {
      title: "Sectors",
      links: [
        "Education",
        "Agriculture",
        "Mental Health",
        "Single Mothers",
        "Technology",
      ],
    },
    {
      title: "Stay Connected",
      links: [
        "Subscribe to our newsletter",
        "Follow us on social media",
        "Join our community Discord",
        "Partner with us",
      ],
    },
  ];


  return (
    <footer className="bg-white/10 opacity-90 mt-30 p-4 text-white flex flex-col items-center gap-3">
      <h1 className="text-3xl font-bold my-5">FundChain</h1>

      <div className="grid grid-cols-2 gap-2">
        {footerSections.map((item, index) => (
          <div key={index}>
            <h1 className="text-lg font-semibold">{item.title}</h1>
            <div className="flex flex-col">
              {item.links.map((item, index) => (
                <a key={index} href="#" className="text-sm text-white/70 pl-1 hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-white/80 text-xs text-center mt-10">
        © 2025 FundChain. All rights reserved. · Privacy Policy · Terms of
        Service
      </p>
    </footer>
  );
};

export default Footer;
