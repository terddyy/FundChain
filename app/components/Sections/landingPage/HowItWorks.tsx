import Image from "next/image";
import React from "react";
import {
  GraduationCap,
  Sprout,
  Brain,
  Baby,
  Laptop,
  Lightbulb,
  Vote,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";

const HowItWorks = () => {
  const howItWorks = [
    {
      icon: Lightbulb,
      title: "Propose Your Project",
      description:
        "Submit your innovative idea with detailed information about funding requirements and expected outcomes.",
      step: "01",
    },
    {
      icon: Vote,
      title: "Community Voting",
      description:
        "The community evaluates and votes on projects based on potential impact and feasibility.",
      step: "02",
    },
    {
      icon: Wallet,
      title: "Secure Funding",
      description:
        "Approved projects receive funding through smart contracts with built-in milestone tracking.",
      step: "03",
    },
  ];

  /* How It Works Section */
  return (
    <section className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent, and decentralized funding in three easy steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="card-glow h-full">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
