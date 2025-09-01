"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LucideIcon, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";


interface StatCardProps {
  icon: LucideIcon;
  title: string;
  color: string;
  bgColor: string;
  value: string | number;
  trend: string;
  index: number;
}

const UserStatCard = ({
  icon,
  title,
  color,
  bgColor,
  value,
  trend,
  index,
}: StatCardProps) => {
  const Icon = icon;
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      >
      <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <div
            className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center`}
            >
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground mb-1">
            {value}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
            {trend}
          </div>
        </CardContent>
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 ${color.replace(
            "text-",
            "bg-"
          )} opacity-20 group-hover:opacity-40 transition-opacity`}
          />
      </Card>
    </motion.div>
          </>
  );
};

export default UserStatCard;
