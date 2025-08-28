"use client"
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-banner.jpg";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    //  * Hero Section *
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* <Image
          // src={heroImage}
          alt="FundChain Hero"
          className="w-full h-full object-cover opacity-20"
          src={""}
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 bg-[length:50px_50px] bg-grid animate-grid"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="border-primary text-primary px-4 py-2"
            >
              🚀 Next Generation Funding Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient leading-tight">
              FundChain
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering innovation through decentralized funding. Connect
              visionaries with global investors in a transparent,
              blockchain-powered ecosystem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              asChild
              className="animate-pulse-glow"
            >
              <Link href="/propose">
                Propose a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="neon" size="lg" asChild>
              <Link href="/projects">Explore Projects</Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex justify-center items-center space-x-8 text-muted-foreground text-sm pt-8"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live on Blockchain</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>24/7 Global Access</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
      />
    </section>
  );
};

export default Hero;
