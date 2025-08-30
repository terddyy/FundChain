import { Zap, Github, Twitter, MessageCircle } from "lucide-react";
import Link from "next/link";
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
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold text-gradient">FundChain</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering innovation through decentralized funding. Building the
              future, one project at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Platform</h3>
            <ul className="space-y-2">
              {[
                { href: "/projects", label: "Explore Projects" },
                { href: "/sectors", label: "Browse Sectors" },
                { href: "/propose", label: "Propose Project" },
                { href: "/how-it-works", label: "How It Works" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: "/docs", label: "Documentation" },
                { href: "/whitepaper", label: "Whitepaper" },
                { href: "/api", label: "API Reference" },
                { href: "/community", label: "Community" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/security", label: "Security" },
                { href: "/support", label: "Support" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
        
            <p className="text-muted-foreground text-sm text-center">
              © {new Date().getFullYear()} FundChain. All rights reserved.
            </p>
        
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
