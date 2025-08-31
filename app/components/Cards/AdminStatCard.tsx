import React from "react";
import { Card, CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  value: string | number;
  change: string;
  color: string;
  icon: LucideIcon;
}

const AdminStatCard = ({ title, value, change, color, icon }: CardProps) => {
  const Icon = icon;
  return (
    <Card className="card-glow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm text-green-500">{change}</p>
          </div>
          <Icon className={`w-8 h-8 ${color}`} />
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminStatCard;
