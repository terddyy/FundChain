"use client";
import React from "react";
import { Button } from "@/app/components/ui/button";
import { Progress } from "@/app/components/ui/progress";

import { Calendar, DollarSign, Heart, Users, Vote } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/data";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const UserProjectCard = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="card-glow hover:scale-105 transition-all duration-300 h-full">
        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between">
            <Badge variant="secondary" className="text-xs">
              {project.sector?.name}
            </Badge>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <CardTitle className="text-lg leading-tight">
            {project.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Funding Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Funding Progress</span>
              <span className="font-medium">
                {(project.funds / project.targetFunds) * 100}%
              </span>
            </div>
            <Progress value={(4 / project.targetFunds) * 100} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatCurrency(project.funds)} raised</span>
              <span>{formatCurrency(project.targetFunds)} goal</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Vote className="h-3 w-3 text-primary" />
                <span className="text-sm font-medium">{project.votes}</span>
              </div>
              <span className="text-xs text-muted-foreground">Votes</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Calendar className="h-3 w-3 text-primary" />
                <span className="text-sm font-medium">
                  {Math.ceil(
                    (new Date(project.fundingDeadline).getTime() - Date.now()) /
                      (1000 * 60 * 60 * 24)
                  )}
                  d
                </span>
              </div>
              <span className="text-xs text-muted-foreground">Left</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Users className="h-3 w-3 text-primary" />
                <span className="text-sm font-medium">
                  {Math.floor(Math.random() * 50) + 10}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">Backers</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-2 pt-2">
            <Button variant="vote" size="sm" className="flex-1">
              <Vote className="h-4 w-4 mr-2" />
              Vote
            </Button>
            <Button variant="fund" size="sm" className="flex-1">
              <DollarSign className="h-4 w-4 mr-2" />
              Fund
            </Button>
          </div>

          {/* Project Details */}
          <div className="pt-2 border-t border-border/50">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>By {project.proposerName}</span>
              <span>{formatDate(project.created_at)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UserProjectCard;
