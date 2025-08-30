import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { mockDevelopers } from "@/lib/data";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Github, Linkedin } from "lucide-react";

const Banner = () => {
  {
    /* Developers Section */
  }
  return (
    <section className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developers and innovators building the future of
            decentralized funding
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockDevelopers.map((developer, index) => (
            <motion.div
              key={developer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-glow text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <Avatar className="w-20 h-20 mx-auto border-2 border-primary/20">
                    <AvatarImage src={developer.avatar} alt={developer.name} />
                    <AvatarFallback>
                      {developer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{developer.name}</h3>
                    <p className="text-primary text-sm">{developer.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {developer.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    {developer.github && (
                      <a
                        href={`https://github.com/${developer.github}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {developer.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${developer.linkedin}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
