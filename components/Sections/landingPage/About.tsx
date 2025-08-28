import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Globe, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  {
    /* Purpose Section */
  }
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gradient">Our Purpose</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              FundChain bridges the gap between innovative ideas and global
              capital. We believe in democratizing access to funding while
              maintaining transparency and accountability through blockchain
              technology.
            </p>

            <div className="space-y-4">
              {[
                { icon: Shield, text: "Transparent smart contract funding" },
                {
                  icon: Globe,
                  text: "Global accessibility for all innovators",
                },
                { icon: Users, text: "Community-driven project validation" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <Button variant="cyber" size="lg" asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="card-glow p-6">
                  <div className="text-2xl font-bold text-primary">$2.5M+</div>
                  <div className="text-muted-foreground">Total Funded</div>
                </Card>
                <Card className="card-glow p-6">
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground">Projects</div>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="card-glow p-6">
                  <div className="text-2xl font-bold text-primary">89%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </Card>
                <Card className="card-glow p-6">
                  <div className="text-2xl font-bold text-primary">45K+</div>
                  <div className="text-muted-foreground">Community</div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
