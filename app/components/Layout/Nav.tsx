"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Zap, X, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/Context/AuthContext";

interface NavLinks {
  href: string;
  label: string;
  variant?: string;
}

interface NavProps {
  role?: string; // current user role
  navlinks: NavLinks[];
}

const Nav = ({ navlinks, role }: NavProps) => {
  const location = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useAuth();

  // Filter nav items based on user role

  // Add auth links only if user not logged in
  const navItems = user
    ? navlinks
    : [
        { href: "/auth/sign-in", label: "Sign in" },
        { href: "/auth/sign-up", label: "Sign Up", variant: "neon" },
      ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Zap className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-neon-cyan" />
              <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full blur-lg transition-all duration-300 group-hover:bg-neon-cyan/40"></div>
            </div>
            <span className="text-xl font-bold text-gradient">FundChain</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-border">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {!user && (
                  <div className="px-4 pt-2">
                    <Button variant="neon" size="sm" className="w-full">
                      Connect Wallet
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
