// import {
//   BookOpen,
//   Droplet,
//   Trees,
//   Laptop,
//   HeartPulse,
//   ShoppingBasket,
//   Sun,
//   Palette,
//   Briefcase,
//   AlertTriangle,
//   TabletSmartphone,
//   ThumbsUp,
//   BanknoteArrowUp,
// } from "lucide-react";
import { NextResponse } from "next/server";
const projects = [
  {
    title: "Community Learning Center",
    description:
      "Build a modern learning facility with digital resources for underserved communities.",
    sector: "Education",
    targetFunds: 1000,
    currentFunds: 80,
  },
  {
    title: "Clean Water Initiative",
    description:
      "Install water filtration systems in rural villages to provide safe and clean drinking water.",
    sector: "Health",
    targetFunds: 2500,
    currentFunds: 500,
  },
  {
    title: "Urban Tree Planting Program",
    description:
      "Plant 1,000 trees across urban neighborhoods to combat pollution and improve air quality.",
    sector: "Environment",
    targetFunds: 1500,
    currentFunds: 300,
  },
  {
    title: "Youth Coding Bootcamp",
    description:
      "Offer free tech education and career mentorship to underprivileged high school students.",
    sector: "Technology",
    targetFunds: 2000,
    currentFunds: 1250,
  },
  {
    title: "Mobile Health Clinic",
    description:
      "Deploy a mobile clinic to deliver essential health services to remote communities.",
    sector: "Healthcare",
    targetFunds: 5000,
    currentFunds: 2450,
  },
  {
    title: "Food for Families",
    description:
      "Support low-income families with monthly grocery packages to fight hunger.",
    sector: "Social Welfare",
    targetFunds: 1200,
    currentFunds: 960,
  },
  {
    title: "Solar Power for Schools",
    description:
      "Equip schools in off-grid areas with solar panels to ensure continuous learning.",
    sector: "Energy",
    targetFunds: 3000,
    currentFunds: 1800,
  },
  {
    title: "Indigenous Arts Revival",
    description:
      "Fund workshops and exhibitions to preserve indigenous crafts and support local artists.",
    sector: "Culture",
    targetFunds: 800,
    currentFunds: 310,
  },
  {
    title: "Women in Business Program",
    description:
      "Provide microloans and training for women entrepreneurs in rural communities.",
    sector: "Entrepreneurship",
    targetFunds: 4000,
    currentFunds: 1650,
  },
  {
    title: "Disaster Relief Fund",
    description:
      "Provide emergency supplies and shelter to families affected by natural disasters.",
    sector: "Emergency Response",
    targetFunds: 6000,
    currentFunds: 3200,
  },
  {
    title: "Digital Access for Seniors",
    description:
      "Distribute tablets and tech training to elderly individuals to help them stay connected.",
    sector: "Elderly Care",
    targetFunds: 1800,
    currentFunds: 700,
  },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return NextResponse.json(projects);
}
